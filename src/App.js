import "./App.css";
import React from "react";
import { BarLoader } from "react-spinners";
import Contact from "./Contact";
import Particles from 'react-particles-js';

function App() {
  return (
    <div>
      <Particles
        className="particles"
        width="100vw"
        height="100vh"
        params={{
          "particles": {
            "number": {
              "value": 60,
              "density": {
                "enable": true,
                "value_area": 1500
              }
            },
            "line_linked": {
              "enable": true,
              "opacity": 0.02
            },
            "move": {
              "direction": "right",
              "speed": 0.05
            },
            "size": {
              "value": 1
            },
            "opacity": {
              "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0.05
              }
            }
          },
          "interactivity": {
            "events": {
              "onclick": {
                "enable": true,
                "mode": "push"
              }
            },
            "modes": {
              "push": {
                "particles_nb": 1
              }
            }
          },
          "retina_detect": true
        }} />
      <div className="App">
        <header className="App-header">
          <BarLoader className="spinner" loading width="200" height="10px" color="yellow" />
          <div className="headline">
            <h2>🚧 Website under reconstruction! 🚧</h2>
          </div>

        </header>
        <Contact />
      </div>
    </div>
  );
}

export default App;
