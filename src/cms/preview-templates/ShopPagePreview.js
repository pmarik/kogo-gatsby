import React from 'react'
import PropTypes from 'prop-types'
import { ShopPageTemplate } from '../../templates/shop-page'

const ShopPagePreview = ({ entry, widgetFor }) => (
  <ShopPageTemplate
    title={entry.getIn(['data', 'title'])}
  />
)

ShopPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default ShopPagePreview
