import PropTypes from 'prop-types';
import "./RightSection.css"

export default function RightSection({
    productImg,
    productName,
    productDes,
    learnMore,

}) {
    return (
        <div className="container">
            <div className="row p-5">
                <div className="col-4 product-right-col-4">
                    <h1 className='mb-4'>{productName}</h1>
                    <p className='text-muted'>{productDes}</p>
                    <a href="" style={{textDecoration: "none"}}>{learnMore}</a>
                </div>
                <div className="col-1"></div>
                <div className="col-7">
                <img src={productImg} alt="Right Section image"  className='product-right-img' />
                </div>
            </div>
        </div>
    )
}

RightSection.propTypes = {
    productImg: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    productDes: PropTypes.string,
    learnMore: PropTypes.string,
};