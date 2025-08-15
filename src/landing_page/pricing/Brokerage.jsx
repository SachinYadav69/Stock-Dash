import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-8 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage Calculator</h3>
          </a>
          <ul
            className="text-muted"
            style={{ textAlign: "left", lineHeight: "2.5", fontSize: "13px" }}
          >
            <li>
              Call trade and RMS auto-squareoff : Adiitional charges of Rs50 +
              GST per order.
            </li>
            <li>Digital contracts notes will be sent to your email.</li>
            <li>
              Physical copies of contracts notes, if required shall be charges
              Rs20 per contract notes.
            </li>
            <li>
              For NRI account(non-PSI), 0.5% or Rs100 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              If the account in debit balance, any order placed will be charged
              for Rs40 per order.
            </li>
          </ul>
        </div>

        <div className="col-4 p-4">
          <a href="" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
