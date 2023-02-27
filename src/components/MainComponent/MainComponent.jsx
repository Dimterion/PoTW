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
  alt,
}) {
  return (
    <div className="mainComponent-container">
      <div className="mainComponent-imageAndText">
        <img className="mainComponent-image" src={image} alt={alt} />
        <p className="mainComponent-text">{text}</p>
      </div>
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
      <Footer />
    </div>
  );
}

export default MainComponent;
