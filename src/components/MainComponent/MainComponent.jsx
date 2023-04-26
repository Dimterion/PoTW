import { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./mainComponent.css";

function MainComponent({
  text,
  btnLeft,
  btnRight,
  setOption,
  idLeft,
  idRight,
  image,
  additionalImage,
  alt,
  additionalImageAlt,
}) {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    <div className="mainComponent-container">
      {menuToggle && <Header />}
      <div className="mainComponent-imageAndText">
        <button
          className="mainComponent-menuBtn"
          onClick={() => setMenuToggle(!menuToggle)}
        >
          ^
        </button>
        <img className="mainComponent-image" src={image} alt={alt} />
        <p className="mainComponent-text">{text}</p>
        {alt === "Humanoid robo-rabbit" && (
          <a id="portal" href="https://the-final-piece.vercel.app/"></a>
        )}
      </div>
      <div className="mainComponent-options">
        {additionalImage && (
          <img
            className="mainComponent-additionalImage"
            src={additionalImage}
            alt={additionalImageAlt}
          />
        )}
        {additionalImageAlt === "The End" && (
          <Link className="mainComponent-creditsLink" to="/credits">
            Credits
          </Link>
        )}
        <div className="mainComponent-buttons">
          <div
            onClick={() => setOption(idLeft)}
            className="mainComponent-leftBtn"
          >
            {btnLeft}
          </div>
          <div
            onClick={() => setOption(idRight)}
            className="mainComponent-rightBtn"
          >
            {btnRight}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainComponent;
