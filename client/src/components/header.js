import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-bootstrap';
import images from '../assets/images.json';

const Header = () => {
  return (
    <Nav className="justify-content-left flex-grow-1 pe-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={images[0].imageUrl} width={'40px'} height={'40px'} />

        <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <NavLink href="/Home" className="text-white">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/quienSomos" className="text-white">Quienes somos</NavLink>
            </li>
            <li className="nav-item">
              <NavLink href="/login" className="text-white">Login</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Nav>
  );
};

export default Header;
