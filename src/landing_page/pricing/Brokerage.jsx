import { useState } from "react";
import "./pricingBrokerage.css";

export default function Brokerage() {
  let [activeTab, setactiveTab] = useState("Equity");

  let handleTabClick = (tabName) => {
    setactiveTab(tabName);
  };

  return (
    <div className="container">
      <div className="tabs p-5">
        <button
          className={`pricing-broker-btn ${
            activeTab === "Equity" ? "activeTab" : ""
          }`}
          onClick={() => handleTabClick("Equity")}
        >
          Equity
        </button>
        <button
          className={`pricing-broker-btn ${
            activeTab === "Currency" ? "activeTab" : ""
          }`}
          onClick={() => handleTabClick("Currency")}
        >
          Currency
        </button>
        <button
          className={`pricing-broker-btn ${
            activeTab === "Commodity" ? "activeTab" : ""
          }`}
          onClick={() => handleTabClick("Commodity")}
        >
          Commodity
        </button>
      </div>
      <div className="tab-content p-5">
        {activeTab === "Equity" && (
          <div className="pricing-broker-tab-1 table-responsive">
            <table className="table pricing-broker-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Equity delivery</th>
                  <th scope="col">Equity intraday</th>
                  <th scope="col">F&O - Futures</th>
                  <th scope="col">F&O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>
                    0.03% or Rs. 20/executed <br />
                    order whichever is lower
                  </td>
                  <td>
                    0.03% or Rs. 20/executed <br />
                    order whichever is lower
                  </td>
                  <td>Flat Rs. 20 per executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.1% on buy & sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.0125% on the sell side</td>
                  <td>
                    <ul>
                      <li>
                        0.125% of the intrinsic value on <br />
                        options that are bought and <br />
                        exercised
                      </li>
                      <li>
                        0.0625% on sell side (on <br />
                        premium)
                      </li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>
                    NSE: 0.00322%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00322%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00188%
                    <br />
                    BSE: 0
                  </td>
                  <td>
                    NSE: 0.0495% (on premium)
                    <br />
                    BSE: 0.0495% (on premium)
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI <br />
                    charges + transaction <br />
                    charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI <br />
                    charges + transaction <br />
                    charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI <br />
                    charges + transaction <br />
                    charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges <br />+ transaction
                    charges)
                  </td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>
                    0.015% or ₹1500 / crore on <br />
                    buy side
                  </td>
                  <td>
                    0.003% or ₹300 / crore on <br />
                    buy side
                  </td>
                  <td>
                    0.002% or ₹200 / crore on <br />
                    buy side
                  </td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "Currency" && (
          <div className="pricing-broker-tab-1 table-responsive">
            <table className="table pricing-broker-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Currency futures</th>
                  <th scope="col">Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹ 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>
                    NSE:
                    <br />
                    Exchange txn charge: 0.0009% BSC:
                    <br />
                    Exchange txn charge: 0.0009%
                  </td>
                  <td>
                    NSE:
                    <br />
                    Exchange txn charge: 0.0035% BSC:
                    <br />
                    Exchange txn charge: 0.0001%
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        {activeTab === "Commodity" && (
          <div className="pricing-broker-tab-1 table-responsive">
            <table className="table pricing-broker-table">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Commodity futures</th>
                  <th scope="col">Commodity options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>
                    Group A<br />
                    Exchange txn charge: 0.0026%
                    <br />
                    Group B:
                    <br />
                    Exchange txn charge:
                    <br />
                    CASTORSEED - 0.0005%
                    <br />
                    KAPAS - 0.0026%
                    <br />
                    PEPPER - 0.00005%
                    <br />
                    RBDPMOLEIN - 0.001%
                  </td>
                  <td>Exchange txn charge: 0.05%</td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>
                    Agri:
                    <br />
                    ₹1 / crore
                    <br />
                    Non-agri:
                    <br />
                  </td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
        <h4 className="pricing-broker-comp-h4">
          <a href="#">Calculate your costs upfront</a> using our brokerage
          calculator
        </h4>
        <div className="row mt-5">
          <h4>Charges explained</h4>
          <div className="col-6">
            <h6 className="pricing-broker-comp-h6">Securities/Commodities transaction tax</h6>
            <p className="pricing-broker-comp-p">
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&O.
            </p>
            <p className="pricing-broker-comp-p">When trading at Zerodha, STT/CTT can be a lot more than the brokerage we charge. Important to keep a tab.</p>
            <h6 className="pricing-broker-comp-h6">Transaction/Turnover Charges</h6>
            <p className="pricing-broker-comp-p">Charged by exchanges (NSE, BSE, MCX) on the value of your transactions.</p>
            <p className="pricing-broker-comp-p">BSE has revised transaction charges in XC, XD, XT, Z and ZP groups to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been merged into a new group X w.e.f 01.12.2017)</p>
            <p className="pricing-broker-comp-p">BSE has revised transaction charges in SS and ST groups to ₹1,00,000 per crore of gross turnover.</p>
            <p className="pricing-broker-comp-p">BSE has revised transaction charges for group A, B and other non exclusive scrips (non-exclusive scrips from group E, F, FC, G, GC, W, T) at ₹375 per crore of turnover on flat rate basis w.e.f. December 1, 2022.</p>
            <p className="pricing-broker-comp-p">BSE has revised transaction charges in M, MT, TS and MS groups to ₹275 per crore of gross turnover.</p>
            <h6 className="pricing-broker-comp-h6">Call & trade</h6>
            <p className="pricing-broker-comp-p">Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</p>
            <h6 className="pricing-broker-comp-h6">Stamp charges</h6>
            <p className="pricing-broker-comp-p">Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</p>
            <h6 className="pricing-broker-comp-h6">NRI brokerage charges</h6>
            <p className="pricing-broker-comp-p">
              <ul className="pricing-broker-comp-ul">
                <li>₹100 per order for futures and options.</li>
                <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
                <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
                <li>₹500 + GST as yearly account maintenance charges (AMC) charges.</li>
              </ul>
            </p>
            <h6 className="pricing-broker-comp-h6">Account with debit balance</h6>
            <p className="pricing-broker-comp-p">If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</p>
            <h6 className="pricing-broker-comp-h6">Charges for Investor Protection Fund Trust (IPFT) by NSE</h6>
            <p className="pricing-broker-comp-p">
              <ul className="pricing-broker-comp-ul">
                <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
                <li>Options - ₹50 per crore + GST traded value (premium value).</li>
                <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
              </ul>
            </p>
          </div>
          <div className="col-6">
            <h6 className="pricing-broker-comp-h6">GST</h6>
            <p className="pricing-broker-comp-p">
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>
            <h6 className="pricing-broker-comp-h6">SEBI Charges</h6>
            <p className="pricing-broker-comp-p">Charged at ₹10 per crore + GST by Securities and Exchange Board of India for regulating the markets.</p>
            <h6 className="pricing-broker-comp-h6">DP (Depository participant) charges</h6>
            <p className="pricing-broker-comp-p">₹13 + GST per scrip (irrespective of quantity), on the day, is debited from the trading account when stocks are sold. This is charged by the depository (CDSL) and depository participant (Zerodha).</p>
            <p className="pricing-broker-comp-p">Female demat account holders (as first holder) will enjoy a discount of ₹0.25 per transaction.</p>
            <p className="pricing-broker-comp-p">Debit transactions of mutual funds & bonds get an additional discount of ₹0.25.</p>
            <h6 className="pricing-broker-comp-h6">Pledging charges</h6>
            <p className="pricing-broker-comp-p">₹30 + GST per pledge request per ISIN.</p>
            <h6 className="pricing-broker-comp-h6">AMC (Account maintenance charges)</h6>
            <p className="pricing-broker-comp-p">For BSDA demat account: Zero charges if the holding value is less than ₹4,00,000. To learn more about BSDA, <b>Click here</b></p>
            <p className="pricing-broker-comp-p">For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly (90 days). To learn more about AMC, <b>Click here</b></p>
            <h6 className="pricing-broker-comp-h6">Corporate action order charges</h6>
            <p className="pricing-broker-comp-p">₹20 plus GST will be charged for OFS / buyback / takeover / delisting orders placed through Console.</p>
            <h6 className="pricing-broker-comp-h6">Off-market transfer charges</h6>
            <p className="pricing-broker-comp-p">₹25 or 0.03% of the transfer value (whichever is higher).</p>
            <h6 className="pricing-broker-comp-h6">Physical CMR request</h6>
            <p className="pricing-broker-comp-p">First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST for subsequent requests.</p>
            <h6 className="pricing-broker-comp-h6">Payment gateway charges</h6>
            <p className="pricing-broker-comp-p">₹9 + GST (Not levied on transfers done via UPI)</p>
            <h6 className="pricing-broker-comp-h6">Delayed Payment Charges</h6>
            <p className="pricing-broker-comp-p">Interest is levied at 18% a year or 0.05% per day on the debit balance in your trading account. <b>Learn more.</b></p>
          </div>
          <h6 className="pricing-broker-comp-h6">Disclaimer</h6>
          <p className="pricing-broker-comp-des">For Delivery based trades, a minimum of ₹0.01 will be charged per contract note. Clients who opt to receive physical contract notes will be charged ₹20 per contract note plus courier charges. Brokerage will not exceed the rates specified by SEBI and the exchanges. All statutory and regulatory charges will be levied at actuals. Brokerage is also charged on expired, exercised, and assigned options contracts. Free investments are available only for our retail individual clients. Companies, Partnerships, Trusts, and HUFs need to pay 0.1% or ₹20 (whichever is less) as delivery brokerage. A brokerage of 0.25% of the contract value will be charged for contracts where physical delivery happens. For netted off positions in physically settled contracts, a brokerage of 0.1% will be charged.</p>
        </div>

        <div className="pricing-charge-acc-opening">
          <h4>Charges for account opening</h4>
          <div className="pricing-broker-tab-1 mt-3  table-responsive">
            <table className="table pricing-broker-table">
              <thead>
                <tr className="acc-opening">
                  <th scope="col">Type of account</th>
                  <th scope="col">Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="acc-opening">
                  <td>Online account</td>
                  <td><button type="button" className="btn btn-success btn-sm">Free</button>
                  </td>
                </tr>
                <tr className="acc-opening">
                  <td>Offline account</td>
                  <td><button type="button" className="btn btn-success btn-sm">Free</button></td>
                </tr>
                <tr className="acc-opening">
                  <td>NRI account (offline only)</td>
                  <td>₹ 500</td>
                </tr>
                <tr className="acc-opening">
                  <td>Partnership, LLP, HUF, or Corporate accounts (offline only)</td>
                  <td>
                  ₹ 500
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="pricing-charge-acc-opening ">
          <h4>Charges for optional value added services</h4>
          <div className="pricing-broker-tab-1 mt-3  table-responsive">
            <table className="table pricing-broker-table">
              <thead>
                <tr className="acc-opening" >
                  <th scope="col">Service</th>
                  <th scope="col">Billing Frquency</th>
                  <th>Charges</th>
                </tr>
              </thead>
              <tbody>
                <tr className="acc-opening">
                  <td>Tickertape</td>
                  <td>Monthly / Annual</td>
                  <td>Free: 0 | Pro: 249/2399
                  </td>
                </tr>
                <tr className="acc-opening">
                  <td>Smallcase</td>
                  <td>Per transaction</td>
                  <td>Buy & Invest More: 100 | SIP: 10</td>
                </tr>
                <tr className="acc-opening">
                  <td>Kite Connect</td>
                  <td>Monthly</td>
                  <td>Connect: 2000 | Historical: 2000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}
