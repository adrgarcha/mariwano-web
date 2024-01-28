import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordSection from "../DiscordSection";
import DiscordMessage from "../DiscordMessage";
export default function GeneralCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"General"}>
                Categoría dedicada a aquellos comandos que tengan un propósito general dentro de un servidor de Discord.
            </CategoryTitle>

            <CategorySection command={"help"} params={"Ninguno"} >
                Muestra una lista con todos los comandos del bot.
            </CategorySection>
            <DiscordSection>
                <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/help-command-example-1.png"} size={500} imagenHeight={290} imagenWidth={350} />
                <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/help-command-example-2.png"} size={500} imagenHeight={295} imagenWidth={390} />
            </DiscordSection>

            <CategorySection command={"server-info"} params={"Ninguno"} >
                Muestra información relevante acerca del servidor de Discord en el que te encuentres.
            </CategorySection>
            <DiscordSection>
                <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/server-info-example.png"} size={800} imagenHeight={310} imagenWidth={435} />
            </DiscordSection>

            <CategorySection command={"suggest"} params={"Ninguno"} >
                Envia una sugerencia en el canal de sugerencias que se haya configurado previamente en el servidor, si no existe un canal de sugerencias
                el bot enviara un mensaje indicando el comando a usar para configurarlo. Una vez creada la sugerencia, apareceran dos botones con los
                cuales podras votar a favor o en contra de la sugerencia. Y un administrador del servidor podra aprobar o rechazar dicha sugerencia.
            </CategorySection>
            <DiscordSection>
                <DiscordMessage msg={"Sugerencia creada."} isBot={true} imagen={"/src/assets/commands/suggest-example-1.png"} size={800} imagenHeight={255} imagenWidth={540} />
                <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/suggest-example-2.png"} imagenHeight={85} imagenWidth={250} />
            </DiscordSection>
            
            <CategorySection command={"report"} params={"Ninguno"} >
                Su funcionamiento es similar al comando anterior. Envia un informe en el canal de informes que se haya configurado previamente en el servidor,
                si no existe un canal de informes el bot enviara un mensaje indicando el comando a usar para configurarlo. Una vez creado el informe,
                el administrador podra marcarlo como solucionado o como falso si no se trataba de un informe válido.
            </CategorySection>
            <DiscordSection>
                <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/report-example-1.png"} size={700} imagenHeight={265} imagenWidth={540} />
                <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/report-example-2.png"} size={700} imagenHeight={285} imagenWidth={550} />
            </DiscordSection>
        </article>
    )
}