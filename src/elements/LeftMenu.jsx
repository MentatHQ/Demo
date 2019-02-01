import React from "react";
import { Link } from "react-router-dom";

class LeftMenu extends React.Component {
  render() {
    return (
      <div className="LeftMenu">
        <div className="Logo">
          <Link to="/">
            <img
              src="/img/logo-white.png"
              alt="Mentat"
              className="LogoWhiteImage"
            />
          </Link>
        </div>
        <ul className="MenuItems">
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/tasks">Tasks</Link>
          </li>
          <li>
            <Link to="/reviews">Reviews</Link>
          </li>
          <li>
            <Link to="/skills">Skills</Link>
          </li>
          <li>
            <Link to="#">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default LeftMenu;
