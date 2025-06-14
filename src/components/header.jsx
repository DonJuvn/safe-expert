import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
               <div className="navigation">
                  <Link to="/">Главная</Link>
                  <Link to="/about">О компании</Link>
                  <Link to="/services">Услуги</Link>
                  <Link to="/licences">Лицензии</Link>
                  <a href="#footer">Контакты</a>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
