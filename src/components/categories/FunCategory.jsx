import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import ryangoslingExample from "../../assets/commands/ryangosling.png";
import padalustroExample from "../../assets/commands/padalustro.png";
import fakeyouExample from "../../assets/commands/fakeyou.png";
import kahootExample from "../../assets/commands/kahoot.png";
import frasejokerExample from "../../assets/commands/frasejoker.png";
import arabfunnyExample from "../../assets/commands/arabfunny.png";
import arabfunnyExample2 from "../../assets/commands/arabfunny2.png";
import crearmemeExample from "../../assets/commands/crearmeme.png";

export default function FunCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"Diversión"}>
                Categoría de los comandos buenos
            </CategoryTitle>
            <CategorySection command={"arabfunny"} params={"لا أحد"} firstImageUrl={arabfunnyExample} secondImageUrl={arabfunnyExample2}>
                هذا الأمر يتضمن اقتراح إرسال رسائل باللغة العربية. يمكن تغيير نصوص الأوامر حسب الرغبة دون أن تتجاوز مليوني حر            </CategorySection>
            <CategorySection command={"crearmeme"} params={"url, textoArriba, textoAbajo, efectos"} firstImageUrl={crearmemeExample}>
                A partir de la url de una imagen (una que acabe en .jpg o .png o .gif) añade un texto inferior y uno superior. 
                Existe la opción de añadir un efecto (esferizar, desenfocar, etc.). Envía el resultado de la imagen (por ahora no puede enviar gifs).
            </CategorySection>
            <CategorySection command={"fakeyou"} params={"voz, texto"} firstImageUrl={fakeyouExample}>
                Envía un audio con la voz hecha con la plataforma de IA FakeYou de tu ídolo/youtuber/streamer favorito. 
                Introduce a la persona que quieres que recite el texto en el parametro <i>voz</i> (el código coge el primero que encuentre) y el texto en el otro parámetro.
            </CategorySection>
            <CategorySection command={"frasejoker"} params={"add, all"} firstImageUrl={frasejokerExample} >
                Envía una frase aleatoria digna de cita del Joker.
            </CategorySection>
            <CategorySection command={"kahoot"} params={"hardcore"} firstImageUrl={kahootExample} >
                Un trivia de cultura general, si respondes en 15 segundos con la respuesta correcta, te corresponde
                una recompensa en relación a la dificultad de la pregunta. En el modo <i>hardcore</i> sólo aparecen preguntas difíciles. Hay un límite de 5 preguntas diarias.
            </CategorySection>
            <CategorySection command={"padalustro"} params={"Ninguno"} firstImageUrl={padalustroExample} >
                
            </CategorySection>
            <CategorySection command={"ryangosling"} params={"Ninguno"} firstImageUrl={ryangoslingExample} >
                Envía una foto aleatoria de Ryan Gosling.
            </CategorySection>
            
        </article>
    )
}