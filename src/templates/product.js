import React, { useState, useEffect, useMemo, useContext } from "react"
import Img from "gatsby-image"
import SEO from '../components/Seo.component'
import CartModal from '../components/cartModal/CartModal.component'
import Layout from '../components/layout/Layout.component';
// import { ColorOptionPicker } from "./components/"
import { Thumbnail, OptionPicker, OptionPickerDark } from "./components"
import PreviewCompatibleImage from '../components/PreviewCompatibleImage';
import { graphql } from "gatsby"
import { prepareVariantsWithOptions, prepareVariantsImages } from "./utilities"
import { useAddItemToCart } from "gatsby-theme-shopify-manager"
import { Button, ButtonLink } from '../components/buttons/Button.component';
import Breadcrumbs from '../components/breadcrumbs/Breadcrumbs.component';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { CarouselPics } from '../components/carousel/Carousel.component';
import SocialImgs from '../components/socialImgs/SocialImgs.component';
import SectionIcons from '../components/sectionIcons/SectionIcons.component';
import Minus from '../images/minus.inline.svg';
import Plus from '../images/plus.inline.svg';
import EmailCapture from "../components/emailCapture/EmailCapture.component";
import './product.styles.scss';

//custom global state test
import { GlobalStateContext } from '../context/GlobalContextProvider';

const ProductPage = ({ data: { shopifyProduct: product, markdownRemark }, location }) => {

  const state = useContext(GlobalStateContext) || { variantColor: '' };
  const { frontmatter } = markdownRemark;
  const kogobanner = frontmatter.kogobanner;
  const socialImg1 = frontmatter.socialImg1;
  const socialImg2 = frontmatter.socialImg2;
  const socialImg3 = frontmatter.socialImg3;
  const socialImg4 = frontmatter.socialImg4;
  const carouselData = [
    {img: frontmatter.carouselPic1.childImageSharp.fluid, alt: 'Kogo coffee cherries'},
    {img: frontmatter.carouselPic2.childImageSharp.fluid, alt: 'coffee cherries'},
    {img: frontmatter.carouselPic3.childImageSharp.fluid, alt: 'coffee cherries'},
    {img: frontmatter.carouselPic4.childImageSharp.fluid, alt: 'farmer coffee cherries'},
  ]

  const [quantity, setQuantity] = useState(1);
  const [listStyle, setListStyle] = useState(0);

  /** TODO  *
   * make color picker background color equal to SKU, make SKU hex color
   * SKU format: applecore first three digits, size next, then 6 digit color
   * ex: APL-L-625AB4
  */
  // const skus = product.variants[0];
  // console.log({skus});

  // const colors = product.options.find(
  //   option => option.name.toLowerCase() === "color"
  // ).values

  // const sizes = product.options.find(
  //   option => option.name.toLowerCase() === "size"
  // ).values;

  // console.log("Size", size)

  // const getSizes = (size) => {
  //   if(size === null) return [];
  //   return product.options.find(
  //     option => option.name.toLowerCase() === "size"
  //   ).values;
  // }

  // const sizes = getSizes(size);

  // let sizesTemp;

  // if(size){
  //   sizesTemp = product.options.find(
  //     option => option.name.toLowerCase() === "size"
  //   ).values;
  // } else {
  //   sizesTemp = [];
  // }

  // const sizes = sizesTemp;
 

  const variants = useMemo(() => prepareVariantsWithOptions(product.variants), [
    product.variants,
  ])


  const images = useMemo(() => prepareVariantsImages(variants, "color"), [
    variants,
  ])

  if (images.length < 1) {
    throw new Error("Must have at least one product image!")
  }

  const addItemToCart = useAddItemToCart()
  const [variant, setVariant] = useState(variants[0])
  const [addedToCartMessage, setAddedToCartMessage] = useState(null)


  let compareAtPrice = variant.compareAtPrice;


  // Use to set color variant when also using size variant, all products must have size and color
  // useEffect(() => {
  //   const newVariant = variants.find(variant => {
  //     return variant.color === color && variant.size === size;
  //   })

  //   if (variant.shopifyId !== newVariant.shopifyId) {
  //     setVariant(newVariant)
  //   }

  // }, [color, variants, variant.shopifyId])

   // Used for size variant when also using color variant, all products must have size and color
  //  useEffect(() => {
  //   const newVariant = variants.find(variant => {
  //     return variant.size === size && variant.color === color;
  //   })

  //   if (variant.shopifyId !== newVariant.shopifyId) {
  //     setVariant(newVariant)
  //   }

  // }, [size, variants, variant.shopifyId])




  // useEffect(() => {
  //   fetch('/.netlify/functions/quantity')
  //     .then(res => res.json())
  //     .then(console.log);
  // }, [])

  //Change active style for thumbnail image based on select option
  useEffect(() => {
    setListStyle(0);
  }, [])

  const gallery =
    images.length > 1 ? (
      <div className="gallery-grid">
        {images.map(({ src }, index) => (
          <Thumbnail key={index} src={src} className={`${index === listStyle ? 'active-img' : ''}`}/>
        ))}
      </div>
    ) : null

  async function handleAddToCart() {
    try {
      await addItemToCart(variant.shopifyId, Number(quantity))
      document.getElementsByTagName("html")[0].style.overflow = "hidden";
      setAddedToCartMessage("Added to your cart!")
    } catch (e) {
      setAddedToCartMessage("There was a problem adding this to your cart, please refresh the page.")
    }
  }

    // Data to be passed to SocialImg component
    const socialText = (<p>Follow us using <a href="https://www.instagram.com/explore/tags/kogo/" className="accent" target="_blank" rel="noreferrer">#kogo</a>  to see the many uses.</p>);
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

    let coverImg;
    switch(product.handle){
      case "kogo-coffee-cherries":
        coverImg = "/img/ogKogoCherries.jpg"
        break;
      default:
        coverImg = undefined;
        break;
    }

    const description = `Power up with ${product.title}. Helping you, helping the world.`

  return (
    <Layout>
      <SEO 
        title={`${product.title} | Shop`} 
        description={description} 
        thumbnailImage={coverImg} 
        addedKeywords={`${product.title}`}
        url={`https://www.kogofoods.com/shop/${product.handle}/`}
      />
      <div className="anchor" id="productTop" tabIndex="-1" aria-hidden="true"></div>
      <Breadcrumbs links={[`shop`, `shop/${product.handle}`]} />
      <section className={`product-wrap`}>
      {/* {addedToCartMessage ? (
        <div className="product-added-alert" variant="primary">
          {addedToCartMessage}
    
          <button 
            className="added-to-cart-close"
            title="Close" 
            aria-label="Close"
            onClick={() => setAddedToCartMessage(null)}>
            X
          </button>
        </div>
      ) : null} */}

      <CartModal
        addedToCartMessage={addedToCartMessage}
        setAddedToCartMessage={setAddedToCartMessage}
      />

      <div className="main-product-grid">
        <div style={{maxWidth: '500px'}}>
          <div
            style={{
              border: "1px solid gray",
              padding: 2,
              marginBottom: 2,
              borderRadius: '10px',
              overflow: 'hidden'
            }}
          >
            <Img fluid={variant.image.localFile.childImageSharp.fluid} />
          </div>
          {gallery}
        </div>
        
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1 style={{ marginTop: 0, marginBottom: 2 }}>{product.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: product.descriptionHtml }} />
          <div>
            <div className="product-option-container">
              <div><p style={{marginTop: '1em', fontSize: '1.4rem', color: '#303030'}}>${variant.price}</p></div>
              {compareAtPrice != null && (<div><p>previously: <span style={{textDecoration: 'line-through'}}>{compareAtPrice}</span></p></div>)}
              
            </div>
          </div>

          {!variant.availableForSale ? (
            <div>
              <p>Coming Soon! Sign up to be notified when Kogo is available.</p>
              <EmailCapture info={`${variant.size}${variant.color}`} />
            </div>)
            : (
              <>
                <div className="item-quantity">
                  <label htmlFor="first-choose-quantity" aria-label="Choose Quantity">Quantity:</label>
                  <button onClick={() => (quantity > 1 ? setQuantity(parseInt(quantity)-1) : setQuantity(1))} aria-label="Decrease Quantity by 1"><Minus /></button>
                    <input id="first-choose-quantity" disabled={!variant.availableForSale} type="number" onChange={event => setQuantity(event.target.value)} value={quantity} min="1"/>
                  <button onClick={() => setQuantity(parseInt(quantity)+1)} aria-label="Increase Quantity by 1"><Plus /></button>
                </div>
                <div>
                <Button
                  onClick={()=>(handleAddToCart())}
                  disabled={!variant.availableForSale || (quantity <= 0)}
                  style={{marginTop: '2em'}}
                  >
                  <span>Add to cart</span>
                </Button>
                </div>
              </>
            )}


        </div>
      </div>
      </section>

      <SectionIcons />

      <div className="pic-carousel">
        <CarouselPics
              items={ 
                carouselData.map(pic => (
                    <div className="">
                      <Img className="" fluid={pic.img} alt={pic.alt}/>
                    </div>
                )) }
        />  
      </div>

      <section className="section-container ">

      </section>

      <div style={{marginTop: 'calc(2rem + 10%)', textAlign: 'center'}}>
        <h2>See what others are saying</h2>
      </div>
      <section className={`section-quotes`}>
                  <q className="home-quote">I didn't think it would be so different from normal ground coffee beans, but WOAH does the cherry pack a different punch. I love the fruity taste.” - James Ren</q>
                  <q className="home-quote"> Great mission and great product. I personally love mine as a tea and it truly does give you sustained focus.” - Katie Strane</q>
      </section>

      <div className="about-img" style={{marginTop: 'calc(2rem + 10%)'}}>
        <PreviewCompatibleImage 
                                imageInfo={{
                                    image: kogobanner,
                                    alt: "kogo coffee cherries",
                                }}
                            />

          <h3 style={{marginTop: '2rem', textAlign: 'center'}}>Reduce Waste</h3>
          <p style={{margin: '1rem auto', maxWidth: '85ch', textAlign: 'center'}}>Over 20 million tons of coffee fruit waste is generated each year. If the coffee cherries are left to rot in the fields they can generate more than 15 million tons of CO2e (carbon dioxide equivalent). In addition, there is potential for the coffee fruit to leach dangerous mycotoxins into water ways and the soil.  <span className="accent" style={{fontWeight: 'bold'}}>Upcycling the coffee fruit reduces this impact and improves the environment in a sustainable way.</span></p>
        </div>


      <SocialImgs
        socialText={socialText}
        socialData={socialData}
      />

    </Layout> 
  )
}

export default ProductPage

export const ProductPageQuery = graphql`
  query productPage($productId: String!) {
    shopifyProduct(id: { eq: $productId }) {
      id
      title
      handle
      descriptionHtml
      options {
        name
        values
      }
      variants {
        availableForSale
        shopifyId
        price
        sku
        selectedOptions {
          name
          value
        }
        image {
          localFile {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
    markdownRemark(frontmatter: {templateKey: {eq: "shop-page"} }) {
      frontmatter{
        carouselPic1 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        carouselPic2 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        carouselPic3 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        carouselPic4 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        kogobanner {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialImg1 {
          childImageSharp {
            fluid(maxWidth: 850, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialImg2 {
          childImageSharp {
            fluid(maxWidth: 850, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialImg3 {
          childImageSharp {
            fluid(maxWidth: 850, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        socialImg4 {
          childImageSharp {
            fluid(maxWidth: 850, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

/** Add 'compareAtPrice' in variants query if want to show discount or price change */
// variants {
//   availableForSale
//   compareAtPrice
//   shopifyId
//   price
//   sku
