import "./CardForo.css";
export const CardForo = ({ urlImg, titulo, name, date }) => {
  return (
    <div className="card-foro">
      <div className="cont-img-user">
        <img src={urlImg} alt="" />
      </div>
      <div className="cont-data">
        <b>{titulo}</b>
        <p>
          Por: {name}, {date}
        </p>
      </div>
    </div>
  );
};
