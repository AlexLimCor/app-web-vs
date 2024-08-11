import React, { useContext, useState, useEffect } from "react";
import { CardProfile } from "./CardProfile/CardProfile";
import "./Profile.css";
import { AuthContext } from "../../context/AuthProvider";
// import bingus from "../../assets/img/Bingus.jpg";
export const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <section className="section-profile">
      <CardProfile name={user.name} url={user.avatar} />
    </section>
  );
};
