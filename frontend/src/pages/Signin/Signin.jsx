import { useContext, useEffect, useState } from "react";
import "./Signin.css";
import { CardErrorLogin } from "./CardErrorLogin/CardErrorLogin";
// import { GoogleLogin } from "@react-oauth/google";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { validationForm } from "../../../middleware/validationForm";
import { AuthContext } from "../../context/AuthProvider";

// const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
export const Signin = () => {
  const { login } = useContext(AuthContext);
  const [error, setError] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleChangeForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const onSubmitFormSignin = async (event) => {
    event.preventDefault();
    const state = validationForm(formData);

    if (state) {
      login(formData);
    } else {
      setError(true);
    }
  };

  return (
    <div className="container-form">
      {error === true ? (
        <CardErrorLogin
          text={
            "El Email o Clave es incorrecto. Por favor vuelva a escribirlo."
          }
        />
      ) : (
        ""
      )}
      <div className="card-form">
        <div className="container-info">
          <h4>INICIAR SESION</h4>
        </div>
        {/* <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider> */}

        <form className="form-signin" onSubmit={onSubmitFormSignin}>
          <label htmlFor="name">Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChangeForm}
          />
          <label htmlFor="password">Clave:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChangeForm}
          />
          <a href="#">Olvidaste tu contrasenia?</a>
          <div className="container-btn">
            <button className="btn btn-danger m-2">Iniciar Sesion</button>
          </div>
        </form>
      </div>
    </div>
  );
};
