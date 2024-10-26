import Sidebar from "../components/Sidebar";
import Timeline from "../components/Timeline";

export default function TimelinePage() {
    return (
        <div className="flex w-full h-full">
            <Sidebar />
            <main id="main" className="w-full h-full flex items-center justify-center">
                <div className="w-full md:w-[70%] h-full p-5 flex justify-center flex-col">
                    <h1>Timeline</h1>
                    <Timeline h={500} />
                </div>
            </main>
        </div>
    );
}
