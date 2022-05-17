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
      <Route path="/" element={<HomeScreen></HomeScreen>} />
      <Route path="/Contact" element={<ContactScreen></ContactScreen>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <Counter />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <span>
//           <span>Learn </span>
//           <a
//             className="App-link"
//             href="https://reactjs.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux
//           </a>
//           <span>, </span>
//           <a
//             className="App-link"
//             href="https://redux-toolkit.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Redux Toolkit
//           </a>
//           ,<span> and </span>
//           <a
//             className="App-link"
//             href="https://react-redux.js.org/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             React Redux
//           </a>
//         </span>
//       </header>
//     </div>
//   );
// }

// export default App;
