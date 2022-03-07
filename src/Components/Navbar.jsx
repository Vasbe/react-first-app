import React from "react";
import "../Styles/Navbar.css";
const Navbar = () => {
    return (
        <nav className='nav'>
        <div className="navbar__item">
        <a>
          Profile
        </a>
        </div>
        <div className="navbar__item">
        <a>
          Messages
        </a>
        </div>
        <div className="navbar__item">
        <a>
          News
        </a>
        </div>
        <div className="navbar__item">
        <a>
          Music
        </a>
        </div>
        <div className="navbar__item">
        <a>
          Settings
        </a>
        </div>
      </nav>
    );

}
export default Navbar;