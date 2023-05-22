import React from 'react';
import '../../App.css';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center">
            <p className='p'>{year} 2DAW Monlau &copy; All Rights Reserved.</p>
            <nav className="footer-nav">
              <ul>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact Us</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
  