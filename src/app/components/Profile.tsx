"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Github, BookMarked, UsersRound } from "lucide-react";
import './profile.css';

export default function Profile() {
    const [userInfo, setUserInfo] = useState({ public_repos: 0, followers: 0 });

    useEffect(() => {
      async function fetchUserInfo() {
        try {
          const response = await fetch("https://api.github.com/users/imnyang");
          const data = await response.json();
          setUserInfo({ public_repos: data.public_repos, followers: data.followers });
        } catch (error) {
          console.error("Error fetching user info:", error);
        }
      }
  
      fetchUserInfo();
    }, []);

    useEffect(() => {
      const keySequence: string[] = [];
      const targetSequence = 'furry';
    
      const handleKeyDown = (event: KeyboardEvent) => {
        // 단일 키 입력 감지
        console.log(`Key: ${event.key} with keycode ${event.keyCode} has been pressed`);
        console.log(`KeySquare: ${keySequence.join('')}`);
        // 특정 문자열 시퀀스 감지
        keySequence.push(event.key);
        if (keySequence.length > targetSequence.length) {
          keySequence.shift();
        }
        if (keySequence.join('') === targetSequence) {
          console.log('Furry sequence detected!');
          const random = Math.random();
          console.log(`Random number: ${random}`);
          if (random < 0.1) {
            document.location.href = `https://wh64.net?a=${(Math.random() + 1).toString(36).substring(7)}page`;
          } else {
            document.location.href = `https://ny64.kr?a=${(Math.random() + 1).toString(36).substring(7)}`;
          }
        }
      };
    
      document.addEventListener('keydown', handleKeyDown);
    
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    }, []);
    return (
        <div id="profile">
            <Image src="https://f.imnyang.xyz/profile/hatchu_imnyang.webp" width={256} height={256} alt={"imnyang's profile"} />
            <h1 className="text-4xl font-extrabold">imnyang</h1>
            <br/>
            <Link href="https://github.com/imnyang" className="flex felx-col">
                <Github />
                <p className="ml-2 mr-2">│</p>
                <p className="text-gray-300 flex flex-row mr-2 gap-1"><UsersRound />ㆍ {userInfo.followers}</p>
                <p className="text-gray-300 flex flex-row gap-1"><BookMarked />ㆍ {userInfo.public_repos}</p>
            </Link>

            <br/>
            <div>
            <p>🖥️ Software Engineer</p>
            <p>🎨 Team. <Link href="https://sqlare.com">Sqlare</Link></p>
            <p>📚 Middle School Student in South Korea</p>
            </div>
        </div>
    )
}