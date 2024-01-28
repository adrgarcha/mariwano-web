
export const ImageSection = ({ element, height, width }) => {
  return (
    <section className={`w-[${width}px] h-[${height}px] mr-[10px] overflow-hidden flex-shrink-0`}>
      <img src={element} alt="Imagen de un mensaje de Discord" />
    </section>
  );
}

export default function DiscordMessage({ msg, isBot, size, imagen, imagenHeight, imagenWidth }) {
  return (
    <div style={{ maxWidth: `${size == null ? 400 : size}px` }} className="flex bg-[#36393f] font-['gg_sans_Medium'] max-w-fit p-2.5 rounded-lg m-2.5">
      <section className="w-10 h-10 mr-2.5 overflow-hidden shrink-0 rounded-full">
        <img src="/src/assets/mariwano-icon.png" alt="Avatar" className="w-full h-full object-cover" />
      </section>
      <article>
        <section className="flex items-center">
          <h4 className="text-[#7289da] mb-[-2px]">Mariwano</h4>
          {isBot && <div className="bg-[#7389da] px-[5px] py-0 text-[12px] rounded ml-1">BOT</div>}
        </section>
        <section>
          <p>{msg}</p>
          {imagen && <ImageSection element={imagen} height={imagenHeight} width={imagenWidth} />}
        </section>
      </article>
    </div>
  );
}
