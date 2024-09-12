import React from "react";
import "./Pricing.css";

export default function Pricing() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-4 fs-2">Unbeatable pricing</h1>
          <p>
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="#" className="pricing-a mt-4">
            See Pricing &nbsp;<i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col">
              
              <div className="row">
                <div className="col"><img
                src="media/images/pricing-eq.svg"
                alt="Pricig img"
                className="pricing-img"
              /></div>
                <div className="col pricing-txt">Free Open Account</div>
              </div>


            </div>
            <div className="col">

            <div className="row">
                <div className="col"><img
                src="media/images/pricing-eq2.svg"
                alt="Pricig img"
                className="pricing-img"
              /></div>
                <div className="col pricing-txt">Free equity delivery
                and direct mutual funds</div>
              </div>

            </div>
            <div className="col">

            <div className="row">
                <div className="col"><img
                src="media/images/other-trades.svg"
                alt="Pricig img"
                className="pricing-img"
              /></div>
                <div className="col pricing-txt">Intraday and
                F&O</div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
