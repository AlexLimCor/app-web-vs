import { useEffect, useState } from "react";
import "./Signin.css";
import { CardErrorLogin } from "./CardErrorLogin/CardErrorLogin";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { GoogleOAuthProvider } from "@react-oauth/google";

const clientId =
  "953111487592-kitfbjrr8imuspur8nqk3m3qdljqpjfa.apps.googleusercontent.com";
export const Signin = () => {
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
    // console.log(formData);
    try {
      const response = await fetch("http://localhost:8080/users/validation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else if (response.status === 401) {
        setError(true);
      } else {
        console.error("Unexecpeted error", response.status);
      }
    } catch (error) {
      console.log(error);
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
        <GoogleOAuthProvider clientId={clientId}>
          <GoogleLogin
            onSuccess={(credentialResponse) => {
              console.log(jwtDecode(credentialResponse.credential));
            }}
            onError={() => {
              console.log("Login Failed");
            }}
          />
        </GoogleOAuthProvider>

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
