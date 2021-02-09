import React from 'react'
import PropTypes from 'prop-types'
import { WholesalePageTemplate } from '../../templates/wholesale-page'

const WholesalePagePreview = ({ entry, widgetFor }) => (
  <WholesalePageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

WholesalePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default WholesalePagePreview
