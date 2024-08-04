import "./CardErrorLogin.css";
export const CardErrorLogin = ({ text }) => {
  return (
    <div className="card-error-login">
      <i className="fa-solid fa-circle-exclamation"></i>
      <span>{text}</span>
    </div>
  );
};
