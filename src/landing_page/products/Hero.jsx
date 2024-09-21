import "./Hero.css";

export default function Hero() {
    return (
        <div className="container border-bottom">
            <div className="prod-hero text-center mb-5">
                <h1 className="mb-4 fs-1">Technology</h1>
                <h5 className="text-muted mb-3">Sleek, modern, and intuitive trading platforms</h5>
                <p className="text-muted ">Check out our <a href="#" style={{textDecoration: "none"}}>investment offerings <i className="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
    )
}