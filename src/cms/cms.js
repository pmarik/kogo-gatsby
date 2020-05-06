import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'
import { Widget as IdWidget } from '@ncwidgets/id';

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import PrivacyPolicyPreview from './preview-templates/PrivacyPolicyPreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'
import ProductPostPreview from './preview-templates/ProductPostPreview';
import TermsPreview from './preview-templates/TermsPreview';

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerWidget(IdWidget);

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('privacy-policy', PrivacyPolicyPreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
CMS.registerPreviewTemplate('products', ProductPostPreview)
CMS.registerPreviewTemplate('terms-of-service', TermsPreview)

