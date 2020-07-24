import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return(
    <footer className="footer bg-dark p-4">
      <div className="container row text-center">

        <div className="col-6">


          <ul>
            <li className="mt-2 footer-list-item"><Link to="/">Home</Link></li>
            <li className="mt-2 footer-list-item"><Link to="/portfolio">Portfolio</Link></li>
            <li className="mt-2 footer-list-item"><Link to="/contact">Contact</Link></li>
          </ul>

        </div>

          <div className="col-6">
            <ul>
              <li className="mt-2 footer-list-item"><a href="https://linkedin.com/in/matthew-batko">LinkedIn</a></li>
              <li className="mt-2 footer-list-item"><a href="https://github.com/mjb527">Github</a></li>
            </ul>

          </div>

        </div>

    </footer>
  )
}

export default Footer;
