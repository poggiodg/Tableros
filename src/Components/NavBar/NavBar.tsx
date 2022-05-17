import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import './NavBar.css';
import Logo from '../../assets/Logo.jpg'

const rootElement = document.getElementById("root");

function NavBar() {
  return (
    <div className='navBar'>
      <div>
      <img src={Logo} style={{width:200, height: 80, alignSelf: 'center'}}/>
      </div>
      <div>
        <Link to="/" className="element">
        Home
        </Link>
        <Link to="/Contact" className="element">
          Tablero
        </Link>
        <Link to="/Contact" className="element">
          Productos
        </Link>
        <Link to="/Contact" className="element">
          Servicios
        </Link>
        <Link to="/Contact" className="element">
          Clientes
        </Link>
      </div>
    </div>
  );
}

export default NavBar;