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
        // mainpitch={data.mainpitch || {}}
        mainpitch={{
          title: data.getIn(['data', 'mainpitch', 'title']),
          description: data.getIn(['data', 'mainpitch', 'description']),
          title_2: data.getIn(['data', 'mainpitch', 'title_2']),
          description_2: data.getIn(['data', 'mainpitch', 'description_2']),
          button_text: data.getIn(['data', 'mainpitch', 'button_text']),
          image1: {
            image: getAsset(entry.getIn(['data', 'mainpitch', 'image1', 'image'])),
            alt: entry.getIn(['data', 'mainpitch', 'image1', 'alt']),
          }
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
 