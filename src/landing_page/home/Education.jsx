// import React from "react";
import "./Education.css";

function Education() {
  return (
    <div className="container">
      <div className="row home-edu-row">
        <div className="col-6 text-center home-edu-col-6">
          <img
            src="media/images/index-education.svg"
            alt="Award Section Image"
          />
        </div>
        <div className="Awards-col col-6 home-edu-col-6">
          <h2 className="Awards-h2">Free and open market education</h2>
          <p className="Awards-para">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="#" className="Awards-link">
            Varsity &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
          <p className="Awards-para">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="#" className="Awards-link">
            TrandingQ&A &nbsp;<i className="fa-solid fa-arrow-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
