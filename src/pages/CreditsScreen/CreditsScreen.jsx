import { Link } from "react-router-dom";
import coverRealWordImage from "../../assets/coverRealWordImage.jpg";
import coverSubLevelImage from "../../assets/coverSubLevelImage.jpg";
import coverZerOneImage from "../../assets/coverZerOneImage.jpg";
import "./creditsScreen.css";

function CreditsScreen() {
  return (
    <section className="creditsScreen-container">
      <h1 className="creditsScreen-header">Credits</h1>
      <div className="creditsScreen-block">
        <h2 className="creditsScreen-text">Made with love...</h2>
        <img className="creditsScreen-image" src={coverRealWordImage} />
      </div>
      <div className="creditsScreen-block">
        <img className="creditsScreen-image" src={coverSubLevelImage} />
        <h2 className="creditsScreen-text">...written by hearT</h2>
      </div>
      <div className="creditsScreen-block">
        <h2 className="creditsScreen-text">Developed in hope...</h2>
        <img className="creditsScreen-image" src={coverZerOneImage} />
      </div>
      <h3>
        The story continues{" "}
        <a
          className="creditsScreen-personalLink"
          href="https://profound-cat-a609de.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          here
        </a>
        .
      </h3>
      <Link className="creditsScreen-startScreenLink" to="/">
        Start Screen
      </Link>
      <a
        className="creditsScreen-personalLink"
        href="https://dimterion.github.io/"
        target="_blank"
        rel="noopener noreferrer"
      >
        {"< "}Dimterion{" >"}
      </a>
    </section>
  );
}

export default CreditsScreen;
