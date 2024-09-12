import React from "react";
import "./Awards.css";

function Awards() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src="media/images/largestBroker.svg" alt="Awards largest broker" />
        </div>
        <div className="col-6 mt-4 ">
          <h1 className="awards-h1 mb-3">Largest stock broker in India</h1>
          <p className="awards-p mb-4">2+ million clients contribute to over 15 of all retail order volumes in India daily by trading and investing in:</p>
          <div className="row ">
            <div className="col ">
              <ul >
                  <li>Futures and Options</li>
                  <li>Commodity derivatives</li>
                  <li>Currency derivatives</li>
              </ul>
            </div>
            <div className="col">
              <ul>
                  <li>Stocks and IPOs</li>
                  <li>Direct Mutual Funds</li>
                  <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="Awards pressLogos" className="Awards-logoimg " />
        </div>
      </div>
    </div>
  );
}

export default Awards;
