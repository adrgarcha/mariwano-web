import CategorySection from "../CategorySection";
import CategoryTitle from "../CategoryTtitle";
import levelExample from "../../assets/commands/level.png";
import dailyExample from "../../assets/commands/daily.png";
import gambleExample from "../../assets/commands/gamble.png";
import donateExample2 from "../../assets/commands/donate2.png";
import donateExample from "../../assets/commands/donate.png";
import balanceExample from "../../assets/commands/balance.png";
import leaderboardExample from "../../assets/commands/leaderboard.png";
import shopExample from "../../assets/commands/shop.png";

export default function EconomyCategory() {
    return (
        <article className="flex flex-col gap-y-8 px-32 pt-10 pb-32">
            <CategoryTitle title={"Economía"}>
                Categoría de los comandos relacionados con la moneda. La moneda por defecto son gramos de cocaína.
            </CategoryTitle>
            <CategorySection command={"balance"} params={"usuario"} firstImageUrl={balanceExample}>
                Muestra tu propio balance o el de un usuario que hayas mencionado en el parámetro opcional.
                </CategorySection>
            <CategorySection command={"daily"} params={"Ninguno"} firstImageUrl={dailyExample}>
                Recolectas los gramos diarios. Por defecto son 1000.
            </CategorySection>
            <CategorySection command={"donate"} params={"usuario, cantidad"} firstImageUrl={donateExample} secondImageUrl={donateExample2}>
                Envía una cantidad de dinero específica al usuario que quieras. Como mínimo tiene que ser 1.
            </CategorySection>
            
            <CategorySection command={"gamble"} params={"cantidad"} firstImageUrl={gambleExample} >
                Apuesta una cantidad de gramos, como mínimo 100.
            </CategorySection>
            
            <CategorySection command={"leaderboard"} params={"Ninguno"} firstImageUrl={leaderboardExample} >
                Muestra el top 10 de personas más ricas del servidor.
            </CategorySection>
            <CategorySection command={"level"} params={"usuario"} firstImageUrl={levelExample} >
                Muestra el nivel de experiencia de la persona mencionada si es que se ha mencionado, sino muestra la del propio usuario. 
            </CategorySection>
            <CategorySection command={"leaderboard"} params={"Ninguno"} firstImageUrl={shopExample} >
                Compra un rango personalizado del servidor por el precio de 7000 gramos. Se puede elegir el color, el nombre y se puede editar el mismo por 3000 gramos.
            </CategorySection>

            
        </article>
    )
}