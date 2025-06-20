import useWidthHook from "../Hooks/useWidthHook";
import Aside from "./Aside";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  const [showAside, setShowAside] = useState(false);
  const width = useWidthHook();

  const handleShowAside = () => {
    setShowAside(!showAside);
  };

  return (
    <div className="principalNavContainer">
      <nav className="navContainer">
        {width > 1024 ? null : (
          <button onClick={handleShowAside} className="movilAsideBtn">
            <img
              alt="Bars icon"
              className="MovilAsideIcon"
              src="/svg/BarsWhite.svg"
            />
            <Aside showAside={showAside} />
          </button>
        )}
        <div className="logoContainer">
          <img
            alt="FlowUp Logo"
            className="imgLogo"
            src="/imgs/FlowUpLogo.webp"
          />
          <h1 className="webTitleH1">FlowUp</h1>
        </div>
        {width > 768 ? (
          <div className="inputContainer">
            <input
              className="inputNavSearch"
              placeholder="Buscar en FlowUp"
              type="search"
            />
            <img
              alt="Magnifying glass icon"
              className="inputLupaSvg"
              src="/svg/LupaBlack.svg"
            />
          </div>
        ) : null}

        <div className="UserContainer">
          {width < 768 ? (
            <img
              alt="Magnifying glass icon"
              className="mobileSearchIcon"
              src="/svg/LupaWhite.svg"
            />
          ) : null}
          <Link className="userImgLink" to={"/profile"}>
            <img
              alt="User photo"
              src="/imgs/UsuarioNulo.webp"
              className="imgUser"
            />
          </Link>

          {width > 1024 ? (
            <div className="divUsernameContainer">
              <h1 className="userH1">Jean Carlos</h1>
              <h2 className="userNameH1">jean_ccf</h2>
            </div>
          ) : null}
        </div>
      </nav>
    </div>
  );
}
