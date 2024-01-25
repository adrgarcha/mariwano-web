import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordMessage from "../DiscordMessage";
export default function ModerationCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"Moderación"}>
                Categoría de comandos que sólo pueden ser usados por moderadores del servidor.
            </CategoryTitle>
            
            <CategorySection command={"ban"} params={"target-user, reason"} >
                Banea a el usuario introducido en <i>target-user</i> con la opción de dar una razón en la casilla de <i>reason</i>. El usuario no podrá volver a entrar hasta que un administrador le desbanee.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <DiscordMessage msg={"El usuario @Usuario ha sido baneado del servidor. Razón: No se proporcionó ninguna razón."} isBot={true}/>
        
      </div>
            <CategorySection command={"kick"} params={"target-user, reason"} >
                Echa del servidor al usuario introducido en <i>target-user</i> con la opción de dar una razón en la casilla de <i>reason</i>. El usuario podrá ser invitado de vuelta al servidor.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <DiscordMessage msg={"El usuario @Usuario ha sido kickeado del servidor. Razón: No se proporcionó ninguna razón."} isBot={true}/>
        
      </div>
            <CategorySection command={"timeout"} params={"target-user, duration, reason"} >
                Banea a un usuario por un determinado tiempo puesto en <i>duration</i>. En dicho parámetro se debe introducir la cantidad de tiempo junto la primera letra de la unidad de tiempo, por ejemplo <i>15m</i> resultaría en un baneo de 15 minutos.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "15vh",
        }}
      >
        <DiscordMessage msg={"El usuario @Usuario le han realizado un pedazo de timeout de 5 seconds."} isBot={true}/>
        <DiscordMessage msg={"La duracion del timeout no puede ser menor a 5 segundos o mayor a 28 dias."} isBot={true}/>
      </div>
        </article>
    )
}