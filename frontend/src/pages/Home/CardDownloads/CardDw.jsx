export const CardDw = ({ logo, title, link }) => {
  return (
    <div className="card-dw">
      <img src={logo} alt="logo" />
      <div className="card-dw-info">
        <p>{title}</p>
        <a className="btn btn-danger" href={link}>
          DESCARGAR
        </a>
      </div>
    </div>
  );
};
