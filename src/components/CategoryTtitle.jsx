export default function CategoryTitle({ title, children }) {
    return (
        <header className="flex flex-col gap-y-4">
            <h1 className="text-6xl font-bold">{title}</h1>
            <p className="text-xl">{children}</p>
        </header>
    )
}