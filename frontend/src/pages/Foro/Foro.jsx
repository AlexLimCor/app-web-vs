import { CardForo } from "./CardForo/CardForo";
import "./Foro.css";
export const Foro = () => {
  return (
    <section className="cont-foro">
      <div className="title-foro">
        <h4>FORO</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit beatae
          incidunt, eum sed atque ipsam quisquam illo exercitationem dolore
          dolorum doloremque id blanditiis similique reiciendis praesentium
          explicabo earum repudiandae laboriosam.
        </p>
      </div>
      <article className="cont-foro-tabla">
        <div className="cont-index">
          <div className="cont-index-nav">
            <a href="#">1</a>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <a href="#">5</a>
            <a href="#">SIGUIENTE</a>
          </div>
          <a href="#" className="btn btn-danger">
            INICIAR TEMA NUEVO
          </a>
        </div>
        <CardForo
          urlImg={"https://unavatar.io/midudev"}
          titulo={"MATA AL TRAIDOR #2"}
          name={"Pastor"}
          date={"18 de marzo del 2023"}
        />
        <CardForo
          urlImg={"https://unavatar.io/midudev"}
          titulo={"MATA AL TRAIDOR #2"}
          name={"Pastor"}
          date={"18 de marzo del 2023"}
        />
      </article>
    </section>
  );
};
