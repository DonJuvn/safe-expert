import React from "react";import { Link } from "react-router-dom";

export default function Services({ bgImage }) {
   const services = [
      {
         title: "Производственный контроль в области промышленной безопасности",
         image: "/img/job5.jpeg",
      },
      {
         title: "Аутсорсинг по ОТ и ТБ, Промышленной безопасности, Пожарной безопасности",
         image: "/img/job4.jpeg",
      },
      {
         title: "Разработка документов по ОТ и ТБ, Промышленной безопасности, Пожарной безопасности",
         image: "/img/job3.jpeg",
      },
      {
         title: "Подготовка, переподготовка специалистов, работников в области промышленной безопасности, безопасности и охраны труда, пожарной безопасности",
         image: "/img/job2.jpeg",
      },
      {
         title: "Проведение экспертизы промышленной безопасности (опасные технические устройства, технологии, технические устройства, материалы, применяемые на опасных производственных объектах).",
         image: "/img/job1.jpeg",
      },
   ];

   return (
      <div id="services">
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
               <div className="title">Услуги</div>
               <div className="textname">
                  Мы проводим профессиональное обучение сотрудников по
                  требованиям охраны труда, промышленной и пожарной
                  безопасности. Курсы соответствуют законодательству Республики
                  Казахстан и включают как теоретическую, так и практическую
                  подготовку.
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
