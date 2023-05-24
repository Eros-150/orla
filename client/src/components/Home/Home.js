import React, { useEffect, useRef } from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import Carrousel from "../Carroussel/Carroussel";

const Home = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      const marquee = marqueeRef.current;
      if (marquee) {
        marquee.scrollLeft += 1; // Ajusta la velocidad de desplazamiento cambiando el valor
      }
    }, 50); // Ajusta el intervalo de tiempo para cambiar la velocidad

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <ImageGrid />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-1">
            <div className="marquee-container marquee1">
              <div ref={marqueeRef} className="marquee-content">
                Bienvenidos a la Orla de 2DAW 2022-2023
              </div>
            </div>
          </div>
          <Carrousel />
        </div>
      </div>
    </>
  );
};

export default Home;
