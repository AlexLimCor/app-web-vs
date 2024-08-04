import { Link, NavLink } from "react-router-dom";
import prueba from "../../../assets/img/prueba.jpeg";
// import perfil from "../assets/img/perfil.png";
import "./Header.css";

export const Header = () => {
  return (
    <header className="container-header">
      <NavLink className="container-logo" to="/">
        <img src={prueba} alt="" />
        <h2 className="anton-regular">
          <span>VIEJA SCHOOL</span>
        </h2>
      </NavLink>
      <nav className="container-nav">
        <Link to={"/server"}>SERVIDORES</Link>
        <Link to={"/foro"}>FORO</Link>
        <Link to={"/ventas"}>VENTAS</Link>
        <Link to={"/novedades"}>NOVEDADES</Link>
      </nav>
      <div className="container-account">
        <Link className="btn btn-outline-danger" to="/signin">
          Iniciar Sesion
        </Link>
        <Link className="btn btn-danger" to="/register">
          Crear Cuenta
        </Link>
      </div>
    </header>
  );
};
