import React from 'react'
import PropTypes from 'prop-types'
import { IndexPageTemplate } from '../../templates/index-page'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <IndexPageTemplate        
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        button_text_1={data.button_text_1}
        mainpitch={{
          title: data.title,
          description: data.description,
          title_2: data.title_2,
          description_2: data.description_2,
          button_text_2: data.button_text_2,
          image1: {
            image: getAsset(entry.getIn(['data', 'mainpitch', 'image1', 'image'])),
            alt: entry.getIn(['data', 'mainpitch', 'image1', 'alt']),
          }
        }}
        bottom_page_content={{
          image1: {
            image: getAsset(entry.getIn(['data', 'bottom_page_content', 'image1', 'image'])),
            alt: entry.getIn(['data', 'bottom_page_content', 'image1', 'alt']),
          },
          heading: data.heading,
          description: data.description
        }}
  
        
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
}

export default IndexPagePreview
 