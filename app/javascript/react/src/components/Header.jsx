// Header.js
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <a className="navbar-brand" href="#">
          Your Logo
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="/" className="nav-link" >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" >
                 document
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link"  >
                Contact
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/leave" className="nav-link"  >
                 Leave
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signin" className="nav-link"  >
                 Sign in
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/signup" className="nav-link"  >
                 Sign up
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/product" className="nav-link"  >
                  Product
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link"  >
                  catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/catalog" className="nav-link"  >
                  catalog
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/user" className="nav-link"  >
                  Users
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/shadi" className="nav-link"  >
                  shadi
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Header;
