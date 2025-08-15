import React from "react";

const Team = () => {
  return (
    <div className="container">
      <div className="row border-top">
        <div>
          <h1 className="text-center mt-5">People</h1>
        </div>

        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "60%" }}
          />
          <h5 className="mt-4">Nithin kamath</h5>
          <p>Founder,CEO</p>
        </div>

        <div className="col-6 p-5 mt-3">
          <p>
            Nithin bootstraped and founded Zero in 2010 to overcome the hurdles
            he faced during his decade long stint as a trader. Today, Zero has
            changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of SEBI and market Data Advisory Committee. Playing
            basketball is his zen.
          </p>
          <p>Playing basketball in his zen.</p>
          <p>
            Connect on <a href="">Homepage</a> / <a href="">TradingQnA</a> /{" "}
            <a href=""> Twitter</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
