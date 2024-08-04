// import { ListOnline } from "./ListOnline";
import { CardServer } from "./CardServer/CardServer";

const servidor = [
  { id: 0, name: "PUBLICO", ip: "45.235.99.105:27244" },
  { id: 1, name: "AUTOMIX", ip: "45.235.99.105:27245" },
  { id: 2, name: "DEATHMATCH", ip: "45.235.99.105:27246" },
  { id: 3, name: "GUNGAME", ip: "45.235.99.105:27247" },
  { id: 4, name: "SURF + RESPAWN", ip: "45.235.99.105:27248" },
];

export const Server = () => {
  return (
    <div className="section-server">
      {servidor.map((data) => {
        return (
          <CardServer
            map={"de_Cache"}
            ip={data.ip}
            number={data.id}
            name={data.name}
            key={data.id}
          ></CardServer>
        );
      })}
    </div>
  );
};
