import "./pricingHero.css";

export default function Hero() {
  return (
    <div className="container">
      <h1 className="text-center mt-4 pricing-hero-h1">Charges</h1>
      <h5 className="text-center text-muted mt-4">
        List of all charges and taxes
      </h5>

      <div className="row pricing-hero-row">
        <div className="col-4 pricing-comp-hero-col-4">
          <img src="media/images/pricing0.svg" alt="Pricing Zero Image"  className="pricing-hero-img"/>
          <h2 className="text-center pricing-hero-h2">Free equity delivery</h2>
          <p className="text-center text-muted mt-4">
            All equity delivery investments (NSE, BSE), <br />
            are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/other-trades.svg" alt="Pricing Zero Image" className="pricing-hero-img"/>
          <h2 className="text-center pricing-hero-h2">
            Intraday and F&O trades
          </h2>
          <p className="text-center text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) <br />
            per executed order on intraday trades <br />
            across equity, currency, and commodity <br />
            trades. Flat ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
          <img src="media/images/pricing0.svg" alt="Pricing Zero Image" className="pricing-hero-img"/>
          <h2 className="text-center pricing-hero-h2">Free direct MF</h2>
          <p className="text-center text-muted mt-4">
            All direct mutual fund investments are <br />
            absolutely free — ₹ 0 commissions & DP <br />
            charges.
          </p>
        </div>
      </div>
    </div>
  );
}
