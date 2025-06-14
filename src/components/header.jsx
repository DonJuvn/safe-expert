import React from "react";import { Link } from "react-router-dom";

const Header = () => {
   return (
      <div id="header">
         <div className="container">
            <div className="header">
               <div className="logo">
                  <img
                     src={process.env.PUBLIC_URL + "img/logo.png"}
                     alt="logo"
                  />
               </div>
               <div className="navigation">
                  <Link></Link>
                  <Link></Link>
                  <Link></Link>
                  <Link></Link>
                  <Link></Link>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Header;
