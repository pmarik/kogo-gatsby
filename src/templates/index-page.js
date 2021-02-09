import React, { useContext } from 'react'
import { graphql, navigate, Link } from "gatsby"
import { GlobalDispatchContext } from '../context/GlobalContextProvider';
import SEO from '../components/Seo.component'
import Layout from '../components/layout/Layout.component'
// import { InView } from 'react-intersection-observer';
import ComparisonSection from '../components/comparisonSection/ComparisonSection.component';
import { ButtonLink } from '../components/buttons/Button.component';
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { CarouselProducts } from '../components/carousel/Carousel.component';
import SocialImgs from '../components/socialImgs/SocialImgs.component';
import SectionIcons from '../components/sectionIcons/SectionIcons.component';
import CoffeeStem from '../components/SVGstems/CoffeeStem'
import './index-page.styles.scss';

export const IndexPageTemplate = ({
    title,
    heroImage,
    backgroundHero,
    heading,
    subheading,
    mainpitch,
    mainpitchdesc,
    mainpitchImage,
    products,
    optionImg1,
    optionImg2,
    optionImg3,
    optionImg4,
    optionImg5,
    collectionImg_1_1,
    collectionImg_1_2,
    collectionImg_2_1,
    collectionImg_2_2,
    showCase1,
    showCase2,
    showCase3,
    socialImg1,
    socialImg2,
    socialImg3,
    socialImg4,
}) => {

  const dispatch = useContext(GlobalDispatchContext);

  // Handle corresponding selection from option picker to navigate to correct variant on product page
  async function handleColorSelect(color, location){
    await dispatch({
      type: 'COLOR_SELECT',
      payload: color
    })
    navigate(`${location}`);
  }
 
  async function inlineHandleColorSelect(color){
    await dispatch({
      type: 'COLOR_SELECT',
      payload: color
    })
  }

  async function handleKeyUp(ev, color, location){
    if(ev.key === 'Enter'){
      await dispatch({
        type: 'COLOR_SELECT',
        payload: color
      })
      navigate(`${location}`);
    }
  }

  async function handleKeyUpInline(ev, color){
    if(ev.key === 'Enter'){
      await dispatch({
        type: 'COLOR_SELECT',
        payload: color
      })
    }
  }


  // Data to be passed to the OptionPicker component
  const optionsData = [
    {img: optionImg5, color: 'Red Delicious', alt: 'Red Delicious Applecore 3 Pack'},
    {img: optionImg2, color: 'Black Jazz', alt: 'Black Jazz Applecore 3 Pack'}, 
    {img: optionImg1, color: 'Granny Smith', alt: 'Granny Smith Applecore 3 Pack'}, 
    {img: optionImg4, color: 'Fuji White', alt: 'Fuji White Applecore 3 Pack'}, 
    {img: optionImg3, color: 'Blue Pearmain', alt: 'Blue Pearmain Applecore 3 Pack'}, 
  ]


  // Data to be passed to the SocialImg component
  const socialHeader = `Show us your Applecores`;
  const socialText = (<p>Tag us in your photos using <a href="https://www.instagram.com/explore/tags/applecore/" className="accent" target="_blank" rel="noreferrer">#applecore</a> and <a href="https://www.instagram.com/explore/tags/nomoretangles/" className="accent" target="_blank" rel="noreferrer">#nomoretangles</a> to be featured</p>);
  const socialData = [
    { 
      socialImg: socialImg1,
      alt: `Applecore Instagram picture 1`,
      link: `https://www.instagram.com/p/CJY2PlZMEMn/`
    },
    {
      socialImg: socialImg2,
      alt: `Applecore Instagram picture 2`,
      link: `https://www.instagram.com/p/CIybZpFsgG7/`
    },
    {
      socialImg: socialImg3,
      alt: `Applecore Instagram picture 3`,
      link: `https://www.instagram.com/p/CIyZNc4skqx/`
    },
    {
      socialImg: socialImg4,
      alt: `Applecore Instagram picture 4`,
      link: `https://www.instagram.com/p/CIwyyTxMbmV/`
    }
  ];

    return(
        <div>
            <SEO 
              title="Home"
              url="https://www.myapplecore.com/"
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
                  <h3>{subheading}</h3>
              </div>

              <button className="landing-btn" style={{zIndex: '10'}}>
                <Link to="/shop/">
                  Power Up Now
                </Link>
              </button>

              <CoffeeStem />
            </section>

            <section className="section-home-container">
              <div className="content">
                <div className="mid-section-grid">
              
                      <div className={`content content-1 anim-start-0 fadeInLeft`}>
                          <div className="tile">
                            <h2 className="title">{mainpitch}</h2>
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

                      <button>
                        <Link to="/about">
                          About Kogo
                        </Link>
                      </button>
                  </div>
              </div>
                  
              <div className="blog-preview-list">
                  <h3 className="blog-roll-title">
                    Latest stories
                  </h3>
                  {/* <BlogRoll /> */}
                  <div className="blog-link">
                    <Link className="btn" to="/blog">
                      Read more from the blog
                    </Link>
                  </div>
              </div>

              {/* <section className="bottom-content">
                  <div className="bottom-section-img">
                        <h2 className="bottom-section-header">{bottom_page_content.heading}</h2>
                        <PreviewCompatibleImage  
                          imageInfo={{
                            image: bottom_page_content.image1.image,
                            alt: bottom_page_content.image1.alt,
                          }}
                        />
                  </div>

                  <div className="bottom-section-description">
                    <p>{bottom_page_content.description}</p>
                  </div>

              </section> */}

          </div>               
        </section>


            <SectionIcons />

            <section className={`section-container section-quotes`}>
                  <q className="home-quote"><span>My cords are now manageable!</span><br/> It's like a whole new world underneath my desk.  I could find all kinds of uses for these such as lamps, kitchen appliances, radios, and TVs” - Nancy</q>
                  <q className="home-quote" style={{marginTop: '8%'}}><span>I love my Applecore!</span><br/>We use them for headphones, phone cords, computer mouse and keyboard cords, and appliances in the kitchen. My kitchen counter is so tidy and I don't have to constantly try to shove the cord behind an appliance” - Akedy</q>
            </section>

            <SocialImgs
              socialHeader={socialHeader}
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
                products={products}
                title={frontmatter.title}
                heroImage={frontmatter.heroImage}
                backgroundHero={frontmatter.backgroundHero}
                heading={frontmatter.heading}
                subheading={frontmatter.subheading}
                mainpitch={frontmatter.mainpitch}
                mainpitchdesc={frontmatter.mainpitchdesc}
                mainpitchImage={frontmatter.mainpitchImage}
                optionImg2={frontmatter.optionImg2}
                optionImg3={frontmatter.optionImg3}
                optionImg4={frontmatter.optionImg4}
                optionImg5={frontmatter.optionImg5}
                collectionImg_1_1={frontmatter.collectionImg_1_1}
                collectionImg_1_2={frontmatter.collectionImg_1_2}
                collectionImg_2_1={frontmatter.collectionImg_2_1}
                collectionImg_2_2={frontmatter.collectionImg_2_2}
                showCase1={frontmatter.showCase1}
                showCase2={frontmatter.showCase2}
                showCase3={frontmatter.showCase3}
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
            backgroundHero {
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
            optionImg2 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            optionImg3 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            optionImg4 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            optionImg5 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            collectionImg_1_1 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            collectionImg_1_2 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            collectionImg_2_1 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            collectionImg_2_2 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            showCase1 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            showCase2 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            showCase3 {
              childImageSharp {
                fluid(maxWidth: 850, quality: 75) {
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