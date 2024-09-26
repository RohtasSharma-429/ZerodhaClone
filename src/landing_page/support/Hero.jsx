import "./supportHero.css";

export default function Hero() {
    return (
        <div className="container-fluid p-5 support-container-fluid">
            <div className="row support-hero-row">
                <div className="col-6 support-hero-row-col-6">
                    <h4  className="support-hero-h4">Support Portal</h4>
                    <h4 className=" support-hero-h4 mt-5">Search for an answer or browse help topics to create a ticket</h4>
                    <input type="email" className="form-control input-box mt-4"  placeholder="Eg: how do i activate F&O, why is my order getting rejected..."></input>
                    <div className="support-hero-a">
                    <a href="#" className="">Track Account Opening</a>
                    <a href="#" className="">Track segment activation</a>
                    <a href="#" className="">Intraday margins</a>
                    <a href="#" className="">Kite user manual</a>
                    </div>
                </div>
                <div className="col-6 support-hero-row-col-6">
                    <a href="#" className="support-hero-ticket-a">Track tickets</a>
                    <ol className="support-hero-ol">
                        <h4 className="support-hero-small-h4">Featured</h4>
                        <li><a href="#">Surveillance measure on scrips - September 2024</a></li>
                        <li><a href="#">Rights Entitlements listing in September 2024</a></li>
                    </ol>
                </div>
            </div>
        </div>
    )
}