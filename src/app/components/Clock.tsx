"use client";

import { useEffect, useState } from "react";


export default function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Seoul", hour12: false }));

    useEffect(() => {
    const interval = setInterval(() => {
        setTime(new Date().toLocaleTimeString("en-US", { timeZone: "Asia/Seoul", hour12: false }));
    }, 1000);

    return () => clearInterval(interval);
    }, []);

    return(<h1 className="text-4xl font-black tabular-nums">{time} KST</h1>);
}