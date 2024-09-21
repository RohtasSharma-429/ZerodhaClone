import PropTypes from 'prop-types';
import "./LeftSection.css";

export default function LeftSection({
  productImg,
  productName,
  productDes,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row mt-4 product-left-row">
        <div className="col-7">
          <img src={productImg} alt="Product left section img" className='product-left-img'/>
        </div>
        <div className="col-5 product-col-5">
          <h1 className='mb-4 product-left-h1'>{productName}</h1>
          <p className='text-muted product-des'>{productDes}</p>
          <div className='product-a'>
            <a href="#" style={{marginRight: "4rem"}}>{tryDemo} </a>
            <a href="#">{learnMore}</a>
          </div>
          <div>
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play Badge"
                style={{marginRight: "2rem"}}
              />
            </a>
            <a href={appStore}>
              <img
                src="media/images/appstoreBadge.svg"
                alt="Google Play Badge"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
LeftSection.propTypes = {
    productImg: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDes: PropTypes.string,
    tryDemo: PropTypes.string,
    learnMore: PropTypes.string,
    googlePlay: PropTypes.string,
    appStore: PropTypes.string,
};