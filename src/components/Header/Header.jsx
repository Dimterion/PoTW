import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="header-container">
      <Link className="header-link" to="/">
        Start Screen
      </Link>
      {location.pathname === "/story" ? (
        <a className="header-link" href="#top">
          Story Description
        </a>
      ) : (
        <Link className="header-link" to="/story">
          Story Description
        </Link>
      )}
      <Link className="header-link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Header;
