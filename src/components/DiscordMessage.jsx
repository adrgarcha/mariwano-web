
export const Componente = ({element, height, width}) =>{
    return(<div
      style={{
        width: `${width}px`,
        height: `${height}px`,
        
        marginRight: "10px", // Espacio entre la imagen y el contenido
        overflow: "hidden", 
        flexShrink: 0,
      }}
    >
      <img
        src={element} 
        alt=""
       
      />
    </div>);
  }
  
  export default function DiscordMessage ({ msg, isBot, imagen, imagenHeight, imagenWidth }) {
    const messageStyle = {
      display: "flex",
      flexDirection: "row", // Cambiado a fila para alinear la foto y el contenido
      maxWidth: `400px`, // ajusta según tus necesidades
      background: "#36393f", // color de fondo de Discord
      padding: "10px",
      borderRadius: "8px",
      margin: "10px",
      fontFamily: "gg sans Medium, sans-serif", // fuente utilizada por Discord
    };
  
    const avatarStyle = {
      width: "40px",
      height: "40px",
      borderRadius: "50%", // Hace que la imagen sea circular
      marginRight: "10px", // Espacio entre la imagen y el contenido
      overflow: "hidden", // Asegura que la imagen no sobresalga del círculo
      flexShrink: 0,
    };
  
    const authorContainerStyle = {
      display: "flex",
      alignItems: "center", // Alinea la etiqueta y el nombre verticalmente
    };
  
    const authorStyle = {
      color: "#7289da", // color del nombre de usuario en Discord
      marginBottom: "-2px",
    };
  
    const botTagStyle = {
      background: "#7389da", // color morado de la etiqueta "BOT" en Discord
      color: "#ffffff", // color del texto de la etiqueta
      padding: "0px 5px",
      borderRadius: "4px",
      marginLeft: "5px", // Espacio entre la etiqueta y el nombre
      fontSize: "12px",
    };
  
    const contentStyle = {
      color: "#ffffff", // color del texto en Discord
    };
  
    return (
      <div style={messageStyle}>
        <div style={avatarStyle}>
          <link
            href="https://fonts.cdnfonts.com/css/gg-sans-2"
            rel="stylesheet"
          />
          <img
            src="/src/assets/mariwano-icon.png" // Reemplaza con la URL de la foto de perfil
            alt="Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>
        <div>
          <div style={authorContainerStyle}>
            <div style={authorStyle}>Mariwano</div>
            {isBot && <div style={botTagStyle}>BOT</div>}
          </div>
          <div style={contentStyle}>{msg}
          {imagen && <Componente element={imagen} height={imagenHeight} width={imagenWidth}/>}
          </div>
        </div>
      </div>
    );
  }
  