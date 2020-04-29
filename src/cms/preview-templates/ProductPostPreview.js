import React from 'react'
import PropTypes from 'prop-types'
import { ProductTemplate } from '../../templates/product-post'

const ProductPreview = ({ entry, widgetFor, getAsset }) => {
  const tags = entry.getIn(['data', 'tags'])

  const entryBlurbs = entry.getIn(['data', 'intro', 'blurbs'])
  const blurbs = entryBlurbs ? entryBlurbs.toJS() : []

  const entryImages = entry.getIn(['data', 'images'])
  const images = entryImages ? entryImages.toJS() : []

  const entryTestimonials = entry.getIn(['data', 'testimonials'])
  const testimonials = entryTestimonials ? entryTestimonials.toJS() : []

  const entryPricingPlans = entry.getIn(['data', 'pricing', 'options'])
  const pricingPlans = entryPricingPlans ? entryPricingPlans.toJS() : []

  return (
    <ProductTemplate
      content={widgetFor('body') || 'Body Content'}
      description={entry.getIn(['data', 'description']) || 'Product Description'}
      tags={tags ? tags.toJS() : 'Product Tags'}
      title={entry.getIn(['data', 'title']) || 'Product Title'}
      availability={{
        available: entry.getIn(['data', 'availability', 'available']) || false,
        unavailableText: entry.getIn(['data', 'availability', 'unavailableText']) || "Unavailable Text (ex: 'Coming Soon')"
      }}
      main={{
        heading: entry.getIn(['data', 'main', 'heading']) || "Main Heading",
        description: entry.getIn(['data', 'main', 'description']) || "Additional Description",
        image1: {
          image: getAsset(entry.getIn(['data', 'main', 'image1', 'image'])) || null,
          alt: entry.getIn(['data', 'main', 'image1', 'alt']) || 'unavailable',
        },
        image2: {
          image: getAsset(entry.getIn(['data', 'main', 'image2', 'image'])) || null,
          alt: entry.getIn(['data', 'main', 'image2', 'alt']) || 'unavailable',
        },
        image3: {
          image: getAsset(entry.getIn(['data', 'main', 'image3', 'image'])) || null,
          alt: entry.getIn(['data', 'main', 'image3', 'alt']) || 'unavailable',
        },
      }}
      fullImage={entry.getIn(['data', 'full_image']) || null}
      testimonials={testimonials || 'testimonial space'}
      pricing={{
        heading: entry.getIn(['data', 'pricing', 'heading']) || "Pricing Heading (ex: 'Select Size')",
        description: entry.getIn(['data', 'pricing', 'description']) || "Product Pricing Description",
        options: pricingPlans || null,
      }}
      images={images || []}
      blurbs={blurbs || []}
    />
  )
}

ProductPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
  getAsset: PropTypes.func,
}

export default ProductPreview
