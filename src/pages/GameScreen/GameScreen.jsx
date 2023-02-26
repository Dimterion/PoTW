import { Link } from "react-router-dom";
import "./gameScreen.css";

function GameScreen() {
  return (
    <div className="gameScreen-container">
      {/* Temp area below */}
      <h2>
        Work In Progress<br></br>
        <br></br>To Be Continued...
      </h2>
      <Link className="gameScreen-link" to="/">
        {">"} Start screen
      </Link>
      <Link className="gameScreen-link" to="/about">
        {">"} Additional Info
      </Link>
      {/* Temp area above */}
    </div>
  );
}

export default GameScreen;
