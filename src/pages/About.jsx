import React from "react";
import { Link } from "react-router-dom";

export default function About({ bgImage }) {
   return (
      <div id="about">
         <div className="bg">
            <img src={bgImage} alt="background" />
            <div className="container">
               <div className="text">
                  <h1>
                  МЫ СОЗДАЕМ БЕЗОПАСНЫЕ УСЛОВИЯ ТРУДА С ВЫГОДАМИ ДЛЯ
                  РАБОТОДАТЕЛЯ!
               </h1>
               <a href="#">Подробнее</a>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="about"></div>
         </div>
      </div>
   );
}
