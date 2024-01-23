import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import helpExample1 from "../../assets/commands/help-command-example-1.png";
import helpExample2 from "../../assets/commands/help-command-example-2.png";
import serverInfoExample from "../../assets/commands/server-info-example.png";
import suggestExample1 from "../../assets/commands/suggest-example-1.png";
import suggestExample2 from "../../assets/commands/suggest-example-2.png";
import reportExample1 from "../../assets/commands/report-example-1.png";
import reportExample2 from "../../assets/commands/report-example-2.png";
import DiscordMessage from "../DiscordMessage";
export default function GeneralCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"General"}>
                Categoría dedicada a aquellos comandos que tengan un propósito general dentro de un servidor de Discord.
            </CategoryTitle>
            
            <CategorySection command={"help"} params={"Ninguno"} firstImageUrl={helpExample1} secondImageUrl={helpExample2}>
                Muestra una lista con todos los comandos del bot.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "40vh",
        }}
      >
        <DiscordMessage msg={""} isBot={true} size={500} imagen={"/src/assets/commands/help-command-example-1.png"} imagenHeight={290} imagenWidth={350}></DiscordMessage>
        <DiscordMessage msg={""} isBot={true} size={500} imagen={"/src/assets/commands/help-command-example-2.png"} imagenHeight={295} imagenWidth={390}></DiscordMessage>
      </div>
            <CategorySection command={"server-info"} params={"Ninguno"} firstImageUrl={serverInfoExample}>
                Muestra información relevante acerca del servidor de Discord en el que te encuentres.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "35vh",
        }}
      >
        <DiscordMessage msg={""} isBot={true} size={800} imagen={"/src/assets/commands/server-info-example.png"} imagenHeight={310} imagenWidth={435}></DiscordMessage>
      </div>
            <CategorySection command={"suggest"} params={"Ninguno"} firstImageUrl={suggestExample1} secondImageUrl={suggestExample2}>
                Envia una sugerencia en el canal de sugerencias que se haya configurado previamente en el servidor, si no existe un canal de sugerencias
                el bot enviara un mensaje indicando el comando a usar para configurarlo. Una vez creada la sugerencia, apareceran dos botones con los
                cuales podras votar a favor o en contra de la sugerencia. Y un administrador del servidor podra aprobar o rechazar dicha sugerencia.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "32vh",
        }}
      >
        <DiscordMessage msg={"Sugerencia creada."} size={800} isBot={true} imagen={"/src/assets/commands/suggest-example-1.png"} imagenHeight={255} imagenWidth={540}></DiscordMessage>
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/suggest-example-2.png"} imagenHeight={85} imagenWidth={250}></DiscordMessage>
      </div>
            <CategorySection command={"report"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Su funcionamiento es similar al comando anterior. Envia un informe en el canal de informes que se haya configurado previamente en el servidor,
                si no existe un canal de informes el bot enviara un mensaje indicando el comando a usar para configurarlo. Una vez creado el informe,
                el administrador podra marcarlo como solucionado o como falso si no se trataba de un informe válido.
            </CategorySection>
        </article>
    )
}