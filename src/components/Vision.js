import React from "react";
import "./Vision.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
function Vision() {
  return (
    <div>
      <div className="main">
        <div className="profile-card">
          <div className="img">
            <img src="https://img.freepik.com/free-vector/eye-logo-design-template_23-2150878679.jpg?size=626&ext=jpg&ga=GA1.1.2111425044.1704477580&semt=sph" />
          </div>
          <div className="caption">
            <h3>Our vision</h3>
            <p>Excellent IT training </p>
            <div className="social-links">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
          <img src="https://img.freepik.com/free-vector/business-goal-background_23-2147597271.jpg?size=626&ext=jpg&ga=GA1.1.2111425044.1704477580&semt=ais" />
          </div>
          <div className="caption">
            <h3>Our Mission</h3>
            <p>We offer Training cum Internship program</p>
            <div className="social-links">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
        <div className="profile-card">
          <div className="img">
          <img src="https://img.freepik.com/free-vector/goal-achievement-flat-isometric_126523-1877.jpg?size=626&ext=jpg&ga=GA1.1.2111425044.1704477580&semt=ais" />
          </div>
          <div className="caption">
            <h3>Our Goal</h3>
            <p>achieve your dream</p>
            <div className="social-links">
              <a href="#">
                <FaFacebookSquare />
              </a>
              <a href="#">
                <FaInstagramSquare />
              </a>
              <a href="#">
                <FaTwitterSquare />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vision;
