
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
  
  export default function DiscordMessage ({ msg, isBot, size, imagen, imagenHeight, imagenWidth }) {
    return (
      // especificos: color background, tipo de letra y maxWidth (es variable)
      <div style={{maxWidth: `${size==null?400:size}px`, background: "#36393f", fontFamily: "gg sans Medium, sans-serif"}} className="flex flex-row max-w-fit p-2.5 rounded-lg m-2.5">
        <div style={{borderRadius: "50%"}} className="w-10 h-10 mr-2.5 overflow-hidden shrink-0">
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
          <div className="flex items-center">
            <div style={{color: "#7289da", marginBottom: "-2px"}}>Mariwano</div>
            {isBot && <div style={{background: "#7389da", padding: "0px 5px", fontSize: "12px"}} className="white rounded ml-1">BOT</div>}
          </div>
          <div className="white">{msg}
          {imagen && <Componente element={imagen} height={imagenHeight} width={imagenWidth}/>}
          </div>
        </div>
      </div>
    );
  }
  