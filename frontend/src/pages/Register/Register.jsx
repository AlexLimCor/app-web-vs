// import GoogleLogin from "react-google-login";
import { useEffect, useState } from "react";
import "./Register.css";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import  Swal  from "sweetalert2"

const clientId =
  "953111487592-kitfbjrr8imuspur8nqk3m3qdljqpjfa.apps.googleusercontent.com";
export const Register = () => {
  const [info, setInfo] = useState("");
  const [formDataRegister, setFormDataRegister] = useState({
    name: "",
    email: "",
    clave: "",
    repeatClave: "",
    state: false,
  });
  const handleFormDataRegister = (event) => {
    const { name, value, type, checked } = event.target;
    setFormDataRegister({
      ...formDataRegister,
      [name]: type === "checkbox" ? checked : value,
    });
  };
  const onSubmitFormRegister = async (event) => {
    event.preventDefault();
    Object.entries(formDataRegister).forEach(([clave, valor]) => {
      if (valor === "" || valor === false) {
        setInfo("* Por favor complete el formulario");
        return;
      } else {
        setInfo("");
      }
    });
    // console.log(formDataRegister);
    try {
      const response = await fetch("http://localhost:8080/users/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataRegister),
      });
      if (response.ok){
        const data = await response.json();
        Swal.fire({
          background: "#222",
          color:"#fff",
          iconColor:"green",
          position: "center",
          icon: "success",
          text:"hola mundo",
          title: "You 'r successfully",
          showConfirmButton: true,
        });
        console.log(data)
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container-register">
      <div className="div-form">
        <div className="title-register">
          <h4>CREAR CUENTA</h4>
        </div>
        <div className="section-form">
          <form className="form-register" onSubmit={onSubmitFormRegister}>
            <label htmlFor="name">Ingrese su Usuario:</label>
            <input
              type="text"
              name="name"
              value={formDataRegister.name}
              onChange={handleFormDataRegister}
            />
            <label htmlFor="email">Ingrese su Email:</label>
            <input
              type="email"
              name="email"
              value={formDataRegister.email}
              onChange={handleFormDataRegister}
            />
            <label htmlFor="password">Ingrese su contrasenia:</label>
            <input
              type="password"
              name="clave"
              value={formDataRegister.clave}
              onChange={handleFormDataRegister}
            />
            <label htmlFor="password2">Confirmar Contrasenia:</label>
            <input
              type="password"
              name="repeatClave"
              value={formDataRegister.repeatClave}
              onChange={handleFormDataRegister}
            />
            <div className="cont-check">
              <input
                type="checkbox"
                name="state"
                value={formDataRegister.state}
                onChange={handleFormDataRegister}
              />
              <span>
                Acepto todos los <a href="#">Terminos y Condiciones</a>
              </span>
            </div>
            <span className="text-danger">{info}</span>
            <button className="btn btn-danger m-2">Crear mi Cuenta</button>
          </form>
          <article className="div-account">
            <h6>OTRAS ALTERNATIVAS:</h6>
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
          </article>
        </div>
      </div>
    </div>
  );
};
