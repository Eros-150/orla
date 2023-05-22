import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import Carrousel from "../Carroussel/Carroussel";

const About = () => {
  return (
    <>
      <h1 className="title text-center">Sobre Nosotros</h1>

      <Container className="crystal mt-5 py-5 text-white ">
        <p>
          Somos unos estudiantes del Grado Superior de Desarrollo de
          Aplicaciones Web y estamos presentando nuestra idea en formato web
          para el trabajo final de curso.
        </p>
        <p>
          Desde el inicio del proyecto, hemos trabajado para mejorar lo máximo
          posible la visión e idea de nuestro proyecto.
        </p>
        <p>
          Nuestro equipo está compuesto por expertos en el desarrollo de
          aplicaciones web. Trabajamos con pasión y compromiso para ofrecer un
          proyecto de calidad.
        </p>

        <Row>
          <Col lg={4} md={6} sm={12} className="text-center">
            <Image /*src={alumno1}*/ roundedCircle className="about-image" />
            <h3>Eros Ruiz Ramirez</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center">
            <Image /*src={alumno2}*/ roundedCircle className="about-image" />
            <h3>Joan Angel Díaz Pernias</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center">
            <Image /*src={alumno3}*/ roundedCircle className="about-image" />
            <h3>Sergi Perez Marí</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default About;
