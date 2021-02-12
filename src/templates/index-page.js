import React from 'react'
import { graphql, Link } from "gatsby"
import SEO from '../components/Seo.component'
import Layout from '../components/layout/Layout.component'
// import { InView } from 'react-intersection-observer';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import SocialImgs from '../components/socialImgs/SocialImgs.component';
import SectionIcons from '../components/sectionIcons/SectionIcons.component';
import CoffeeStem from '../components/SVGstems/CoffeeStem'
import BlogRoll from '../components/BlogRoll/BlogRoll'
import './index-page.styles.scss';

export const IndexPageTemplate = ({
    heroImage,
    kogobanner,
    heading,
    subheading,
    mainpitch,
    mainpitchdesc,
    mainpitchImage,
    socialImg1,
    socialImg2,
    socialImg3,
    socialImg4,
}) => {


  // Data to be passed to the SocialImg component
  const socialText = (<p>Tag us in your photos using <a href="https://www.instagram.com/explore/tags/kogo/" className="accent" target="_blank" rel="noreferrer">#kogo</a> to be featured</p>);
  const socialData = [
    { 
      socialImg: socialImg1,
      alt: `Kogo Instagram picture 1`,
      link: `https://www.instagram.com/p/CLJykrrnV-m/`
    },
    {
      socialImg: socialImg2,
      alt: `Kogo Instagram picture 2`,
      link: 'https://www.instagram.com/p/CK_tkd9nfWg/'
    },
    {
      socialImg: socialImg3,
      alt: `Kogo Instagram picture 3`,
      link: `https://www.instagram.com/p/CK6SzgOHKeM/`
    },
    {
      socialImg: socialImg4,
      alt: `Kogo Instagram picture 4`,
      link: `https://www.instagram.com/p/CKgid5oHUpr/`
    }
  ];

    return(
        <div>
            <SEO 
              title="Home"
              url="https://www.kogofoods.com/"
            />
            
            <section className="top-banner-grid">
              <div className="landing-heading" >
                <h1>{heading}</h1>
              </div>

              <div className="top-banner-image">
                <PreviewCompatibleImage 
                    imageInfo={{
                        image: heroImage,
                        alt: "Kogo Coffee Cherries",
                      }}
                />
              </div>


              <div className="landing-subheading" >
                  <p>{subheading}</p>
              </div>

              <button className="landing-btn" style={{zIndex: '10'}}>
                <Link to="/shop/kogo-coffee-cherries">
                  Power Up Now
                </Link>
              </button>

              <CoffeeStem />
            </section>

            <section className="section-home-container">
              <div className="content" style={{overflow: 'hidden'}}>
                <div className="mid-section-grid">
              
                      <div className={`content content-1 anim-start-0 fadeInLeft`}>
                          <div className="tile">
                            <h2 className="title" style={{position: 'relative', zIndex: '10'}}>{mainpitch}</h2>
                          </div>
                          <div className="tile">
                            <p className="subtitle">{mainpitchdesc}</p>
                          </div>
                      </div>
                   

                        <div className="mid-section-img">
                          <PreviewCompatibleImage imageInfo={mainpitchImage} />
                        </div>
                    

                  <div className="content content-2">
                            <div className={`anim-start-0 fadeInLeft`}>
                              <div className="tile">
                                <h2 className="title">Healthy and Sustainable</h2>
                              </div>
                              <div className="tile">
                                <p className="subtitle">We offer a small, but carefully curated selection of ground coffee cherries that are up-cycled to improve the environment. Harness the power of brain-derived neurotrophic factor with KOGO and fall in love with its effects.</p>
                              </div>
                            </div>

                      <div className="btn-about-home">
                      <button >
                        <Link to="/about">
                          About Kogo
                        </Link>
                      </button>
                      </div>
                    
                  </div>
              </div>
                  
              <div className="blog-preview-list">
                  <h3 className="blog-roll-title">
                    Latest stories
                  </h3>
                  <BlogRoll />
                  <div className="blog-link">
                    <Link className="btn" to="/blog">
                      Read more from the blog
                    </Link>
                  </div>
              </div>

          </div>               
        </section>


            <SectionIcons />

            <div className="about-img" style={{marginTop: 'calc(2rem + 10%)'}}>
        <PreviewCompatibleImage 
                                imageInfo={{
                                    image: kogobanner,
                                    alt: "kogo coffee cherries",
                                }}
                            />

          <h3 style={{marginTop: '2rem', textAlign: 'center'}}>Reduce Waste</h3>
          <p style={{margin: '1rem auto', maxWidth: '85ch', textAlign: 'center'}}>Over 20 million tons of coffee fruit waste is generated each year. If the coffee cherries are left to rot in the fields they can generate more than 15 million tons of CO2e (carbon dioxide equivalent). In addition, there is potential for the coffee fruit to leach dangerous mycotoxins into water ways and the soil.  <span style={{fontWeight: 'bold'}} className="accent">Upcycling the coffee fruit reduces this impact and improves the environment in a sustainable way.</span></p>
        </div>


            <SocialImgs
              socialText={socialText}
              socialData={socialData}
            />

        </div>
    )
}

const IndexPage = ({ data }) => {
    const { allShopifyProduct: { nodes: products } } = data
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                title={frontmatter.title}
                heroImage={frontmatter.heroImage}
               kogobanner={frontmatter.kogobanner}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                mainpitchdesc={frontmatter.mainpitchdesc}
                mainpitchImage={frontmatter.mainpitchImage}
                socialImg1={frontmatter.socialImg1}
                socialImg2={frontmatter.socialImg2}
                socialImg3={frontmatter.socialImg3}
                socialImg4={frontmatter.socialImg4}
            />
        </Layout>
    )
}

export default IndexPage

export const IndexPageQuery = graphql`
  query homeQuery {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
        frontmatter{
            title
            heroImage {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            kogobanner {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 75) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            heading
            subheading
            mainpitch
            mainpitchdesc
            mainpitchImage {
              childImageSharp {
                fluid(maxWidth: 1000, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            socialImg1 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            socialImg2 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            socialImg3 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            socialImg4 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
        }
    }
    allShopifyProduct(sort: {fields: id}) {
      nodes {
        title
        handle
      }
    }
  }
`

/** replace below variants query to include 'compareAtPrice' if added discount to show on site */
// variants {
//   compareAtPrice
//   price
//   selectedOptions {
//     name
//     value
//   }
// }


/** add below query 'handle' */
// images {
//   localFile {
//     childImageSharp {
//       fluid(maxWidth: 290) {
//         ...GatsbyImageSharpFluid_noBase64
//       }
//     }
//   }
// }
// variants {
//   price
//   selectedOptions {
//     name
//     value
//   }
// }
// priceRange {
//   maxVariantPrice {
//     amount
//     currencyCode
//   }
//   minVariantPrice {
//     amount
//     currencyCode
//   }
// }