import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row text-center mt-5 border-bottom">
        <h1>Technology</h1>
        <h6 className="mt-3 text-muted">
          Sleek, modern, and intutive trading platforms
        </h6>
        <p className="mt-1 text-muted mb-5">
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offering <i class="fa-solid fa-arrow-right"></i>
          </a>
        </p>
      </div>
    </div>
  );
};

export default Hero;
