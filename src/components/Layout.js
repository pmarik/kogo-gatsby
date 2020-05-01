import React from 'react'
import { Helmet } from 'react-helmet'
import './layout.sass'
import './layout.styles.scss'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import useSiteMetadata from './SiteMetadata'
import favicon from '../img/favicon.ico';
import { withPrefix } from 'gatsby'

const TemplateWrapper = ({ children }) => {
  const { title, description } = useSiteMetadata()
  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`${title}`}</title>
        <meta name="description" content={description} />


        <link 
          rel="icon"
          href={favicon}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix('/')}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix('/')}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link rel="manifest" href={`${withPrefix('/')}assets/site.webmanifest`} />

        <link
          rel="mask-icon"
          href={`${withPrefix('/')}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />

        <meta name="theme-color" content="#fff" />
        <meta name="msapplication-TileColor" content="#00a300"></meta>

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        <meta
          property="og:image"
          content={`${withPrefix('/')}img/og-image.jpg`}
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}

export default TemplateWrapper
