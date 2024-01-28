import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordMessage from "../DiscordMessage";
import DiscordSection from "../DiscordSection";
import clear from "/src/assets/commands/clear.png";
import loop from "/src/assets/commands/loop.png";
import nowPlaying from "/src/assets/commands/now-playing.png";
import pause1 from "/src/assets/commands/pause1.png";
import pause2 from "/src/assets/commands/pause2.png";
import previous from "/src/assets/commands/previous.png";
import queue from "/src/assets/commands/queue.png";
import shuffle from "/src/assets/commands/shuffle.png";
import skip1 from "/src/assets/commands/skip1.png";
import skip2 from "/src/assets/commands/skip2.png";
import stop1 from "/src/assets/commands/stop1.png";

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
        <DiscordMessage msg={""} isBot={true} imagen={clear} size={500} imagenHeight={145} imagenWidth={385} />
      </DiscordSection>

      <CategorySection command={"loop"} params={"mode"}>
        Pone la canción/sonido/vídeo actualmente retransmitiéndose o toda la cola en bucle:<nav />
        <nav />
        · Modo <i>Off</i>: desactiva el bucle de la cola o la canción actual.<nav />
        · Modo <i>Track</i>: pone la canción actual en bucle.<nav />
        · Modo <i>Queue</i>: cuando termine la última canción de la cola, volverá a repetirse la cola hasta que se desactive el modo.<nav />
        · Modo <i>Autoplay</i>: cuando termine la última canción de la cola, automáticamente se añadirá una nueva canción parecida (con el mismo query) al último track.<nav />
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={loop} imagenHeight={150} imagenWidth={435} />
      </DiscordSection>

      <CategorySection command={"now-playing"} params={"Ninguno"} >
        Muestra la canción que se está retransmitiendo.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={nowPlaying} size={520} imagenHeight={162} imagenWidth={540} />
      </DiscordSection>

      <CategorySection command={"pause"} params={"Ninguno"} >
        Pausa la canción si se está reproduciendo. Si ya está en pausa, la renauda.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={pause1} size={550} imagenHeight={160} imagenWidth={445} />
        <DiscordMessage msg={""} isBot={true} imagen={pause2} size={550} imagenHeight={160} imagenWidth={445} />
      </DiscordSection>

      <CategorySection command={"play"} params={"query"}>
        Añade a la cola una canción de YouTube o Spotify, también se puede añadir todas las canciones de una playlist a la cola
        poniendo el enlace de la playlist (ya sea de Spotify o YouTube).
        También se admiten de YouTube a parte de canciones poner el audio de cualquier vídeo.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={"Se puso en cola: RingsOfGeonosis - Nintendo Wii - Shop Channel Music (Extended) HQ"} isBot={true} size={520} />
      </DiscordSection>

      <CategorySection command={"previous"} params={"Ninguno"}>
        Reproduce la canción anterior.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={previous} size={540} imagenHeight={145} imagenWidth={485} />
      </DiscordSection>

      <CategorySection command={"queue"} params={"Ninguno"}>
        Muestra las 10 primeras canciones de la cola con paginación.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={queue} size={500} imagenHeight={250} imagenWidth={350} />
      </DiscordSection>

      <CategorySection command={"shuffle"} params={"Ninguno"} >
        Mezcla aleatoriamente el orden de las canciones de la cola.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={shuffle} size={520} imagenHeight={155} imagenWidth={400} />
      </DiscordSection>

      <CategorySection command={"skip"} params={"Ninguno"} >
        Salta a la siguiente canción de la cola.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={skip1} size={520} imagenHeight={140} imagenWidth={450} />
        <DiscordMessage msg={""} isBot={true} imagen={skip2} size={520} imagenHeight={140} imagenWidth={450} />
      </DiscordSection>

      <CategorySection command={"stop"} params={"Ninguno"} >
        Comando que para toda la música actual y provoca que el bot salga del canal.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={stop1} size={500} imagenHeight={170} imagenWidth={350} />
      </DiscordSection>
    </article>
  )
}