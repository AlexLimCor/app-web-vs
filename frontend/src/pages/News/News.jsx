import { CardNews } from "./CardNews/CardNews";
import "./News.css";
export const News = () => {
  return (
    <>
      <div className="container-news">
        <h4>NOVEDADES</h4>
      </div>
      <div className="container-card">
        <CardNews name={"alex"} titulo={"Sorteo para la comunidad"} />
        <CardNews name={"alex"} titulo={"Sorteo para la comunidad"} />
        <CardNews name={"alex"} titulo={"Sorteo para la comunidad"} />
        <CardNews name={"alex"} titulo={"Sorteo para la comunidad"} />
      </div>
    </>
  );
};
