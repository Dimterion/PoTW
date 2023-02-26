import "./mainComponent.css";

function MainComponent({ text, image, alt }) {
  return (
    <div className="mainComponent-container">
      <div className="mainComponent-imageAndText">
        <img className="mainComponent-image" src={image} alt={alt} />
        <p className="mainComponent-text">{text}</p>
      </div>
      <div>
        <button>Option 1</button>
        <button>Option 2</button>
      </div>
    </div>
  );
}

export default MainComponent;
