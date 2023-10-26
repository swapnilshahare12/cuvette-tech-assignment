import React from "react";
import "../componentscss/Navbar.css";
import { Link } from "react-router-dom";
import userProfile from "../assets/user-profile.svg";
import bellIcon from "../assets/bell.svg";
import dropDownIcon from "../assets/dropdown.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img
            src="https://cuvette.tech/app/static/media/logo.74bda650.svg"
            alt=""
          />
        </Link>
      </div>
      <div className="nav-right">
        <ul className="navbar-menu-list">
          <li className="navbar-menu-item">
            <Link to="/">FAQ</Link>
          </li>
          <li className="navbar-menu-item">
            <Link to="/">Feedback</Link>
          </li>
          <li className="navbar-menu-item">
            <div className="notification-count"></div>
            <img src={bellIcon} alt="" />
          </li>
          <li className="navbar-menu-item">
            <div className="user-profile-dropdown">
              <img
                className="nav-user-profile"
                src={userProfile}
                alt="user-image"
              />
              <div className="navbar-username">Siddhart Jain</div>
              <img src={dropDownIcon} alt="dropdown-icon" className="drop-down-icon"/>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
