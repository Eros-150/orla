import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import django from "../../assets/images/aboutUs/django.png";
import angular from "../../assets/images/aboutUs/Angular.png";
import express from "../../assets/images/aboutUs/ExpressJS.png";
import react from "../../assets/images/aboutUs/react.png";
import vue from "../../assets/images/aboutUs/Vue.png";
import node from "../../assets/images/aboutUs/NodeJs.png";
import laravel from "../../assets/images/aboutUs/Laravel.png";

const About = () => {
  return (
    <>
      <h1 className="mt-5 text-center text-white">Sobre Nosotros</h1>

      <Container className="crystal mt-5 py-5 text-white">
        <p className="text-center fs-4 mx-5">
          Somos unos estudiantes del Grado Superior de Desarrollo de
          Aplicaciones Web y estamos presentando nuestra idea para el proyecto
          final de la web de nuestra clase.
        </p>
        {/* <p className="text-center">
          Desde el inicio del proyecto, hemos trabajado para mejorar lo máximo
          posible la visión e idea de nuestro proyecto.
        </p>
        <p className="text-center">
          Nuestro equipo está compuesto por expertos en el desarrollo de
          aplicaciones web. Trabajamos con pasión y compromiso para ofrecer un
          proyecto de calidad.
        </p> */}

        <Row className="mt-5">
          <Col lg={4} md={6} sm={12} className="text-center">
            <h3>Eros Ruiz Ramirez</h3>
            <Image
              src={
                "https://media.licdn.com/dms/image/D4D35AQE7wOjNnPYGLA/profile-framedphoto-shrink_200_200/0/1683039577784?e=1685469600&v=beta&t=IMFXGiKJBCBkI0LjqtKFe2vrFR3iCjg4ffULGicJ9no"
              }
              roundedCircle
              className="about-image mt-3 mb-3"
            />

            <p className="mt-3">
              Soy Eros y acabo de terminar el CFGS de DAW, tambien tengo el CFGS
              de DAM, soy una persona con muchas ganas de empezar su carrera
              profesional en el sector tecnológico, para así aprender lo máximo
              posible.
            </p>

            <p>
              Lenguajes utilizados: HTML, CSS, JS, PHP, JAVA, C#, C++, Python y
              SQL.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center">
            <h3>Joan Angel Díaz Pernias</h3>
            <Image
              src={
                "https://media.licdn.com/dms/image/D4D03AQE-8VETv3H45A/profile-displayphoto-shrink_200_200/0/1675171268466?e=1690416000&v=beta&t=0J2ehijGQttbYP9C_2a1v_l24t6PbaWGeO54eGuBUks"
              }
              roundedCircle
              className="about-image mt-3 mb-3"
            />

            <p className="mt-3">
              Soy Joan y acabo de terminar un CFGS de DAW, tengo el CFGS de DAM,
              ambos en Monlau Formación Profesional.
            </p>
            <p>
              Tengo conocimientos de Java, JavaScript, PHP, HTML, CSS, SQL, C# y
              Python.
            </p>
            <p>
              Programas: Visual Studio, Apache Netbeans, Android Studio,
              IntelliJ IDEA, Xampp, MySQL.
            </p>
          </Col>
          <Col lg={4} md={6} sm={12} className="text-center">
            <h3>Sergi Perez Marí</h3>
            <Image
              src={
                "https://media.licdn.com/dms/image/D4D03AQEKGEJAYbfnPw/profile-displayphoto-shrink_200_200/0/1666113651999?e=1690416000&v=beta&t=BxmcPnqRQxCFo9o8HU3BWGQn5fn9wt9uhJGZKW0bDNE"
              }
              roundedCircle
              className="about-image mt-3 mb-3"
              width={200}
            />
            <p className="mt-3">
              Soy Sergi y acabo de terminar el CFGS de DAW (Desarrollo de
              Aplicaciones Web) el cual le gusta la programación y en ratos
              libres veo películas/series, leer y escuchar música.
            </p>
            <p>
              Tengo experiencia usando los siguientes lenguajes: HTML, CSS,
              Java, C# y PHP, aunque he tocado algo de C, C++ y Python y ahora
              mismo estoy con JavaScript.
            </p>
          </Col>
        </Row>

        <p className="image-grid my-5 crystal2">
            <img src={django} width={75}/>
            <img src={angular} width={75}/>
            <img src={express} width={125}/>
            <img src={react} width={75}/>
            <img src={vue} width={75}/>
            <img src={node} width={75}/>
            <img src={laravel} width={75}/>
        </p>
      </Container>
    </>
  );
};

export default About;
