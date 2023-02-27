import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./startScreen.css";

function StartScreen() {
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
      <Footer />
    </div>
  );
}

export default StartScreen;
