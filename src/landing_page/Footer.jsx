import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="border-top" style={{backgroundColor: "#fbfbfb"}}>
    <div className="container ">
      <div className="row">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Footer Logo"
            className="footer-logo"
          />
          <p className="text-muted mt-4 footer-Ltd">
            &copy; 2010 - 2024, Zerodha Broking Ltd.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className="col">
          <p className="f-company">Company</p>
          <a href="" className="text-muted footer-a">
            About
          </a>
          <br className="mb-3" />
          <a href="" className="text-muted footer-a">
            Products
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Pricing
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Referral programme
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Careers
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Zerodha.tech
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Press & media
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Zerodha Cares (CSR)
          </a>
        </div>
        <div className="col">
          <p className="f-company">Support</p>
          <a href="" className="text-muted footer-a">
            Contact us
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Support portal
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Z-Connect blog
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            List of charges
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Downloads & resources
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Videos
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Market overview
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            How to file a complaint?
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Status of your complaints
          </a>
        </div>
        <div className="col">
          <p className="f-company">Account</p>
          <a href="" className="text-muted footer-a">
            Open an Account
          </a>
          <br />
          <a href="" className="text-muted footer-a">
            Found tranfer
          </a>
        </div>
      </div>
      <p className="footer-desc text-muted mt-5">
        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through
        Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration
        no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
        4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
        Phase, Bengaluru - 560078, Karnataka, India. For any complaints
        pertaining to securities broking please write to{" "}
        <b>complaints@zerodha.com</b>, for DP related to <b>dp@zerodha.com</b>.
        Please ensure you carefully read the Risk Disclosure Document as
        prescribed by SEBI | ICF
      </p>
      <p className="text-muted mt-2 footer-desc">
        Procedure to file a complaint on <b>SEBI SCORES</b>: Register on SCORES
        portal. Mandatory details for filing complaints on SCORES: Name, PAN,
        Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
        Speedy redressal of the grievances
      </p>
      <p className="text-muted mt-2 footer-desc">
        <b>Smart Online Dispute Resolution | Grievances Redressal Mechanism</b>
      </p>
      <p className="text-muted mt-2 footer-desc">
        Investments in securities market are subject to market risks; read all
        the related documents carefully before investing.
      </p>
      <p className="text-muted mt-2 footer-desc">
        Attention investors: 1) Stock brokers can accept securities as margins
        from clients only by way of pledge in the depository system w.e.f
        September 01, 2020. 2) Update your e-mail and phone number with your
        stock broker / depository participant and receive OTP directly from
        depository on your e-mail and/or mobile number to create pledge. 3)
        Check your securities / MF / bonds in the consolidated account statement
        issued by NSDL/CDSL every month.
      </p>
      <p className="text-muted mt-2 footer-desc">
        "Prevent unauthorised transactions in your account. Update your mobile
        numbers/email IDs with your stock brokers. Receive information of your
        transactions directly from Exchange on your mobile/email at the end of
        the day. Issued in the interest of investors. KYC is one time exercise
        while dealing in securities markets - once KYC is done through a SEBI
        registered intermediary (broker, DP, Mutual Fund etc.), you need not
        undergo the same process again when you approach another intermediary."
        Dear Investor, if you are subscribing to an IPO, there is no need to
        issue a cheque. Please write the Bank account number and sign the IPO
        application form to authorize your bank to make payment in case of
        allotment. In case of non allotment the funds will remain in your bank
        account. As a business we don't give stock tips, and have not authorized
        anyone to trade on behalf of others. If you find anyone claiming to be
        part of Zerodha and offering such services, please <b>create a ticket here</b>.
      </p>
    </div>
    </footer>
  );
}

export default Footer;
