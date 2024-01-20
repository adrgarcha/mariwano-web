import { Link } from "react-router-dom";

export default function CommandCategory({ route, icon, categoryName }) {
    return (
        <li className="m-3 rounded-xl transition-colors ease-in-out hover:bg-slate-950">
            <Link to={`/commands/${route}`} className="flex items-center gap-x-4 p-3">
                {icon}
                <span className="text-2xl font-bold">{categoryName}</span>
            </Link>
        </li>
    )
}