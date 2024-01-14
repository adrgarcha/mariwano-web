export default function Background() {
    return (
    <div className="relative h-full w-full bg-slate-950 overflow-hidden">
        <div className="absolute bottom-0 left-[-15%] right-0 top-[-5%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
        <div className="absolute bottom-0 right-[-15%] top-[-5%] h-[550px] w-[550px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
    </div>
    )
}