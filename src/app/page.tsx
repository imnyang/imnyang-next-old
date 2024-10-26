import Clock from "./components/Clock";
import Profile from "./components/Profile";
import Sidebar from "./components/Sidebar";
import Timeline from "./components/Timeline";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex w-full h-full">
      <Sidebar />
      <main id="main">
        <Profile />

        <div>
            <div className="flex flex-wrap">
              <div className="p-10 min-w-[306px]">
                <h1 className="text-2xl font-bold">Local Time</h1>
                <Clock />
              </div>
              <div className="p-10 min-w-[390px]">
                <h1 className="text-2xl font-bold">Mail</h1>
                <Link href="mailto:me@imnyang.xyz" className="text-4xl font-black">me@imnyang.xyz</Link>
              </div>
              <div className="p-10 min-w-[400px] hidden sm:block">
                <h1 className="text-2xl font-bold">Projects</h1>
                <div className="max-w-[400px]">
                  <Link href="https://instagram.com/today.isangjeong">🍝 @today.isangjeong</Link><br />
                  <Link href="https://github.com/sqlare/sqlr.kr/tree/main">🔗 sqlr.kr/sqlite</Link>
                </div>
              </div>

            </div>
            <div className="flex flex-wrap sm:block">
              <div className="p-10 min-w-[700px] max-w-[700px] hidden sm:block">
                  <h1 className="text-2xl font-bold">Timeline</h1>
                  <Timeline h={148} />
                </div>
 
             </div>
        </div>
      </main>
    </div>
  );
}
