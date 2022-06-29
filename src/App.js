import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import logo from "./logo.svg";
import "./App.css";
import Home from "./Home";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App">
      <Particles options={particlesOptions} init={particlesInit} />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <h1>Owencodes</h1>
        <p>Full Stack Developer and Web3 Enthusiast</p>
        <div>
          <a
            className="App-link"
            href="https://github.com/owenbcoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            My Github
          </a>
          <a
            className="App-link"
            href="Linked In"
            target="_blank"
            rel="noopener noreferrer"
          >
            Linked In
          </a>
          <p>Site Under Development Stay Tuned!</p>
          <p>Hosted on
            <a
            className="App-link"
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >Varcel</a></p>
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
