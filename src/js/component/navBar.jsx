import React from "react";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-secondary">
        <div className="container">
          <div className="navbar-left">
            <a className="navbar-brand" href="#">
              Start Bootstrap
            </a>
            <button
              className="navbar-toggler "
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
          </div>
          <div className="navbar-right d-flex float end" >
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a
                    className="nav-link "
                    aria-current="page"
                    href="#"
                    id="Home"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Services
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
