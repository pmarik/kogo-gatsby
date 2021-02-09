import React from 'react';
import Img from "gatsby-image"

export const Thumbnail = ({ src, onClick, className }) => {
  return (
    <button
      className={className}
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
      onClick={onClick}
    >
      <Img fluid={src.localFile.childImageSharp.fluid} />
    </button>
  )
}
