import React from 'react'
import PropTypes from 'prop-types'
import { ShippingPolicyTemplate } from '../../templates/shipping-policy'

const ShippingPolicyPreview = ({ entry, widgetFor }) => (
  <ShippingPolicyTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

ShippingPolicyPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShippingPolicyPreview
