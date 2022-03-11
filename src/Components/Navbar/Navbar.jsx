import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="navbar__item">
                <NavLink to="/profile">
                    Профиль
                </NavLink>
            </div>
            <div className="navbar__item">
                <NavLink to="/dialogs">
                    Сообщения
                </NavLink>
            </div>
            <div className="navbar__item">
                <NavLink to="/news">
                    Новости
                </NavLink>
            </div>
            <div className="navbar__item">
                <NavLink to="/music">
                    Музыка
                </NavLink>
            </div>
            <div className="navbar__item">
                <NavLink to="/settings">
                    Настройки
                </NavLink>
            </div>
        </nav>
    );

}
export default Navbar;