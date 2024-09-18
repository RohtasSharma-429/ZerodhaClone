import React from "react";
import "./Navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg border-bottom navbar-light bg-white">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img
            className="nav-logo"
            src="media/images/logo.svg"
            alt="Navbar Logo"
            style={{ width: "25%", paddingLeft: "3rem" }}
          />
        </a>

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
              <a className="nav-link active" aria-current="page" href="#">
                Signup
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Support
              </a>
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
