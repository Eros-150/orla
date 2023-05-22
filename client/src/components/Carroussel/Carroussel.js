import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../assets/images/carroussel/carroussel1.jpg";
import img2 from "../../assets/images/carroussel/carroussel2.jpg";
import img3 from "../../assets/images/carroussel/carroussel3.jpeg";
import img4 from "../../assets/images/carroussel/carroussel4.jpg";

const Carrousel = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-5">
        <Carousel className="w-100">
          <Carousel.Item>
            <img className="d-block w-100" src={img1} alt="Primera imagen" />
            <Carousel.Caption>
              <h3>Título de la primera imagen</h3>
              <p>Descripción de la primera imagen</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Segunda imagen" />
            <Carousel.Caption>
              <h3>Título de la segunda imagen</h3>
              <p>Descripción de la segunda imagen</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Tercera imagen" />
            <Carousel.Caption>
              <h3>Título de la tercera imagen</h3>
              <p>Descripción de la tercera imagen</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Cuarta imagen" />
            <Carousel.Caption>
              <h3>Título de la cuarta imagen</h3>
              <p>Descripción de la cuarta imagen</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
