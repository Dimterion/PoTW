import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">Poets of Tomorrow’s World</h1>
      <h2>Interactive Text-Adventure Game</h2>
      <h3>Extended Cut</h3>
      <div className="aboutScreen-linksContainer">
        <Link className="aboutScreen-link" to="/">
          {">"} Start Screen
        </Link>
        <Link className="aboutScreen-link" to="/description">
          {">"} Description
        </Link>
        <a
          className="aboutScreen-link"
          href="https://dimterion.github.io/Interactive-text-adventure-game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {">"} Original Version
        </a>
      </div>
      <a
        className="aboutScreen-personalLink"
        href="https://dimterion.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {">"} Made by Dimterion {"<"}
      </a>
      <Footer />
    </div>
  );
}

export default AboutScreen;
