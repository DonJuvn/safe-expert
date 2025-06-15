import React, { useState, useEffect } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [
   process.env.PUBLIC_URL + "/img/gallery1.jpg",
   process.env.PUBLIC_URL + "/img/gallery2.jpg",
   process.env.PUBLIC_URL + "/img/gallery3.jpg",
   process.env.PUBLIC_URL + "/img/gallery4.jpg",
];

const Gallery = () => {
   const [index, setIndex] = useState(0);
   const [fade, setFade] = useState(false);

   const changeImage = (newIndex) => {
      setFade(true);
      setTimeout(() => {
         setIndex(newIndex);
         setFade(false);
      }, 300); // should match the CSS transition duration
   };

   const handlePrev = () => {
      const newIndex = index === 0 ? images.length - 1 : index - 1;
      changeImage(newIndex);
   };

   const handleNext = () => {
      const newIndex = index === images.length - 1 ? 0 : index + 1;
      changeImage(newIndex);
   };

   return (
      <div className="gallery">
         <button className="arrow arrow-left" onClick={handlePrev}>
            <FaArrowLeft />
         </button>

         <div className={`main-image ${fade ? "fade" : ""}`}>
            <img src={images[index]} alt={`Gallery ${index + 1}`} />
         </div>

         <div className="side-images">
            {images.map((img, i) =>
               i !== index ? (
                  <img
                     key={i}
                     src={img}
                     alt={`Thumb ${i + 1}`}
                     onClick={() => changeImage(i)}
                     style={{ cursor: "pointer" }}
                  />
               ) : null
            )}
         </div>

         <button className="arrow arrow-right" onClick={handleNext}>
            <FaArrowRight />
         </button>
      </div>
   );
};

export default Gallery;
