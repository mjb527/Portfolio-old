import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>

      <div className="collapse navbar-collapse">

        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/portfolio">Portfolio</Link>
          </li>
          <li className="nav-item active">
            <Link className="nav-link" to="/contact">Contact</Link>
          </li>
        </ul>

      </div>

      <div className="ml-auto nav-item">
          <Link className="nav-link" to="/">Matt Batko Portfolio</Link>
      </div>

    </nav>
  );
}

export default Nav;
