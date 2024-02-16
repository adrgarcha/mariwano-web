

const AdEtiquette = () => {
  const redirectToOtraPagina = () => {
    window.location = "https://mariwano.pages.dev/commands/music";
  };
  return (
    <div style={{border: '12px solid #FF0000'}} className="relative w-[450px] h-[130px] bg-[#fa7a83] rounded-[20px] text-center leading-[10px]">
      <div className="absolute top-[10px] left-[-20px] bg-[#FF0000] text-white py-1 px-2 rounded-tl-3xl rounded-tr-3xl rotate-[-45deg]">
        NOVEDAD
      </div>
      <div style={{ padding: '10px', textShadow: '1px 1px 2px black' }}>
        {/* Detalles adicionales, decoraciones o iconos */}
        <p style={{padding: '20px', fontSize: '20px', fontWeight: 'bold' }}>¡Retransmite música de YouTube!
        <img className="absolute left-[140px] top-[50%] translate-y-[2px] w-10 h-10" src="https://cdn-icons-png.flaticon.com/128/3670/3670209.png" alt="Icono de botón" style={{ marginRight: '10px' }} />
        </p>
        
        <button className="bg-[#FF0000] text-white p-[10px 20px] rounded-md cursor-pointer text-xl border-none w-auto" style={{boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)'}}
          onClick={redirectToOtraPagina}
          
        >-- Ver más.</button>
      </div>
    </div>
  );
};

export default AdEtiquette;