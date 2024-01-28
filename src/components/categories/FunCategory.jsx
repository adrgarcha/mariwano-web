import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import DiscordMessage from "../DiscordMessage";
import DiscordSection from "../DiscordSection";
export default function FunCategory() {
  return (
    <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
      <CategoryTitle title={"Diversión"}>
        Categoría de los comandos buenos
      </CategoryTitle>

      <CategorySection command={"arabfunny"} params={"لا أحد"}>
        هذا الأمر يتضمن اقتراح إرسال رسائل باللغة العربية. يمكن تغيير نصوص
        الأوامر حسب الرغبة دون أن تتجاوز مليوني حر
      </CategorySection>
      <DiscordSection>
        <DiscordMessage
          msg={
            "الافتتاحية (الفاتحة) 1. بسم الله الرحمن الرحيم. 2. الحمد لله رب العالمين. 3. الرحمن الرحيم. 4. سيد يوم الدين. 5. إياك نعبد وإياك نستعين. 6. اهدنا إلى الصراط المستقيم. 7. صراط الذين أنعمت عليهم غير المغضوب عليهم ولا الضالين. 2. البقرة (البقرة) بسم الله الرحمن الرحيم 1. ألف، لام، ميم. 2. ذلك الكتاب لا ريب فيه هدى للمتقين. 3. الذين يؤمنون بالغيب ويقيمون الصلاة ومما رزقناهم ينفقون. 4. والذين يؤمنون بما أنزل إليك وما أنزل من قبلك وبالآخرة هم يوقنون. 5. أولئك على هدى من ربهم. هؤلاء هم الناجحون. 6. أما الذين كفروا سواء عليهم أأنذرتهم أم لم تنذرهم لا يؤمنون. 7. ختم الله على قلوبهم وعلى سمعهم وعلى أبصارهم غشاوة. ولهم عذاب شديد . 8. ومن الناس من يقول آمنا بالله واليوم الآخر وما هم بمؤمنين. 9. يخادعون الله والذين آمنوا وما يخدعون إلا أنفسهم وما يشعرون. 10. في قلوبهم مرض فزادهم الله مرضا. ولهم عذاب أليم بما كذبوا. 11. وإذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحون. 12. بل هم المفسدون ولكن لا يشعرون. 13. وإذا قيل لهم آمنوا كما آمن الناس قالوا أنؤمن كما آمن السفهاء؟ في"
          }
          isBot={true}
        />
        <DiscordMessage
          msg={
            "😂مرحبًا، مساء الخير أيه😋ا الأوغاد، أناKERNEL😂 أدخن ذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل ل😂هم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا 🥵إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن م🥵صلحذا قيل لهم لا تفسدوا في الأرض قالوا إنما نحن مصلحسيجارة بيتونسيو ها🥵ئلة في الساعة 420 🤯بعد الظهر"
          }
          isBot={true}
        />
      </DiscordSection>

      <CategorySection command={"crearmeme"} params={"url, textoArriba, textoAbajo, efectos"}>
        A partir de la url de una imagen (una que acabe en .jpg o .png o .gif)
        añade un texto inferior y uno superior. Existe la opción de añadir un
        efecto (esferizar, desenfocar, etc.). Envía el resultado de la imagen
        (por ahora no puede enviar gifs).
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/crearmeme2.png"} imagenHeight={60} imagenWidth={300} />
      </DiscordSection>

      <CategorySection command={"fakeyou"} params={"voz, texto"}>
        Envía un audio con la voz hecha con la plataforma de IA FakeYou de tu
        ídolo/youtuber/streamer favorito. Introduce a la persona que quieres que
        recite el texto en el parametro <i>voz</i> (el código coge el primero
        que encuentre) y el texto en el otro parámetro.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={"Cargando audio..."} isBot={true} />
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/tts_audio.png"} imagenHeight={130} imagenWidth={300} />
      </DiscordSection>

      <CategorySection command={"frasejoker"} params={"add, all"}>
        Envía una frase aleatoria digna de cita del Joker.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={"el que madruga se encuentra con todo cerrado😔🤙"} isBot={true} />
        <DiscordMessage msg={"para mi el locomotor es sólo motor🥵"} isBot={true} />
      </DiscordSection>

      <CategorySection command={"kahoot"} params={"hardcore"}>
        Un trivia de cultura general, si respondes en 15 segundos con la
        respuesta correcta, te corresponde una recompensa en relación a la
        dificultad de la pregunta. En el modo <i>hardcore</i> sólo aparecen
        preguntas difíciles. Hay un límite de 5 preguntas diarias.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/kahoot.png"} size={500} imagenHeight={210} imagenWidth={370} />
      </DiscordSection>

      <CategorySection command={"padalustro"} params={"Ninguno"} />
      <DiscordSection>
        <DiscordMessage
        msg={
          "Tenga cuidado con el consumo de cannabis, un sólo porro contiene:\nCrotolamo\n· Aboreo\n· Acudo\n· Nifo\n· Uxiono\n· Trujo\n· Permatrago\n· Padalustro\n· Orbo\n· Tiro\n· Primo\n· Obo\n· Oplo\n· Crotofroto\n· Tampo\n· Timulo\n· Cupo\n· Combro"
          }
          isBot={true} 
        />
      </DiscordSection>

      <CategorySection command={"ryangosling"} params={"Ninguno"}>
        Envía una foto aleatoria de Ryan Gosling.
      </CategorySection>
      <DiscordSection>
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/ryangosling.png"} imagenHeight={235} imagenWidth={300} />
        <DiscordMessage msg={""} isBot={true} imagen={"/src/assets/commands/ryangosling-2.jpg"} size={400} imagenHeight={590} imagenWidth={380} />
      </DiscordSection>
    </article>
  );
}
