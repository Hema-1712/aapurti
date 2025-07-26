
import { useState } from 'react'
import './App.css'
import React from "react";
import { BrowserRouter as Router ,Routes, Route, HashRouter } from "react-router-dom";
import About from './components/About';
import Lead from './components/Lead';
import Signin from './components/Signin';

import Team from './components/Team';

import Login from './components/Login';
import Report from './components/Report';
import Boa from './components/Boa';


function App() {
    const [count, setCount] = useState(0)

  return (
     <div style={{ backgroundColor: ' beige'}}>
              <HashRouter>
      <Routes>
       <Route path="/" element={<Boa/>} />
        <Route path="/Report" element={<Report />} />
        <Route path="/Lead" element={<Lead />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Team" element={<Team />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/About" element={<About />} />

      </Routes>
    </HashRouter>
    </div>
  );
}

export default App;