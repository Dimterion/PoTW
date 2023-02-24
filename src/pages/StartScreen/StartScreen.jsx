import { Link } from "react-router-dom";
import "./startScreen.css";

function StartMenu() {
  return (
    <div className="startScreen-container">
      <h1 className="startScreen-title">Poets of Tomorrow’s World</h1>
      <div className="startScreen-menu">
        <Link className="startScreen-btn" to="/story">
          Start
        </Link>
        <Link className="startScreen-btn" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default StartMenu;
