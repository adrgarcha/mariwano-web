import NavbarItem from "./NavbarItem";
import HomeIcon from "./icons/HomeIcon.jsx"
import CommandIcon from "./icons/CommandIcon.jsx"
import CommunityIcon from "./icons/CommunityIcon.jsx"
import { Link } from "react-router-dom";
import mariwanoIcon from "../assets/mariwano-icon.png";

export default function Navbar() {
    return (
        <header>
            <nav className="bg-slate-900 z-30 px-6 pb-0.5 fixed left-0 right-0 border-b-2 border-slate-800">
                <ul className="flex justify-between items-center gap-x-4 text-3xl">
                    <li>
                        <Link to="/"><img className="w-[48px] h-[48px] rounded-full" src={mariwanoIcon} alt="Mariwano icon" /></Link>
                    </li>
                    <section className="flex gap-x-10">
                        <NavbarItem icon={<HomeIcon />} text="Inicio" link="/" />
                        <NavbarItem icon={<CommandIcon />} text="Comandos" link="/commands" />
                        <NavbarItem icon={<CommunityIcon />} text="Comunidad" link="/server" />
                    </section>
                    <li>

                    </li>
                </ul>
            </nav>
        </header>
    )
}