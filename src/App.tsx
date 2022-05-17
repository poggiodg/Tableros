import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route, 
  Link
} from "react-router-dom";
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ContactScreen from './screens/ContactScreen/ContactScreen';
import NavBar from './Components/NavBar/NavBar';

const rootElement = document.getElementById("root");

function App() {
  return (
  <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="/Tableros" element={<HomeScreen></HomeScreen>} />
      <Route path="/Contact" element={<ContactScreen></ContactScreen>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
