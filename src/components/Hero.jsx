import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 text-center">
            {/* React Logo */}
            <div className="hero-logo mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="-11.5 -10.23174 23 20.46348"
                className="react-logo"
              >
                <circle cx="0" cy="0" r="2.05" fill="#61dafb" />
                <g stroke="#61dafb" strokeWidth="1" fill="none">
                  <ellipse rx="11" ry="4.2" />
                  <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                  <ellipse rx="11" ry="4.2" transform="rotate(120)" />
                </g>
              </svg>
            </div>

            {/* Main Heading */}
            <h1 className="hero-title mb-3">React</h1>

            {/* Subtitle */}
            <p className="hero-subtitle mb-5">
              The library for web and native user interfaces
            </p>

            {/* CTA Buttons */}
            <div className="hero-buttons d-flex justify-content-center gap-3 flex-wrap">
              <button className="btn btn-primary btn-lg hero-btn-primary">
                Learn React
              </button>
              <button className="btn btn-outline-light btn-lg hero-btn-secondary">
                API Reference
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;