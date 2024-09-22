// import React from "react";
import "./Stats.css";

export default function Stats() {
  return (
    <div className="container">
      <div className="row home-stats-row">
        <div className="col-6 stats-col-6 home-stats-col-6">
          <h2 className="mb-5">Trust with confidence</h2>
          <h3 className="fs-5">Customer-first always</h3>
          <p className="mb-4 text-muted">
            That&#39;s why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores
            of equity investments and contribute to 15% of daily retail exchange
            volumes in India.
          </p>
          <h3 className="fs-5">No spam or gimmicks</h3>
          <p className="mb-4 text-muted">
            No gimmicks, spam, &quot;gamification&quot;, or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>
          <h3 className="fs-5">The Zerodha universe</h3>
          <p className="mb-4 text-muted">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>
          <h3 className="fs-5">Do better with money</h3>
          <p className="mb-4 text-muted">
            With initiatives like Nudge and Kill Switch, we don&#39;t just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>
        <div className="col-6 home-stats-col-6">
          <img
            src="media/images/ecosystem.png"
            alt="Stats components images"
            className="stats-img"
          />
          <div className="stats-button">
                <a href="#">Explore our products  &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
                <a href="#">Explore our products  &nbsp;<i className="fa-solid fa-arrow-right"></i></a>
          </div>
        </div>
      </div>
      <img className="stats-pressLogo home-stats-img" src="media/images/pressLogos.png" alt="stats press logo" />
    </div>
  );
}
