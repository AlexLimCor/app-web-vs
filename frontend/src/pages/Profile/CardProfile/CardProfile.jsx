import React from "react";
import "./CardProfile.css";
import { Link } from "react-router-dom";

export const CardProfile = ({ name, url }) => {
  return (
    <div className="card-profile">
      <div className="back-img">
        <div className="cont-img-profile">
          <img alt="" src={url} />
        </div>
      </div>
      <div className="cont-profile-descrip">
        <h4>{name}</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          eligendi quo saepe ea non, esse numquam nulla a aliquid quae enim
          neque! Assumenda esse quis, maiores iure fugit in eaque?
        </p>
      </div>
      <div className="cont-info-user">
        <p>Nivel:</p>
        <span>10</span>
        <Link className="btn btn-danger">Modificar Perfil</Link>
      </div>
    </div>
  );
};
