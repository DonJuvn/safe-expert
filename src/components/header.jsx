import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id="header">
      <div className="container">
        <div className="header">
          <div className="logo">
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "img/logo.png"}
                alt="logo"
              />
            </Link>
          </div>

          <div className={`navigation ${isOpen ? "open" : ""}`}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Главная</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>О компании</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>Услуги</NavLink>
            <NavLink to="/licences" onClick={() => setIsOpen(false)}>Лицензии</NavLink>
            <a href="#footer" onClick={() => setIsOpen(false)}>Контакты</a>
          </div>

          <div className="burger" onClick={() => setIsOpen(!isOpen)}>
            ☰
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
