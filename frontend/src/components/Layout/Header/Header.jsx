import { Link, NavLink } from "react-router-dom";
import prueba from "../../../assets/img/prueba.jpeg";
// import perfil from "../assets/img/perfil.png";
import "./Header.css";
import { AuthContext } from "../../../context/AuthProvider";
import { useContext } from "react";
export const Header = () => {
  const { user, logout, loading } = useContext(AuthContext);
  return (
    <header className="container-header">
      <NavLink className="container-logo" to="/">
        <img src={prueba} alt="" />
        <h2 className="anton-regular">
          <span>VIEJA SCHOOL</span>
        </h2>
      </NavLink>
      <nav className="container-nav">
        <Link to="/server">SERVIDORES</Link>
        <Link to="/foro">FORO</Link>
        <Link to="/ventas">VENTAS</Link>
        <Link to="/novedades">NOVEDADES</Link>
      </nav>
      <div className="container-account">
        {loading ? (
          <>
            <div className="btn-group m-4">
              <button
                type="button"
                className="btn btn-danger dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.name}
              </button>
              <ul className="dropdown-menu">
                <Link className="dropdown-item" to="/profile">
                  Perfil
                </Link>

                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <button className="dropdown-item" onClick={logout}>
                    Cerrar Sesion
                  </button>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-danger" to="/signin">
              Iniciar Sesion
            </Link>
            <Link className="btn btn-danger" to="/register">
              Crear Cuenta
            </Link>
          </>
        )}
      </div>
    </header>
  );
};
