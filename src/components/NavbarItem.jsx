import { Link } from "react-router-dom";

export default function NavbarItem({ icon, text, link }) {
    return (
        <li className="my-2 py-0.5 pt-1 transition-colors duration-300 ease-in-out border-b-8 border-transparent hover:border-white">
            <Link to={link} className="flex items-center gap-x-2">
                {icon}
                {text}
            </Link>
        </li>
    )
}