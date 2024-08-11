import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="cont-footer">
      <div className="info-foot">
        <div className="footer-card">
          <div className="title-footer">
            <h4 className="anton-regular">
              COMUNDIDAD <span>VIEJA SCHOOL</span>
            </h4>
          </div>
          <a href="#">Contacto</a>
          <a href="#">Terminos y Condiciones</a>
          <a href="#">Sobre nosotros</a>
          <a href="#">Politica de Privacidad</a>
        </div>
        <div className="card-redes">
          <a href="#">
            <i className="fa-brands fa-twitch"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-discord"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-tiktok"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>
      </div>

      <div className="derechos-cop">
        <span>Vieja School &copy; Todos los derechos reservados</span>
        <span>Powered by AlexLC</span>
      </div>
    </footer>
  );
};
