import { Navbar, Nav, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import logo from "../../assets/images/logo.png";
const Header = () => {
  return (
    <Navbar bg="dark" expand="lg">
      <Navbar.Brand className="text-white">
        <Image src={logo} style={{ maxWidth: "10%" }} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="text-white" href="/">
            Inicio
          </Nav.Link>
          <Nav.Link className="text-white" href="/orla">
            Orla
          </Nav.Link>
          <Nav.Link className="text-white" href="about">
            Nosotros
          </Nav.Link>
          <Nav.Link className="text-white" href="login">
            Subir Proyectos
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
