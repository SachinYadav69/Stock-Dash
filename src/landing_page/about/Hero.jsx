import React from "react";

const Hero = () => {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-4 text-center">
          We pioneered the discount broking model in India. <br /> Now, we are
          breaking ground with our technology.
        </h1>
      </div>

      <div
        className="row p-5 mt-5 border-top text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.1em" }}
      >
        <div className="col-6 p-5">
          <p>
            We kick start operations on the 15th of August, 2010 with the goal
            of breaking alll barriers that trader and investors face in India in
            terms of cost, support and technology. We named the company Zero, a
            combination of Zero can make you millionaire.{" "}
          </p>
          <p>
            today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>
          <p>
            Over 1+ crore clients places millions of orders every day through
            our powerful ecosystem of investments platforms, contributing over
            15% of all indian retails trading volumes.
          </p>
        </div>

        <div className="col-6 p-5">
          <p>
            In Addition, we run a number of popular open online educational and
            community initiatives to empower retails traders and investors.
          </p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Rainmatter
            </a>
            , our fintech funds and incubator, has invested in several fintech
            startups with the goal of growing the indian capital market. Start
            your journey today, with us and make money.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
