import { CardUserOnline } from "./CardUserOnline";
import "./ListOnline.css";

export const ListOnline = () => {
  return (
    <div className="card-top">
      <div className="card-top-title">
        <h6>USUARIOS DESTACADOS</h6>
      </div>
      <div>
        <CardUserOnline url={"https://unavatar.io/midudev"} user={"midudev"} />
        <CardUserOnline url={"https://unavatar.io/midudev"} user={"midudev"} />
        <CardUserOnline
          url={"https://unavatar.io/midudev"}
          user={"araujooosss"}
        />
      </div>
    </div>
  );
};
