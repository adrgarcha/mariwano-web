export default function CategorySection({ command, params, firstImageUrl, secondImageUrl, children }) {
    return (
        <section className="flex flex-col gap-y-3">
            <h2 className="text-4xl font-bold">/{command}</h2>
            <h3 className="text-xl font-bold">Parámetros: {params}</h3>
            <p className="text-xl">{children}</p>
            <section className="flex justify-center gap-x-6">
                <img src={firstImageUrl} alt={`Ejemplo del comando /${command}`} className="w-full max-w-md" />
                {secondImageUrl && <img src={secondImageUrl} alt={`Ejemplo del comando /${command}`} className="w-full max-w-md" />}
            </section>
        </section>
    )
}