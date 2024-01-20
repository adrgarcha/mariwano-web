import Navbar from "../components/Navbar";
import droguerosUnidosIcon from "../assets/drogueros-unidos-icon.gif";
import LinkButton from "../components/LinkButton";
import Background from "../components/Background";

export default function Server() {
    return (
        <div className="relative h-screen w-full bg-slate-950 overflow-hidden font-mono font-medium text-white">
            <Navbar />
            <Background />
            <main className="flex items-center justify-center gap-x-40 h-screen">
                <section className="flex flex-col gap-y-6">
                    <h1 className="text-7xl font-bold">Drogueros Unidos</h1>
                    <img src={droguerosUnidosIcon} alt="Icono del servidor Drogueros Unidos" className="rounded-xl w-[400px] h-[400px] mx-auto" />
                </section>
                <section className="flex flex-col gap-y-10">
                    <h2 className="text-2xl text-center font-bold">👽 ¡Únete a nuestra comunidad!</h2>
                    <p className="text-xl text-balance text-center w-[800px]">
                        Un servidor donde serás bien recibido y donde te lo pasarás de puta madre.
                        Además, de tener soporte directo con los desarrolladores principales del bot para cualquier duda o sugerencia.
                    </p>
                    <div className="flex justify-center">
                        <LinkButton buttonText={"Unirse"} link={"https://discord.gg/4cC2zBVA8e"} />
                    </div>
                </section>
            </main>
        </div>
    )
}