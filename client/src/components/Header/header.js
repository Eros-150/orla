import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-white margenNav">
        <Image src={logo} style={{ maxWidth: "10%" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="fs-4 m-auto">
        <Nav className="">
          <Nav.Link className="text-white mx-3" href="/">
            Inicio
          </Nav.Link>
          <Nav.Link className="text-white mx-3" href="/orla">
            Orla
          </Nav.Link>
          <Nav.Link className="text-white mx-3" href="about">
            Nosotros
          </Nav.Link>
          <Nav.Link className="text-white mx-3" href="login">
            Subir Proyectos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
