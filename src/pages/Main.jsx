export default function Main({ bgImage }) {   return (
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
            <div className="main"></div>
         </div>
      </div>
   );
}
