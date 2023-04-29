import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { diagramLink } from "../../utils/diagramLink";
import "./descriptionScreen.css";

function DescriptionScreen() {
  return (
    <div className="descriptionScreen-container">
      <Header />
      <h2 className="descriptionScreen-header">Description</h2>
      <div className="descriptionScreen-text">
        <div>
          Initially the game was made after following a JavaScript tutorial.
          More info about it can be found{" "}
          <a
            className="descriptionScreen-link"
            href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-javascript-html-and-css-298b35c8ea96"
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </div>
        <br></br>
        <div>
          Later on I've remade it using React. Here are a few articles about the
          overall process:
          <ul>
            <li>
              <a
                className="descriptionScreen-link"
                href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-react-779667cca2cb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Making an interactive text adventure game with React
              </a>
            </li>
            <li>
              <a
                className="descriptionScreen-link"
                href="https://medium.com/@dimterion/making-a-react-text-adventure-game-continuation-e863f7e6b1b3"
                target="_blank"
                rel="noopener noreferrer"
              >
                Making a React Text-Adventure Game (continuation)
              </a>
            </li>
            <li>
              <a
                className="descriptionScreen-link"
                href="https://medium.com/@dimterion/designing-a-text-adventure-in-react-66bf4319a4f0"
                target="_blank"
                rel="noopener noreferrer"
              >
                Designing a Text-Adventure in React
              </a>
            </li>
          </ul>
        </div>
        <div>
          I've also made a diagram of the gaming options just out of curiosity.
          It looks rather overwhelming, but, if needed,{" "}
          <a
            className="descriptionScreen-link"
            href={diagramLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>{" "}
          it is. It's rather big, so some zoom might be required after opening.
        </div>
        <br></br>
        <div>
          Overall, this is a more or less final version of the game, although I
          might add some bits and pieces here and there occasionally.
        </div>
        <div>
          <h3 className="descriptionScreen-subHeader">Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>CSS</li>
            <li>Vite</li>
            <li>Vercel (deployment)</li>
            <li>NightCafe (images)</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DescriptionScreen;
