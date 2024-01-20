import Background from "../components/Background";
import LinkButton from "../components/LinkButton";
import Navbar from "../components/Navbar";
import mariwanoIcon from "../assets/mariwano-icon.png";
import IconButton from "../components/IconButton";
import GitHubIcon from "../components/icons/GitHubIcon";

export default function App() {
  return (
    <div className="relative h-screen w-full bg-slate-950 overflow-hidden font-mono font-medium text-white">
      <Navbar />
      <Background />
      <main className="flex flex-col justify-center items-center gap-y-10 h-full">
        <h1 className="text-8xl font-bold">Mariwano</h1>
        <img className="w-[256px] h-[256px] rounded-full" src={mariwanoIcon} alt="Mariwano Icon" />
        <div className="flex gap-x-2">
          <LinkButton buttonText="Invitar a Mariwano" link={"https://discord.com/api/oauth2/authorize?client_id=1159902116979146782&permissions=8&scope=bot"} />
          <IconButton icon={<GitHubIcon />} link="https://github.com/adrgarcha/mariwano-bot" />
        </div>
      </main>
    </div>
  )
}