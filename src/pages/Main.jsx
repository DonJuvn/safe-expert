export default function Main({ bgImage }) {
   return (
      <div id="main">
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
            <div className="main">
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
                  <div className="right">
                     <a href="#" id="text">
                        Whatsapp{" "}
                        <img
                           src={process.env.PUBLIC_URL + "img/link.png"}
                           alt=""
                        />
                     </a>
                     <a href="#" id="text">
                        Intagram{" "}
                        <img
                           src={process.env.PUBLIC_URL + "img/link.png"}
                           alt=""
                        />
                     </a>
                  </div>
               </div>
               <img id='mainbg' src={process.env.PUBLIC_URL + "img/mainbg.jpg"} alt="" />
            </div>
         </div>
      </div>
   );
}
