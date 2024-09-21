import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        productImg={"media/images/kite.png"}
        productName={"Kite"}
        productDes={
          "Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        }
        tryDemo={
          <>
            <span>Try demo</span>{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </>
        }
        learnMore={
          <>
            <span>Learn more</span>{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </>
        }
        googlePlay=""
        appStore=""
      />
      <RightSection
        productImg={"media/images/console.png"}
        productName={"Console"}
        productDes={
          "The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        }
        learnMore={
          <>
            <span>Learn more</span>{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </>
        }
      />
      <LeftSection
        productImg={"media/images/coin.png"}
        productName={"Coin"}
        productDes={
          "Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        }
        tryDemo={
          <>
            <span>Coin</span> <i className="fa-solid fa-arrow-right-long"></i>
          </>
        }
        // learnMore=""
        googlePlay=""
        appStore=""
      />
      <RightSection
        productImg={"media/images/kiteconnect.png"}
        productName={"Kite Connect API"}
        productDes={
          "Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        }
        learnMore={
          <>
            <span>Kite Connect</span>{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </>
        }
      />
      <LeftSection
        productImg={"media/images/varsity.png"}
        productName={"Varsity mobile"}
        productDes={
          "An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        }
        // tryDemo={""}
        // learnMore=""
        googlePlay=""
        appStore=""
      />
      <h5 className="mt-4 text-center" style={{fontWeight: "400"}}>
        Want to know more about our technology stack? Check out the{" "}
        <a href="#" style={{ textDecoration: "none", }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </h5>
      <Universe />
    </>
  );
}
