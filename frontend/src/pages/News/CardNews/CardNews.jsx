import "./CardNews.css";

import silla from "../../../assets/img/silla.webp";

export const CardNews = ({ url, name, titulo }) => {
  return (
    <a className="card-new" href="#">
      <div className="card-img">
        <img src={silla} alt="" />
      </div>
      <div className="card-info-new">
        <span>{titulo}</span>
        <p>Hecho por: {name}</p>
      </div>
    </a>
  );
};
