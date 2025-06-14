import React from "react";
import { Link, Route, Routes } from "react-router-dom";

const Footer = () => {
   return(
      <div id="footer">
      <div className="container">
         <div className="footer">
            <div className="nav">
               <div className="logo">
                  <img
                src={process.env.PUBLIC_URL + "img/logo-white.png"}
                alt="logo"
              />
               </div>
               <div className="navigation">
                  <div className="item">
                     <p id="title">Whatsapp</p>
                     <p id="text">+ 7 (707) 807 07 37</p>
                  </div>
                  <div className="item">
                     <p id="title">Instagram</p>
                     <p id="text">safe_expert_kz</p>
                  </div>
                  <div className="item">
                     <p id="title">Электронная почта</p>
                     <p id="text">safe.expert@mail.ru</p>
                  </div>
               </div>
            </div>
            <div className="bottom">
               <div className="schedule">
                  <p id="title">График работы:</p>
                  <p id="text">Понедельник - Пятница: 09:00 - 18:00</p>
                  <p id="text">Субота - Воскресенье: Выходные</p>
               </div>
               <p id="title">© 2024. Все права защищены.</p>
            </div>
         </div>
      </div>
      </div>
   )
}

export default Footer;