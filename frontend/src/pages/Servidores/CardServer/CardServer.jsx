// import img from "../assets/img/cs.16.avif";
import "./CardServer.css";
export const CardServer = ({ map, ip, number, name }) => {
  return (
    <div className="container-cards">
      <div className="card-server text-light">
        <a className="card-img" href="#">
          <div className="card-title">
            <h4>
              #{number + 1 + "\n"}
              {name}
            </h4>
            <p>JUGANDO 30 DE 31 / {map}</p>
          </div>
        </a>
        <div className="card-info">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laudantium
            cum quidem voluptatibus earum, repellat dolore praesentium quia,
            fugiat commodi odio, molestias nesciunt aut perspiciatis impedit sed
            sequi dolor delectus saepe?
          </p>
        </div>
        <div className="card-ip">
          <span>IP: {ip}</span>
        </div>
        <button className="btn btn-primary p-3" type="button">
          <i className="fa-brands fa-steam"></i>
          Entrar a Jugar
        </button>
      </div>
    </div>
  );
};
