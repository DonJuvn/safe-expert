import React from "react";
import { Link } from "react-router-dom";

export default function Licences({ bgImage }) {

   const services = [
      {
        title: "Производственный контроль в области промышленной безопасности",
        image: "/img/img_frame_66.png",
      },
      {
        title: "Аутсорсинг по ОТ и ТБ, Промышленной безопасности, Пожарной безопасности",
        image: "/img/img_frame_66_220x580.png",
      },
      {
        title: "Разработка документов по ОТ и ТБ, Промышленной безопасности, Пожарной безопасности",
        image: "/img/img_frame_66_1.png",
      },
      {
        title: "Подготовка, переподготовка специалистов, работников в области промышленной безопасности, безопасности и охраны труда, пожарной безопасности",
        image: "/img/img_frame_66_2.png",
      },
      {
        title: "Проведение экспертизы промышленной безопасности (опасные технические устройства, технологии, технические устройства, материалы, применяемые на опасных производственных объектах).",
        image: "/img/img_frame_66_3.png",
      },
    ];
    

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
               <a href="#">Подробнее</a>
               </div>
            </div>
         </div>
         <div className="container">
            <div className="toptext">
               <div className="title">Услуги</div>
               <div className="textname">
                  Мы проводим профессиональное обучение сотрудников по требованиям охраны труда, промышленной и пожарной безопасности. Курсы соответствуют законодательству Республики Казахстан и включают как теоретическую, так и практическую подготовку.
               </div>
            </div>

            <div className="licences">
               {services.map((service, index) => (
                  <div className="card" key={index}>
                  <img src={service.image} alt={service.title} />
                  <h3>{service.title}</h3>
                  <button>Подробнее</button>
                  </div>
               ))}
            </div>
            </div>

      </div>
   );
}
