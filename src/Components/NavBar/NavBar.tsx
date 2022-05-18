import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import './NavBar.css';
import Logo from '../../assets/Logo.png'

const rootElement = document.getElementById("root");

function NavBar() {
  return (
    <div className='navBar'>
      <div>
      <img src={Logo} style={{width:114, height: 67, alignSelf: 'center', margin: 20}}/>
      </div>
      <div>
        <Link to="/Tableros" className="element">
        Home
        </Link>
        <Link to="/Finanzas" className="element">
          Finanzas
        </Link>
        <Link to="/Contact" className="element">
          Operaciones
        </Link>
        <Link to="/Contact" className="element">
          Comercial
        </Link>
        <Link to="/Contact" className="element">
          Recursos Humanos
        </Link>
      </div>
    </div>
  );
}

export default NavBar;