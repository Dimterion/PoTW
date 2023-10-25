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

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="mainComponent-container">
      {menuToggle && <Header />}
      <div className="mainComponent-imageAndText">
        <label className="mainComponent-menuBtn">
          <input
            type="checkbox"
            checked={menuToggle}
            onChange={handleMenuToggle}
          />
        </label>
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
          <>
            <h3 className="mainComponent-thankYouMessage">
              Thank you for playing & reading my story.
            </h3>
            <a
              className="mainComponent-link"
              href="https://profound-cat-a609de.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Next chapter
            </a>
            <Link className="mainComponent-creditsLink" to="/credits">
              Credits
            </Link>
          </>
        )}
        <div className="mainComponent-buttons">
          <button
            onClick={() => setOption(idLeft)}
            className="mainComponent-leftBtn"
          >
            {btnLeft}
          </button>
          <button
            onClick={() => setOption(idRight)}
            className="mainComponent-rightBtn"
          >
            {btnRight}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainComponent;
