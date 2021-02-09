import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ imageInfo, className = '', loading = "lazy"}) => {
  const { alt = '', childImageSharp, image } = imageInfo

  //placeholderStyle={{ visibility: "hidden" }}
  
  if (!!image && !!image.childImageSharp) {
    return (
      <Img className={`${className}`} loading={loading} fluid={image.childImageSharp.fluid} alt={alt}/>
    )
  }

  if (!!childImageSharp) {
    return <Img className={`${className}`} loading={loading} fluid={childImageSharp.fluid} alt={alt} />
  }

  if (!!image && typeof image === 'string')
    return <img className={`${className}`} loading={loading} src={image} alt={alt} />

  return null
}

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
    style: PropTypes.object,
  }).isRequired,
}

export default PreviewCompatibleImage
