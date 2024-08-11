import { CardDw } from "./CardDownloads/CardDw";
import "./Home.css";
import logoCs from "../../assets/img/logo-cs.jpg";
import logoNoSteam from "../../assets/img/cs-no-steam.png";
import sxeLogo from "../../assets/img/sxe-logo.png";
import skin from "../../assets/img/skin.jpg";
import skinDefault from "../../assets/img/skin-default.jpeg";
import sonido from "../../assets/img/sonido.jpg";

const name = "COUNTER STRIKE 1.6 STEAM GRATIS (GS CLIENT)";
const nameNoSteam = "COUNTER STRIKE 1.6 NO STEAM";
const titleSxeInjected = "SXE-INJECTED 17.2 (ANTI CHEAT + FIX STEAM)";
const titleSkin = "SKIN DE NUESTROS SERVIDORES PUBLICOS (ARMAS)";
const titleSkinDefault = "SKIN DEL CS 1.6 DEFAULT (HD)";
const titleSonidoDefault = "SONIDOS DEL CS 1.6 (ESPANIOL/INGLES)";
const linkSonidoDefault =
  "https://patagonia-strike.com/descargas/sonidos/Sonidos-Español-Ingles.rar";
const linkSkinDefault =
  "https://patagonia-strike.com/descargas/skins/Skins-HD-Default.rar";
const linkSkin = "https://patagonia-strike.com/descargas/skins/skins.rar";
const linkSxe = "https://patagonia-strike.com/descargas/sxe/Sxe-Injected.rar";
const link = "https://dev-ms.ru/GSClient_Setup.exe";
const linkNoSteam =
  "https://patagonia-strike.com/descargas/juegos/cs16_no_steam.rar";
export const Home = () => {
  return (
    <section className="container-home">
      <div className="container-banner">
        <div className="banner">
          <div className="title-banner">
            <h1 className="anton-regular">
              COMUNIDAD <span>VIEJA SCHOOL</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio,
              doloribus debitis itaque similique id numquam? Quis ducimus
              eligendi obcaecati laboriosam, labore, fuga provident ex
              voluptatibus at quo a perferendis? Voluptatibus!
            </p>
          </div>
          <div className="home-btn">
            <button className="btn btn-danger">CONOCENOS</button>
            <button className="btn btn-danger">EMPEZAR A JUGAR</button>
          </div>
        </div>
      </div>
      <div className="div-downloads">
        <div className="dw-title">
          <h2 className="text-light">DESCARGAS</h2>
        </div>
        <div className="cont-card-dw">
          <CardDw logo={logoCs} title={name} link={link} />
          <CardDw logo={logoNoSteam} title={nameNoSteam} link={linkNoSteam} />
          <CardDw logo={sxeLogo} title={titleSxeInjected} link={linkSxe} />
          <CardDw logo={skin} title={titleSkin} link={linkSkin} />
          <CardDw
            logo={skinDefault}
            title={titleSkinDefault}
            link={linkSkinDefault}
          />
          <CardDw
            logo={sonido}
            title={titleSonidoDefault}
            link={linkSonidoDefault}
          />
        </div>
      </div>
    </section>
  );
};
