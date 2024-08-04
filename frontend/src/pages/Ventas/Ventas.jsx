import "./Ventas.css";
import { CardVentas } from "./CardVentas/CardVentas";

export const Ventas = () => {
  const urlIconoVip = "fa-regular fa-star";
  const urlIconoAdmin = "fa-solid fa-user-tie";
  return (
    <section className="container-ventas">
      <CardVentas
        tipo={"VIP"}
        path={"/ventas/vip"}
        urlIcono={urlIconoVip}
      ></CardVentas>
      <CardVentas
        tipo={"ADMIN"}
        path={"/ventas/admin"}
        urlIcono={urlIconoAdmin}
      ></CardVentas>
    </section>
  );
};
