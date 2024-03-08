import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Enform from "./Enform";
const Header = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  
  return (
    
    <>
      <nav className="navbar navbar-expand-lg  px-3  text-dark">
        <div className="container-fluid">
          <a className="navbar-brand w-25" href="#">
            <img src="./images/logo.png" className="logo" />
          </a>
          <button
            className="navbar-toggler bg-danger p-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link homeclass"
                  aria-current="page"
                >
                  <p className="d-flex flex-column menu-text">
                    <span>
                      Home{" "}
                      <span>
                        <i class="fa-solid fa-angle-down"></i>
                      </span>
                    </span>
                    <span>
                      Home<i class="fa-solid fa-angle-down"></i>
                    </span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link homeclass">
                  <p className="d-flex flex-column menu-text">
                    <span>
                      About Us<i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span>
                      About Us<i class="fa-solid fa-angle-down"></i>
                    </span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item servicesmenu">
                <NavLink
                  to="/services"
                  className="nav-link homeclass"
                  aria-current="page"
                >
                  <p className="d-flex flex-column menu-text">
                    <span>
                      Services<i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span>
                      Services<i class="fa-solid fa-angle-down"></i>
                    </span>
                  </p>
                </NavLink>
                <div className="dropdown-list shadow-lg pe-5 ps-2">
                  <ul>
                    <li className="nav-link">
                      <a href="#" className="nav-link homeclass fw-bold">
                        <p className="d-flex flex-column menu-text">
                          <span>Logo Design</span>
                          <span>Logo Design</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#" className="nav-link homeclass fw-bold">
                        <p className="d-flex flex-column menu-text">
                          <span>Website Development</span>
                          <span>Website Development</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#" className="nav-link homeclass fw-bold">
                        <p className="d-flex flex-column menu-text">
                          <span>Android IOS Application</span>
                          <span>Android IOS Application</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#" className="nav-link homeclass fw-bold">
                        <p className="d-flex flex-column menu-text">
                          <span>IT Stafing</span>
                          <span>IT Stafing</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#" className="nav-link homeclass fw-bold">
                        <p className="d-flex flex-column menu-text">
                          <span>Dekstop Application</span>
                          <span>Dekstop Application</span>
                        </p>
                      </a>
                    </li>
                    <li className="nav-link">
                      <a href="#" className="nav-link homeclass fw-bold">
                        <p className="d-flex flex-column menu-text">
                          <span>SEO Marketing</span>
                          <span>SEO Marketing</span>
                        </p>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
           
              <li className="nav-item">
                <NavLink
                  to="/career"
                  className="nav-link homeclass"
                  aria-current="page"
                  href="#"
                >
                  <p className="d-flex flex-column menu-text">
                    <span>
                      Career<i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span>
                      Career<i class="fa-solid fa-angle-down"></i>
                    </span>
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/blog"
                  className="nav-link homeclass"
                  aria-current="page"
                  href="#"
                >
                  <p className="d-flex flex-column menu-text">
                    <span>
                      Blog<i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span>
                      Blog<i class="fa-solid fa-angle-down"></i>
                    </span>
                  </p>
                </NavLink>
              </li>

              <li className="nav-item mx-0">
                <NavLink
                  to="/contact"
                  className="nav-link homeclass"
                  aria-current="page"
                  href="#"
                >
                  <p className="d-flex flex-column menu-text">
                    <span>
                      Contact Us<i class="fa-solid fa-angle-down"></i>
                    </span>
                    <span>
                      Contact Us<i class="fa-solid fa-angle-down"></i>
                    </span>
                  </p>
                </NavLink>
              </li>
            </ul>

            <div className="">
              <a
                type="button"
                href="#"
                class="animated-button-navbar"
                onClick={handleShow}
              >
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                Enroll Now{" "}
              </a>
              <Modal show={show} onHide={handleClose}>
                <div closeButton>
                  <div class="background">
                    <div class="shape"></div>
                    <div class="shape"></div>
                  </div>
                  <Enform/>
                </div>
              </Modal>
            </div>
          </div>
        </div>
        
      </nav>
    </>
  );
};

export default Header;
