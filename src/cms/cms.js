import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import AboutPagePreview from './preview-templates/AboutPagePreview'
import ShopPagePreview from './preview-templates/ShopPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'
import WholesalePagePreview from './preview-templates/WholesalePagePreview'
import ShippingPolicyPreview from './preview-templates/ShippingPolicyPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('shop', ShopPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('wholesale', WholesalePagePreview)
CMS.registerPreviewTemplate('shipping-policy', ShippingPolicyPreview)

