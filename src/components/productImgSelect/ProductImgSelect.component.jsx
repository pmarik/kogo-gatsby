import React from 'react';

const ProductImgSelect = () => {
    return(
        <button
            style={{
            cursor: "pointer",
            border: "1px solid gray",
            borderRadius: '5px',
            padding: 1,
            "&:focus": {
                outline: "none",
                borderColor: "black",
            },
            }}
            onClick={() => {setListStyle(index); setColor(color)}}
        >
            <Img className="other-img other-img-1" fluid={selectCore1.childImageSharp.fluid} />
        </button>
    )         
}

export default ProductImgSelect