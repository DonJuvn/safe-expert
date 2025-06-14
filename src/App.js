import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/footer";

import Main from "./pages/Main";
import About from "./pages/About";
import Licences from "./pages/Licences";
import Services from "./pages/Services";

function App() {
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/about" element={<About />} />
            <Route path="/licences" element={<Licences />} />
            <Route path="/services" element={<Services />} />
         </Routes>
         <Footer />
      </>
   );
}

export default App;
