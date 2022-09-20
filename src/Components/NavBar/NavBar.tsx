import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./NavBar.css";
import Logo from "../../assets/Logo.png";

const rootElement = document.getElementById("root");

var screens = [
  { name: "home", to: "/Tableros" },
  { name: "Finanzas", to: "/Finanzas" },
  {name: "Operaciones", to: "/Contact", subScreens: [{ name: "padentro", to: "/Tableros"}, { name: "pafuera", to: "/Finanzas"}]},
  {name: "Comercial", to: "/Contact"},
  {name: "Recursos Humanos",to: "/Contact"}
];

function NavBar() {
  return (
    <div className="navBar">
      <div>
        <img
          src={Logo}
          style={{ width: 114, height: 67, alignSelf: "center", margin: 20 }}
        />
      </div>
      <div className="elementContainer">
        {screens.map((e) =>
          e.subScreens ? (
            <div className="suBavBarContainer">
              <Link to={e.to} className="element">
                {e.name}
              </Link>
              <div className="suBavBar">
                {e.subScreens.map((e) => (
                  <Link to={e.to} className="element">
                    {e.name}
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            <Link to={e.to} className="element">
              {e.name}
            </Link>
          )
        )}
      </div>
    </div>
  );
}

export default NavBar;
