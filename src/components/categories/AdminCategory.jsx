import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordMessage from "../DiscordMessage";
export default function AdminCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"Administración"}>
                Categoría de comandos que sólo pueden ser usados por los administradores (el dueño del servidor por defecto).
            </CategoryTitle>
            <div
            className="flex container"
            style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "10vh",
            }}
            >     
        <DiscordMessage msg={"Solo los administradores pueden ejecutar este comando."} isBot={true} />
      </div>
            <CategorySection command={"config-suggestions"} params={"add | remove, channel"} >
                Añade o elimina respectivamente la habilidad de los usuarios de poder usar el comando <i>/suggest</i> en el canal determinado en el parámetro <i>channel</i>.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <DiscordMessage msg={"Este servidor todavia no ha sido configurado con un canal de sugerencias."} isBot={true}/>
      </div>
            <CategorySection command={"config-reports"} params={"add | remove, channel"} >
            Añade o elimina respectivamente la habilidad de los usuarios de poder usar el comando <i>/report</i> en el canal determinado en el parámetro <i>channel</i>.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <DiscordMessage msg={"Este servidor todavia no ha sido configurado con un canal de reportes."} isBot={true}/>
      </div>
            <CategorySection command={"config-welcome"} params={"add | remove, channel"} >
                Activa o desactiva respectivamente el mensaje de bienvenida en el canal determinado en <i>channel</i>.
            </CategorySection>
            <div
        className="flex container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "10vh",
        }}
      >
        <DiscordMessage msg={"Este servidor todavia no ha sido configurado con un canal de bienvenida."} isBot={true}/>
      </div>
            <CategorySection command={"autorole-configure"} params={"role"} >
                Determina el auto-rol del servidor, el rol que se asignará automáticamente por el bot a todos los usuarios nuevos del servidor.

            </CategorySection>
            <CategorySection command={"autorole-disable"} params={"Ninguno"} >
                Desactiva la aplicación del auto-rol hacia los usuarios para todo el servidor.
            </CategorySection>
        </article>
    )
}