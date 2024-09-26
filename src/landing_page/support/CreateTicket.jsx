import "./supportCreateTicket.css";

export default function CreateTicket() {
    return (
        <div className="container support-create-ticket-container">
            <h3 className="support-ticket-h3">To create a ticket, select a relevant topic</h3>
            <div className="row mb-3 support-ticket-small-row">
                <div className="col-4 support-ticket-small-col-4">
                    <h3 className="support-create-ticket-h3"><i className="fa-solid fa-circle-plus support-small-icon"></i>Account Opening</h3>
                    <ul className="support-create-ticket-ul">
                    <li><a href="#">Getting started</a></li>
                    <li><a href="#">Online</a></li>
                    <li><a href="#">Offline</a></li>
                    <li><a href="#">Charges</a></li>
                    <li><a href="#">Company, Partnership and HUF</a></li>
                    <li><a href="#">Non Resident Indian (NRI)</a></li>
                    </ul>
                </div>
                <div className="col-4 support-ticket-small-col-4">
                    <h3 className="support-create-ticket-h3"><i className="fa-solid fa-circle-plus support-small-icon"></i>Your Zerodha Account</h3>
                    <ul className="support-create-ticket-ul">
                    <li><a href="#">Login credentials</a></li>
                    <li><a href="#">Your Profile</a></li>
                    <li><a href="#">Account modification and segment addition</a></li>
                    <li><a href="#">CMR & DP ID</a></li>
                    <li><a href="#">Nomination</a></li>
                    <li><a href="#">Transfer and conversion of shares</a></li>
                    </ul>
                </div>
                <div className="col-4 support-ticket-small-col-4">
                    <h3 className="support-create-ticket-h3"><i className="fa-solid fa-circle-plus support-small-icon"></i>Trading and Markets</h3>
                    <ul className="support-create-ticket-ul">
                    <li><a href="#">Trading FAQs</a></li>
                    <li><a href="#">Kite</a></li>
                    <li><a href="#">Margins</a></li>
                    <li><a href="#">Product and order types</a></li>
                    <li><a href="#">Corporate actions</a></li>
                    <li><a href="#">Kite features</a></li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-4">
                    <h3 className="support-create-ticket-h3"><i className="fa-solid fa-circle-plus support-small-icon"></i>Funds</h3>
                    <ul className="support-create-ticket-ul">
                    <li><a href="#">Fund withdrawal</a></li>
                    <li><a href="#">Adding funds</a></li>
                    <li><a href="#">Adding bank accounts</a></li>
                    <li><a href="#">eMandates</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="support-create-ticket-h3"><i className="fa-solid fa-circle-plus support-small-icon"></i>Console</h3>
                    <ul className="support-create-ticket-ul">
                    <li><a href="#">IPO</a></li>
                    <li><a href="#">Portfolio</a></li>
                    <li><a href="#">Funds statement</a></li>
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">Referral program</a></li>
                    </ul>
                </div>
                <div className="col-4">
                    <h3 className="support-create-ticket-h3"><i className="fa-solid fa-circle-plus support-small-icon"></i>Coin</h3>
                    <ul className="support-create-ticket-ul">
                    <li><a href="#">Understanding mutual funds and Coin</a></li>
                    <li><a href="#">Coin app</a></li>
                    <li><a href="#">Coin web</a></li>
                    <li><a href="#">Transactions and reports</a></li>
                    <li><a href="#">National Pension Scheme (NPS)</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}