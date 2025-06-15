import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Main from "./pages/Main";
import About from "./pages/About";
import Licences from "./pages/Licences";
import Services from "./pages/Services";

// import MainBg from "../public/img/MainBg.png";
// import AboutBg from "../public/img/AboutBg.png";
// import ServicesBg from "../public/img/ServicesBg.png";
// import LicencesBg from "../public/img/LicencesBg.png";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Main bgImage="/img/MainBg.png" />} />
            <Route
               path="/about"
               element={<About bgImage="/img/AboutBg.png" />}
            />
            <Route
               path="/licences"
               element={<Licences bgImage="/img/LicencesBg.png" />}
            />
            <Route
               path="/services"
               element={<Services bgImage="/img/ServicesBg.png" />}
            />
         </Routes>

         <Footer />
      </>
   );
}

export default App;
