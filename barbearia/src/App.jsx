import React, { useState } from "react";
import logo from "./assets/barbearia-logo.png";
import moon from "./assets/moon.png";
import sun from "./assets/sun.png";
import "./App.css";

function App() {
  const [whiteDark, setWhiteDark] = useState(false);

  const dark = "Dark";
  const light = "Light";
  const dayNight = () => {
    setWhiteDark(!whiteDark);
  };

  return (
    <div className={whiteDark ? "mode-light" : "mode-dark"}>
      <header>
        <nav className="maxWidth">
          <img className="logo" src={logo} alt="" />
          <button onClick={dayNight} className="button">
            <img className="moonSun" src={whiteDark ? moon : sun} alt="" />
            <p className="">{whiteDark ? dark : light}</p>
          </button>
        </nav>
      </header>
      <main className="main">
        <div className="banner"></div>
        <div className="texts maxWidth">
          <h1>Bem-vindo a Barber Shop</h1>
          <p className="bold">
            Nossa barbearia sempre oferece profissionais de qualidade e estamos
            prontos para lidar com suas maiores expectativas.
          </p>
          <p>
            Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma
            equipe premiada que demonstrou o talento de mestres barbeiros em
            vários concursos de estilo. Deixe nosso barbeiro ser seu estilista
            pessoal e você nunca ficará desapontado.
          </p>
          <p className="font">S. Kelly</p>
        </div>
      </main>
    </div>
  );
}

export default App;
