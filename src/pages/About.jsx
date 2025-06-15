import React from "react";import { Link } from "react-router-dom";

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
            <div className="about">
               <div className="top">
                  <div className="left">
                     <h1 id="title">О компании</h1>
                     <p id="text">
                        Учебный центр «SAFE EXPERT» был создан в 29 февраля 2016
                        году и на сегодняшний день является одним из ведущей
                        компанией по обучению и повышению квалификации рабочего
                        персонала по промышленной безопасности. Мы помогаем
                        предприятиям обеспечить безопасность их сотрудников и
                        самого предприятия. В компании работают эксперты
                        высокого уровня, которые владеют большим опытом.
                     </p>
                  </div>

                  <img src={process.env.PUBLIC_URL + "img/gallery1.jpg"} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
}
