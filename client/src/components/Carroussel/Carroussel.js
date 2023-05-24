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
              <h3>Promoción DAM 2018-2020</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img2} alt="Segunda imagen" />
            <Carousel.Caption>
              <h3>Promoción SMX 2018-2020</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img3} alt="Tercera imagen" />
            <Carousel.Caption>
              <h3>Promoción SMX 2020-2022</h3>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={img4} alt="Cuarta imagen" />
            <Carousel.Caption>
              <h3>Promoción ASIX 2018-2020</h3>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Carrousel;
