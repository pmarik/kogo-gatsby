import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PreviewCompatibleImage from '../PreviewCompatibleImage';
import './productImages.styles.scss';

const ProductImages = ({ images }) => {

    const [featuredImg, setFeaturedImg] = useState(images[0]);
    const [checkIndx, setCheckIndx] = useState(0)

    const handleClick = (indx) => {
        setFeaturedImg(images[indx])
        setCheckIndx(indx);
    }

    return (
        <div className="product-images-container">
            <div className="top-img-container">
                <div className="top-img">
                    <PreviewCompatibleImage imageInfo={featuredImg} />
                </div>
            </div>
            <div className="product-image-roll">
                {images.map((item, indx) => (
                    <div key={item.alt} onClick={()=> handleClick(indx)} className={` product-img ${ checkIndx === indx ? "active-product-img" : 'non-active-product-img'}`}>
                        <PreviewCompatibleImage imageInfo={item} />
                    </div>
                ))}
            </div>
        </div>
    )
}

ProductImages.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
            alt: PropTypes.string,
        })
    ),
}

export default ProductImages