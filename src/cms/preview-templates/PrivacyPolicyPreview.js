import React from 'react'
import PropTypes from 'prop-types'
import { PrivacyPolicyTemplate } from '../../templates/privacy-page'


const PrivacyPolicyPreview = ({ entry, widgetFor }) => {

  const data = entry.getIn(['data']).toJS();

  return (
  <PrivacyPolicyTemplate
    title={data.title}
    content={widgetFor('body')}

  />
)}

PrivacyPolicyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default PrivacyPolicyPreview
