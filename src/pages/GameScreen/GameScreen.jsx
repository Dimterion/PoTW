import { Link } from "react-router-dom";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import mainCharacterImage from "../../assets/mainCharacterImage.jpg";
import "./gameScreen.css";

function GameScreen() {
  return (
    <div className="gameScreen-container">
      <MainComponent
        text={texts[0].text}
        image={mainCharacterImage}
        alt="Main character image"
      />
    </div>
  );
}

export default GameScreen;

// {/* Temp area below */}
// <h2>
// Work In Progress<br></br>
// <br></br>To Be Continued...
// </h2>
// <Link className="gameScreen-link" to="/">
// {">"} Start screen
// </Link>
// <Link className="gameScreen-link" to="/about">
// {">"} Additional Info
// </Link>
// {/* Temp area above */}
