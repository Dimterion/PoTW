import { Link } from "react-router-dom";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">Interactive Text-Adventure Game</h1>
      <h2>... Under Construction ...</h2>
      <h3>Stay tuned!</h3>
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
    </div>
  );
}

export default AboutScreen;
