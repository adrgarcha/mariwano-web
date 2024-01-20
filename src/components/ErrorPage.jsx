import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

    const error = useRouteError();

    return (
        <div className="bg-slate-950 h-screen flex flex-col justify-center items-center gap-y-8 text-white">
            <h1 className="text-7xl font-bold">Error ❌</h1>
            <p className="text-xl">Lo sentimos, ha ocurrido un error inesperado.</p>
            <p className="text-2xl font-medium">{error.statusText || error.message}</p>
        </div>
    );
}