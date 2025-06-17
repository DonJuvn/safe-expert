import React from "react";import { Link } from "react-router-dom";

export default function Licences({ bgImage }) {
   return (
      <div id="licences">
         <div className="bg">
            <img src={bgImage} alt="background" />
            <div className="container">
               <div className="text">
                  <h1>
                     МЫ СОЗДАЕМ БЕЗОПАСНЫЕ УСЛОВИЯ ТРУДА С ВЫГОДАМИ ДЛЯ
                     РАБОТОДАТЕЛЯ!
                  </h1>
                  <a
                     href="https://wa.me/77078070737"
                     target="_blank"
                     rel="noopener noreferrer"
                  >
                     Подробнее
                  </a>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="toptext">
               <div className="title">Лицензии</div>
               <div className="textname">
                  Компания Safe Expert осуществляет деятельность на основании
                  всех необходимых лицензий и разрешений, выданных
                  уполномоченными органами Республики Казахстан.
               </div>
            </div>

            <div className="licence-section">
               <div className="licence-section__grid">
                  {[1, 2].map((_, i) => (
                     <div className="licence-card" key={i}>
                        <img
                           src={`/img/licence${i + 1}.png`}
                           alt={`Лицензия ${i + 1}`}
                           className="licence-card__image"
                        />
                        <div className="licence-card__buttons">
                           <button className="licence-card__btn licence-card__btn--view">
                              Посмотреть
                           </button>
                           <button className="licence-card__btn licence-card__btn--download">
                              ⬇ Скачать
                           </button>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </div>
   );
}
