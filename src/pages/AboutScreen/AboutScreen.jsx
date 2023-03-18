import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">Poets of Tomorrow’s World</h1>
      <h2>Interactive Text-Adventure Game</h2>
      <h3>Version 2.0</h3>
      <div className="aboutScreen-linksContainer">
        <a
          className="aboutScreen-link"
          href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-react-779667cca2cb"
          target="_blank"
          rel="noopener noreferrer"
        >
          {">"} More Info
        </a>
        <a
          className="aboutScreen-link"
          href="https://dimterion.github.io/Interactive-text-adventure-game/"
          target="_blank"
          rel="noopener noreferrer"
        >
          {">"} Original Version
        </a>
        <Link className="aboutScreen-link" to="/">
          {">"} Start Screen
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default AboutScreen;
