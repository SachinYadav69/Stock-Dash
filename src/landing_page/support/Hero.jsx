import React from "react";

function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-3" id="supportWrapper">
        <h5>Support Panel</h5>
        <a href="">Track Ticket</a>
      </div>

      <div className="row p-5 mx-5">
        <div className="col-6 p-3">
          <h1 className="fs-3">
            Search for an answer or browser helps topics <br /> to create a
            ticket
          </h1>
          <input
            type="text"
            placeholder="eg. hardover activites and trades"
            className="mt-3"
          />{" "}
          <br />
          <div className="mt-4">
            <a href="">Track account openings</a>
            <a href="" className="mx-3">
              Track segment activations
            </a>
            <a href="" className="mx-3">
              Intraday margins
            </a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        <div className="col-2"></div>

        <div className="col-4 p-5">
          <h3 className="fs-3">Featured</h3>
          <ol>
            <li>
              <a href="">Track account openings</a>
              <br />
            </li>
            <li>
              <a href="">Track segment activations</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
