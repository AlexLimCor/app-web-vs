import { useState } from "react";
import "./FormVenta.css";

const arrayOptions = [
  { id: 0, mes: "UN MES", total: 1 },
  { id: 1, mes: "DOS MESES", total: 2 },
  { id: 2, mes: "TRES MESES", total: 3 },
  { id: 3, mes: "SEIS MESES", total: 6 },
  { id: 4, mes: "DOCE MESES", total: 12 },
];

const dataVip = [
  { multiplicador: 2, precio: 300, id: 0 },
  { multiplicador: 3, precio: 450, id: 1 },
  { multiplicador: 4, precio: 600, id: 2 },
  { multiplicador: 6, precio: 900, id: 3 },
  { multiplicador: 8, precio: 1200, id: 4 },
  { multiplicador: 10, precio: 1500, id: 5 },
  { multiplicador: 15, precio: 2110, id: 6 },
  { multiplicador: 20, precio: 2720, id: 7 },
];

const servidor = [
  { id: 0, name: "PUBLICO", ip: "45.235.99.105:27244" },
  { id: 1, name: "AUTOMIX", ip: "45.235.99.105:27245" },
  { id: 2, name: "DEATHMATCH", ip: "45.235.99.105:27246" },
  { id: 3, name: "GUNGAME", ip: "45.235.99.105:27247" },
  { id: 4, name: "SURF + RESPAWN", ip: "45.235.99.105:27248" },
];

const dolarBlueData = 1370;

export const FormVenta = ({ dato = "VIP" }) => {
  const [server, setServer] = useState(0);
  const handleSelectServer = (event) => {
    setServer(event.target.value);
  };
  const [select, setSelect] = useState(0);
  const handleMesChalenge = (event) => {
    setSelect(parseInt(event.target.value));
  };
  const [priv, setPrivilegio] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    tipo: dato,
    privilegio: null,
    date: "",
    cantMes: null,
    servidor: null,
  });
  const handleSetPrivilegio = (event) => {
    setPrivilegio(parseInt(event.target.value));
  };
  const handleForm = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const onSubmitForm = (event) => {
    event.preventDefault();
    dataVip[priv].precio = dataVip[priv].precio * arrayOptions[select].total;
    formData.privilegio = dataVip[priv];
    formData.cantMes = arrayOptions[select].total;
    formData.date = new Date();
    formData.servidor = servidor[server];
    console.log("Los datos del usuario es:", formData);
  };
  return (
    <form className="form-ventas" onSubmit={onSubmitForm}>
      <div className="cont-ventas">
        <h4>
          DATOS PERSONALES -{" "}
          <span className={dato.toLowerCase() === "vip" ? "vip" : "admin"}>
            {dato}
          </span>
        </h4>
        <div className="input-label-form">
          <label htmlFor="name">
            TAG DEL USUARIO{" "}
            <span className={dato.toLowerCase() === "vip" ? "vip" : "admin"}>
              {dato}
            </span>
            :
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleForm}
          />
        </div>
        <div className="input-label-form">
          <label htmlFor="servidor">SERVIDOR:</label>
          <select name="servidor" value={server} onChange={handleSelectServer}>
            {servidor.map((dato) => {
              return (
                <option value={dato.id} key={dato.id}>
                  #{dato.id + 1} {dato.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-label-form">
          <label htmlFor="">OPCION:</label>
          <select name="mes" onChange={handleMesChalenge} value={select}>
            {arrayOptions.map((data) => {
              return (
                <option value={data.id} key={data.id}>
                  {data.mes}
                </option>
              );
            })}
          </select>
        </div>
        <div className="input-label-form">
          <label htmlFor="opcion">TIPO DE PRIVILEGIO:</label>
          <select
            name={dato.toLowerCase()}
            value={priv}
            onChange={handleSetPrivilegio}
          >
            {dataVip.map((data) => {
              return (
                <option value={data.id} key={data.id}>
                  {dato === "ADMIN" ? "ADMIN" : "VIP"} X{data.multiplicador}{" "}
                  (POR {arrayOptions[select].mes}) - $
                  {data.precio * arrayOptions[select].total} (USD $
                  {(
                    (data.precio * arrayOptions[select].total) /
                    dolarBlueData
                  ).toPrecision(2)}
                  )
                </option>
              );
            })}
          </select>
        </div>
        <button className="btn btn-danger">CONTINUAR</button>
      </div>
    </form>
  );
};
