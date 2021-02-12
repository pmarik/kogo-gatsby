/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, title, meta, thumbnailImage, addedKeywords = '', url }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            siteUrl
            keywords
            defaultImage
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const keywords = site.siteMetadata.keywords;
  // const siteUrl = url || site.siteMetadata.siteUrl
  const image = thumbnailImage || site.siteMetadata.defaultImage;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={`${title} | KOGO Coffee Cherries`}
      // titleTemplate={`%s | ${site.siteMetadata.title}`}
      keywords={keywords}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: `${title} | KOGO Coffee Cherries`,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: url
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `keywords`,
          content: `${keywords}, ${addedKeywords}`
        },
        {
          property: `og:image`,
          content: image
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: `${title} | KOGO Coffee Cherries`,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
      >
        {/* <meta property="og:url" content={url} /> */}
      </Helmet>
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

