import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import particlesOptions from "./particles.json";

function App() {
  const particlesInit = useCallback((main) => {
    loadFull(main);
  }, []);

  return (
    <div className="App overflow-hidden h-full">
      <Particles options={particlesOptions} init={particlesInit} />
      <Navbar />
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo"/> */}
        <h1>Owencodes</h1>
        <p className="text-4xl drop-shadow-2xl text-teal-500">
          Full Stack Developer, Web3 & Blockchain Enthusiast
        </p>
        <h2 className="drop-shadow-2xl text-teal-500 mt-20">My Socials</h2>
        <div>
        <a
            className="App-link"
            href="https://www.twitch.tv/owencodes"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitch
          </a>
          <a
            className="App-link"
            href="https://github.com/owenbcoding"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          
          <a
            className="App-link"
            href="https://www.linkedin.com/in/eoghan-byrne-97221518a/"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube
          </a>
          <a
            className="App-link"
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <p className="text-4xl drop-shadow-2xl text-teal-500">
            Under Development Stay Tuned!
          </p>
          {/* <p className="text-4xl drop-shadow-2xl text-teal-500">Hosted on
            <a 
            className="App-link"
            href="https://vercel.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >- Vercel</a></p> */}
        </div>
      </header>
      <Home />
    </div>
  );
}

export default App;
