import "./Universe.css";

export default function Universe() {
    return (
        <div className="container">
            <div className="row mt-3 p-5 text-center">
                <h1>The Zerodha Universe</h1>
                <p className="text-muted mt-3 universe-p">Extend your trading and investment experience even further with our partner platforms</p>
                <div className="col-4 universe-col-one">
                    <img src="media/images/zerodhaFundhouse.png" alt="zerodha fund image"  className="universe-img-one"/>
                    <p className="universe-p-one">Our asset management venture<br/>that is creating simple and transparent index<br/>funds to help you save for your goals.</p>
                </div>
                <div className="col-4 universe-col-two">
                    <img src="media/images/sensibullLogo.svg" alt="sensibullLogo image"  className="universe-img-two"/>
                    <p className="universe-p-two">Options trading platform that lets you<br/>create strategies, analyze positions, and examine <br/>data points like open interest, FII/DII, and more.</p>
                </div>
                <div className="col-4 universe-col-three">
                    <img src="media/images/tijori.svg" alt="tijori image"  className="universe-img-three"/>
                    <p className="universe-p-three">Investment research platform<br/>that offers detailed insights on stocks,<br/>sectors, supply chains, and more.</p>
                </div>

            </div>

            <div className="row p-5 text-center universe-row">
                <div className="col-4 universe-col-four">
                    <img src="media/images/streakLogo.png" alt="streakLogo image"  className="universe-img-four"/>
                    <p className="universe-p-four">Systematic trading platform<br/>that allow you to create backtest<br/>strategies without coding.</p>
                </div>
                <div className="col-4 universe-col-five">
                    <img src="media/images/smallcaseLogo.png" alt="smallcaseLogo image"  className="universe-img-five"/>
                    <p className="universe-p-five">Themetic investing placform<br/>that help you to invest in diversified<br/>backets of stocks on ETFs.</p>
                </div>
                <div className="col-4 universe-col-six">
                    <img src="media/images/dittoLogo.png" alt="dittoLogo image"  className="universe-img-six"/>
                    <p className="universe-p-six">Personalized advice on life<br/>and health insurence. No spam,<br/>and no mis-selling.</p>
                </div>

            </div>
            <button className='Hero'>Signup for free</button>
        </div>
    )
}