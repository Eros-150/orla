import React from "react";
import ImageGrid from "../ImageGrid/ImageGrid";
import Carrousel from "../Carroussel/Carroussel";

const Home = () => {
  return (
    <>
      <ImageGrid />
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-1">
            <marquee className="marquee1 prueba">
              Bienvenidos a la Orla de 2DAW 2022-2023
            </marquee>
          </div>

          <Carrousel />
        </div>
      </div>
    </>
  );
};

export default Home;
