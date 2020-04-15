import React from 'react'
import PropTypes from 'prop-types'
import { AboutPageTemplate } from '../../templates/about-page'


const AboutPagePreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS();


  return (
  <AboutPageTemplate
    title={data.about_section_1.title}
    storyContent={data.about_section_1.content}
    midImage={data.mid_image}
    title2={data.about_section_2.title}
    missionContent={data.about_section_2.content}
  />
)}

AboutPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default AboutPagePreview
