import { Link } from "react-router-dom";

export const CardVentas = ({ tipo, path, urlIcono }) => {
  return (
    <div className="card-venta">
      <div className={"title-" + tipo.toLowerCase()}>
        <i className={urlIcono}></i>
        <h4>{tipo}</h4>
      </div>
      <div className="info">
        <ul>
          <b>Beneficios:</b>
          <li>Podes acumular varias armas en el inventario</li>
          <li>Naces siempre con $1600</li>
          <li>
            Naces con todas las armas que quieras (sin necesidad de comprar).
          </li>
          <li>
            Multiplicador de frags: Subis de nivel mas rapido (x2, x3, etc).
          </li>
          <li>Robo de vida al matar (2 con x2, 20 con x20).</li>
          <li>Automatica y escudo (VIP x10/x20).</li>
          <li>Balas infinitas de recarga.</li>
          <li>Congeladora y Molotov.</li>
        </ul>
        <p>Todas estas opciones se pueden configurar en el Menu de VIP.</p>
      </div>
      <div className="btn-card-sel">
        <Link
          to={path}
          className={
            tipo === "ADMIN"
              ? "btn btn-outline-info"
              : "btn btn-outline-warning"
          }
        >
          Seleccionar
        </Link>
      </div>
    </div>
  );
};
