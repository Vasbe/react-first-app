import React from "react";
import "./Navbar.css";

const Navbar = () => {
    return (
        <nav className='nav'>
            <div className="navbar__item">
                <a href="/profile">
                    Профиль
                </a>
            </div>
            <div className="navbar__item">
                <a href="/dialogs">
                    Сообщения
                </a>
            </div>
            <div className="navbar__item">
                <a href="/news">
                    Новости
                </a>
            </div>
            <div className="navbar__item">
                <a href="/music">
                    Музыка
                </a>
            </div>
            <div className="navbar__item">
                <a href="/settings">
                    Настройки
                </a>
            </div>
        </nav>
    );

}
export default Navbar;