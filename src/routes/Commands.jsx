import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import CommandCategory from "../components/CommandCategory";
import GlobeIcon from "../components/icons/GlobeIcon";
import CogIcon from "../components/icons/CogIcon";
import ShieldCheckIcon from "../components/icons/ShieldCheckIcon"
import DollarIcon from "../components/icons/DollarIcon";
import MindBlowingIcon from "../components/icons/MindBlowingIcon";
import HeadphoneIcon from "../components/icons/HeadphoneIcon";

export default function Commands() {
    return (
        <div className="relative h-screen w-full bg-slate-950 overflow-hidden font-mono font-medium text-white">
            <Navbar />
            <section className="flex pt-[4.25rem]">
                <aside className="z-20 w-72 h-screen bg-slate-900">
                    <ul>
                        <CommandCategory route="general" icon={<GlobeIcon />} categoryName="General" />
                        <CommandCategory route="admin" icon={<CogIcon />} categoryName="Administración" />
                        <CommandCategory route="moderation" icon={<ShieldCheckIcon />} categoryName="Moderación" />
                        <CommandCategory route="economy" icon={<DollarIcon />} categoryName="Economía" />
                        <CommandCategory route="fun" icon={<MindBlowingIcon />} categoryName="Diversión" />
                        <CommandCategory route="music" icon={<HeadphoneIcon />} categoryName="Música" />
                    </ul>
                </aside>
                <main className="h-screen w-screen overflow-y-scroll">
                    <Outlet />
                </main>
            </section>
        </div>
    )
}