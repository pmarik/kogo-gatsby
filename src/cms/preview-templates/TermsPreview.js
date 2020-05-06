import React from 'react'
import PropTypes from 'prop-types'
import { TermsTemplate } from '../../templates/terms-page'


const TermsPreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS();

  return (
  <TermsTemplate
    title={data.title}
    content={widgetFor('body')}

  />
)}

TermsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TermsPreview
