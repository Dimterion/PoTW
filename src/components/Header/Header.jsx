import { Link } from "react-router-dom";
import "./header.css";

function Header() {
  return (
    <div className="header-container">
      <Link className="header-link" to="/">
        Start Screen
      </Link>
      <Link className="header-link" to="/story">
        Story Description
      </Link>
      <Link className="header-link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Header;
