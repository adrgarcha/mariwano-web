import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import serverInfoExample from "../../assets/commands/server-info-example.png";
import suggestExample1 from "../../assets/commands/suggest-example-1.png";
import suggestExample2 from "../../assets/commands/suggest-example-2.png";
import reportExample1 from "../../assets/commands/report-example-1.png";
import reportExample2 from "../../assets/commands/report-example-2.png";
import DiscordMessage from "../DiscordMessage";
export default function MusicCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"Música"}>
                Categoría dedicada a los comandos relacionados con la retransmisión de sonidos (ya sean de YouTube o Spotify) en un canal de voz.
            </CategoryTitle>
            
            <CategorySection command={"clear"} params={"Ninguno"}>
                Elimina de la cola todas las canciones presentes en ella.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <DiscordMessage msg={""} size={500} isBot={true} imagen={"/src/assets/commands/clear.png"} imagenHeight={145} imagenWidth={385}></DiscordMessage>
      </div> 
            <CategorySection command={"loop"} params={"mode"} firstImageUrl={serverInfoExample}>
                Pone la canción/sonido/vídeo actualmente retransmitiéndose o toda la cola en bucle:<nav/>
                <nav/>
                · Modo <i>Off</i>: desactiva el bucle de la cola o el track actual.<nav/>
                · Modo <i>Track</i>: pone el track (la canción/vídeo/sonido actual) en bucle.<nav/>
                · Modo <i>Queue</i>: cuando termine la última canción de la cola, volverá a repetirse la cola hasta que se desactive el modo.<nav/>
                · Modo <i>Autoplay</i>: cuando termine el último track de la cola, automáticamente se añadirá una nueva canción parecida (con el mismo query) al último track.<nav/>
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "25vh",
        }}
      >
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/loop1.png"} imagenHeight={150} imagenWidth={435}></DiscordMessage>
      </div>
            <CategorySection command={"now-playing"} params={"Ninguno"} firstImageUrl={suggestExample1} secondImageUrl={suggestExample2}>
                Muestra el track que se está retransmitiendo.
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
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/now-playing.png"} imagenHeight={162} imagenWidth={540}></DiscordMessage>
        
      </div>
            <CategorySection command={"pause"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Pausa el track si se está reproduciendo. Si ya está en pausa, lo renauda.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <DiscordMessage msg={""} size={550} isBot={true} imagen={"/src/assets/commands/pause1.png"} imagenHeight={160} imagenWidth={445}></DiscordMessage>
        <DiscordMessage msg={""} size={550} isBot={true} imagen={"/src/assets/commands/pause2.png"} imagenHeight={160} imagenWidth={445}></DiscordMessage>
      </div> 
            <CategorySection command={"play"} params={"query"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Añade a la cola una canción de YouTube o Spotify, también se puede añadir todas las canciones de una playlist a la cola poniendo el enlace de la playlist (ya sea de Spotify o YouTube). También se admiten de YouTube a parte de canciones poner el audio de cualquier vídeo.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "12vh",
        }}
      >
        <DiscordMessage msg={"Se puso en cola: RingsOfGeonosis - Nintendo Wii - Shop Channel Music (Extended) HQ"} size={520} isBot={true}></DiscordMessage>
      </div>
      <CategorySection command={"previous"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Reproduce la canción anterior.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <DiscordMessage msg={""} size={540} isBot={true} imagen={"/src/assets/commands/previous.png"} imagenHeight={145} imagenWidth={485}></DiscordMessage>
      </div> 
            <CategorySection command={"queue"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Muestra los 10 primeros tracks de la cola con paginación.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30vh",
        }}
      >
        <DiscordMessage msg={""} size={500} isBot={true} imagen={"/src/assets/commands/queue.png"} imagenHeight={250} imagenWidth={350}></DiscordMessage>
      </div> 
            <CategorySection command={"shuffle"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Mezcla aleatoriamente el orden de las canciones de la cola.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/shuffle.png"} imagenHeight={155} imagenWidth={400}></DiscordMessage>
      </div>
      <CategorySection command={"skip"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Mezcla aleatoriamente el orden de las canciones de la cola.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/skip1.png"} imagenHeight={140} imagenWidth={450}></DiscordMessage>
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/skip2.png"} imagenHeight={140} imagenWidth={450}></DiscordMessage>
      </div> 

            <CategorySection command={"stop"} params={"Ninguno"} firstImageUrl={reportExample1} secondImageUrl={reportExample2}>
                Comando que hace irse al bot del canal.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "20vh",
        }}
      >
        <DiscordMessage msg={""} size={500} isBot={true} imagen={"/src/assets/commands/stop1.png"} imagenHeight={170} imagenWidth={350}></DiscordMessage>
      </div> 
        </article>
    )
}