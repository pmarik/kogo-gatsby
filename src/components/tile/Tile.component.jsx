import React from 'react';
import PropTypes from "prop-types"
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link, navigate} from "gatsby"
import './tile.styles.scss';

const Tile = ({ title, slug, image, priceRange, variants, imgText }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "placeholder/shoe.png" }) {
        childImageSharp {
          fluid(maxWidth: 580, quality: 80) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  

  const minPrice = Number(priceRange.minVariantPrice.amount);
  const maxPrice = Number(priceRange.maxVariantPrice.amount);

  //let onSale = false;
  //let regularPrice = null;

  /** Uncommment if including compareAtPrice in query */
  // for(let i = 0; i < variants.length; i++){
  //   if (variants[i].compareAtPrice > maxPrice){
  //     onSale = true;
  //     regularPrice = variants[i].compareAtPrice;
  //     break;
  //   }
  // }

  const handleKeyUp = (ev) => {
    //check key is 'enter'
    if (ev.key === 'Enter'){
      navigate(`/shop/${slug}/`);
    }
  }

  const imageSrc = image ? image : data.placeholderImage.childImageSharp.fluid

  return (
    <div className="card"> 
      <div className="product-preview-img">
        <div role="button" className="product-img-wrap" aria-label="View Product" tabindex="0" onClick={() => (navigate(`/shop/${slug}/`))} onKeyUp={handleKeyUp} title='View Product'>
          <Img fluid={imageSrc} placeholderStyle={{ visibility: "hidden" }} />
        </div>
        <div className="product-title-preview">
          <h2><Link to={`/shop/${slug}/`} className="fira-bold" style={{lineHeight: '1.5'}}>{title}</Link></h2>
        </div>
      </div>

      
      <div className="tile-view-price">
        <div>
          {/* {
            onSale && (<p style={{textDecoration: 'line-through'}}>${regularPrice}</p>)
          } */}
          {
            minPrice === maxPrice ? (
            <p>${maxPrice.toFixed(2)}</p>
            ) : (
            <p>${minPrice} - ${maxPrice}</p>
          )}
        </div>
        
        <Link to={`/shop/${slug}/`} style={{textDecoration: 'underline', color: '#FB604E'}} className="accent">View</Link>
      </div>
    </div>
  )
}

Tile.propTypes = {
  title: PropTypes.string,
  slug: PropTypes.string,
}

Tile.defaultProps = {
  title: "Applecore",
}

export default Tile
