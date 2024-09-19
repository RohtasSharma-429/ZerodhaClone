// import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom navbar-light bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            className="nav-logo"
            src="media/images/logo.svg"
            alt="Navbar Logo"
            style={{ width: "25%", paddingLeft: "3rem" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/signup">
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/products">
                Products
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/pricing">
                Pricing
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link active" to="/support">
                Support
              </Link>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link active" href="#">
                <i className="fa-solid fa-bars"></i>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
