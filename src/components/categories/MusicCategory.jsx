import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordMessage from "../DiscordMessage";
import DiscordSection from "../DiscordSection";
export default function MusicCategory() {
  return (
    <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
      <CategoryTitle title={"Música"}>
        Categoría dedicada a los comandos relacionados con la retransmisión de sonidos (ya sean de YouTube o Spotify) en un canal de voz.
      </CategoryTitle>

      <CategorySection command={"clear"} params={"Ninguno"}>
        Elimina de la cola todas las canciones presentes en ella.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={500} isBot={true} imagen={"/src/assets/commands/clear.png"} imagenHeight={145} imagenWidth={385}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"loop"} params={"mode"} >
        Pone la canción/sonido/vídeo actualmente retransmitiéndose o toda la cola en bucle:<nav />
        <nav />
        · Modo <i>Off</i>: desactiva el bucle de la cola o el track actual.<nav />
        · Modo <i>Track</i>: pone el track (la canción/vídeo/sonido actual) en bucle.<nav />
        · Modo <i>Queue</i>: cuando termine la última canción de la cola, volverá a repetirse la cola hasta que se desactive el modo.<nav />
        · Modo <i>Autoplay</i>: cuando termine el último track de la cola, automáticamente se añadirá una nueva canción parecida (con el mismo query) al último track.<nav />
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/loop1.png"} imagenHeight={150} imagenWidth={435}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"now-playing"} params={"Ninguno"} >
        Muestra el track que se está retransmitiendo.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/now-playing.png"} imagenHeight={162} imagenWidth={540}></DiscordMessage>
      </DiscordSection>

      <CategorySection command={"pause"} params={"Ninguno"} >
        Pausa el track si se está reproduciendo. Si ya está en pausa, lo renauda.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={550} isBot={true} imagen={"/src/assets/commands/pause1.png"} imagenHeight={160} imagenWidth={445}></DiscordMessage>
        <DiscordMessage msg={""} size={550} isBot={true} imagen={"/src/assets/commands/pause2.png"} imagenHeight={160} imagenWidth={445}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"play"} params={"query"}>
        Añade a la cola una canción de YouTube o Spotify, también se puede añadir todas las canciones de una playlist a la cola poniendo el enlace de la playlist (ya sea de Spotify o YouTube). También se admiten de YouTube a parte de canciones poner el audio de cualquier vídeo.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={"Se puso en cola: RingsOfGeonosis - Nintendo Wii - Shop Channel Music (Extended) HQ"} size={520} isBot={true}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"previous"} params={"Ninguno"}>
        Reproduce la canción anterior.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={540} isBot={true} imagen={"/src/assets/commands/previous.png"} imagenHeight={145} imagenWidth={485}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"queue"} params={"Ninguno"}>
        Muestra los 10 primeros tracks de la cola con paginación.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={500} isBot={true} imagen={"/src/assets/commands/queue.png"} imagenHeight={250} imagenWidth={350}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"shuffle"} params={"Ninguno"} >
        Mezcla aleatoriamente el orden de las canciones de la cola.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/shuffle.png"} imagenHeight={155} imagenWidth={400}></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"skip"} params={"Ninguno"} >
        Salta al siguiente track de la cola.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/skip1.png"} imagenHeight={140} imagenWidth={450}></DiscordMessage>
        <DiscordMessage msg={""} size={520} isBot={true} imagen={"/src/assets/commands/skip2.png"} imagenHeight={140} imagenWidth={450}></DiscordMessage>
      </DiscordSection>

      <CategorySection command={"stop"} params={"Ninguno"} >
        Comando que hace irse al bot del canal.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} size={500} isBot={true} imagen={"/src/assets/commands/stop1.png"} imagenHeight={170} imagenWidth={350}></DiscordMessage>
      </DiscordSection>
    </article>
  )
}