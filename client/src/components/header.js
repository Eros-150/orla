import Nav from 'react-bootstrap/Nav';
import images from '../assets/images.json';

const Header = () => {
  return (
    <Nav className="justify-content-left flex-grow-1 pe-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <img src={images[0].imageUrl} width={'40px'} height={'40px'} />

        <div className="collapse navbar-collapse mx-2" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
            <Nav.Link href="/Home" className="text-white">Home</Nav.Link>
            </li>
            <li className="nav-item">
              <Nav.Link href="/quienSomos" className="text-white">Quienes somos</Nav.Link>

            </li>
          </ul>
        </div>
      </nav>
    </Nav>
  );
};

export default Header;
