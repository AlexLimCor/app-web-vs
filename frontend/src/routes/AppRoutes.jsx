import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { News } from "../pages/News/News";
import { Signin } from "../pages/Signin/Signin";
import { Server } from "../pages/Servidores/Server";
import { Ventas } from "../pages/Ventas/Ventas";
import { Foro } from "../pages/Foro/Foro";
import { Register } from "../pages/Register/Register";
import { FormVenta } from "../pages/Ventas/FormVenta/FormVenta";
import { Navigate } from "react-router-dom";
import { Private } from "./Private";
import { Profile } from "../pages/Profile/Profile";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/novedades" element={<News />}></Route>
      <Route path="/server" element={<Server></Server>}></Route>
      <Route path="/ventas" element={<Ventas></Ventas>}></Route>
      <Route path="/foro" element={<Foro></Foro>}></Route>

      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route path="/*" element={<Navigate to={"/"}></Navigate>}></Route>
      <Route path="/ventas/vip" element={<FormVenta dato="VIP" />}></Route>
      <Route path="/ventas/admin" element={<FormVenta dato="ADMIN" />}></Route>
      <Route
        path="/profile"
        element={
          <Private>
            <Profile />
          </Private>
        }
      ></Route>
    </Routes>
  );
};
