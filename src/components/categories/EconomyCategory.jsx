import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordMessage from "../DiscordMessage";
import DiscordSection from "../DiscordSection";
export default function EconomyCategory() {
  return (
    <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
      <CategoryTitle title={"Economía"}>
        Categoría de los comandos relacionados con la moneda. La moneda por
        defecto son gramos de cocaína.
      </CategoryTitle>

      <CategorySection command={"balance"} params={"usuario"}>
        Muestra tu propio balance o el de un usuario que hayas mencionado en el
        parámetro opcional.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={"Tienes 1000 gramos de cocaína."}
          isBot={true}
        ></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"daily"} params={"Ninguno"}>
        Recolectas los gramos diarios. Por defecto son 1000.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={
            "1000 gramos de cocaína fueron agregadas a tu inventario. Ahora tienes 2000"
          }
          isBot={true}
        ></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"donate"} params={"usuario, cantidad"}>
        Envía una cantidad de dinero específica al usuario que quieras. Como
        mínimo tiene que ser 1.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={"Tienes que donar como mínimo 1 gramo de cocaína. No seas rata."}
          isBot={true}
        ></DiscordMessage>
        <DiscordMessage
          msg={""}
          isBot={true}
          imagen={"/src/assets/commands/donate.png"}
          imagenHeight={48}
          imagenWidth={300}
        ></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"gamble"} params={"cantidad"}>
        Apuesta una cantidad de gramos, como mínimo 100.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={
            "No has ganado nada, pero recuerda que el 90% de la gente siempre lo deja antes de recuperarlo todo 🤑. Ahora mismo tienes 0 gramos."
          }
          isBot={true}
        ></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"leaderboard"} params={"Ninguno"}>
        Muestra el top 10 de personas más ricas del servidor.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={""}
          isBot={true}
          imagen={"/src/assets/commands/leaderboard.png"}
          imagenHeight={189}
          imagenWidth={330}
        ></DiscordMessage>
      </DiscordSection>
      <CategorySection command={"level"} params={"usuario"}>
        Muestra el nivel de experiencia de la persona mencionada si es que se ha
        mencionado, sino muestra la del propio usuario.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={""}
          isBot={true}
          imagen={"/src/assets/commands/level.png"}
          imagenHeight={100}
          imagenWidth={330}
        ></DiscordMessage>
      </DiscordSection>

      <CategorySection command={"shop"} params={"Ninguno"}>
        Compra un rango personalizado del servidor por el precio de 7000 gramos.
        Se puede elegir el color, el nombre y se puede editar el mismo por 3000
        gramos.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={
            "Se ha completado correctamente la edición del rol a El Guisador por 3000 gramos 🤑💸."
          }
          isBot={true}
        ></DiscordMessage>
      </DiscordSection>
    </article>
  );
}
