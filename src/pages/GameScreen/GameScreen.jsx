// import { Link } from "react-router-dom";
import { useState } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import mainCharacterImage from "../../assets/mainCharacterImage.jpg";
import "./gameScreen.css";

function GameScreen() {
  const [option, setOption] = useState(0);

  return (
    <div className="gameScreen-container">
      {option === 0 && (
        <MainComponent
          text={texts[0].text}
          btnLeft={texts[0].options[0].text}
          btnRight={texts[0].options[1].text}
          setOption={setOption}
          idLeft={1}
          idRight={2}
          image={mainCharacterImage}
          alt="Main character image"
        />
      )}
      {option === 1 && "Option 1"}
      {option === 2 && "Option 2"}
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
