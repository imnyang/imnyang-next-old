import { House, ChartGantt } from "lucide-react";
import Link from "next/link";

import './sidebar.css';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <Link href="/timeline" className="mb-8"><ChartGantt width={32} height={32} /></Link>
            <Link href="/" className="mb-8"><House width={32} height={32} /></Link>
        </div>
    );
}