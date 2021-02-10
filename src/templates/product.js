import React, { useState, useEffect, useMemo, useContext } from "react"
import Img from "gatsby-image"
import SEO from '../components/Seo.component'
import CartModal from '../components/cartModal/CartModal.component'
import Layout from '../components/layout/Layout.component';
// import { ColorOptionPicker } from "./components/"
import { Thumbnail, OptionPicker, OptionPickerDark } from "./components"
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

const ProductPage = ({ data: { shopifyProduct: product, markdownRemark } }) => {

  const state = useContext(GlobalStateContext) || { variantColor: '' };
  const { frontmatter } = markdownRemark;
  const productDesc3 = frontmatter.productDesc3;
  const productDesc4 = frontmatter.productDesc4;
  const selectCore1 = frontmatter.selectCore1;
  const socialImg1 = frontmatter.socialImg1;
  const socialImg2 = frontmatter.socialImg2;
  const socialImg3 = frontmatter.socialImg3;
  const socialImg4 = frontmatter.socialImg4;


  const carouselData = [
    {img: frontmatter.carouselPic1.childImageSharp.fluid, alt: 'Applecore with headphones'},
    {img: frontmatter.carouselPic2.childImageSharp.fluid, alt: 'Applecore travel'},
    {img: frontmatter.carouselPic3.childImageSharp.fluid, alt: 'Applecore travel'},
    {img: frontmatter.carouselPic4.childImageSharp.fluid, alt: 'Applecore travel'},
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
    const socialHeader = `Applecore in Action`;
    const socialText = (<p>Follow us using <a href="https://www.instagram.com/explore/tags/applecore/" className="accent" target="_blank" rel="noreferrer">#applecore</a> and <a href="https://www.instagram.com/explore/tags/nomoretangles/" className="accent" target="_blank" rel="noreferrer">#nomoretangles</a> to see the many uses.</p>);
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

    let coverImg;
    switch(product.handle){
      case "applecore-3-pack":
        coverImg = "/img/ogApplecore3pack.png"
        break;
      case "applecore-10-pack":
        coverImg = "/img/ogApplecore10pack.png"
        break;
      case "applecore-30-pack":
        coverImg = "/img/ogApplecore30pack.png"
        break;
      case "collections":
        coverImg = "/img/ogApplecoreCollections.png"
        break;
      case "applecore-pop-box":
        coverImg = "/img/ogApplecorePopBox.png"
        break;
      default:
        coverImg = undefined;
        break;
    }

    const description = `Organize your wires with the ${product.title}. Comes in various colors and sizes to manage your cords and reduce clutter.`

  return (
    <Layout>
      <SEO 
        title={`${product.title} | Shop`} 
        description={description} 
        thumbnailImage={coverImg} 
        addedKeywords={`${product.title}`}
        url={`https://www.myapplecore.com/shop/${product.handle}/`}
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

         

          <div className="product-points" style={{marginBottom: '6em'}}>
            <ul>
              <li><p>Small: 1" in diameter, 1.5" tall</p></li>
              <li><p>Medium: 1.5" in diameter, 2" tall</p></li>
              <li><p>Large: 2" in diameter, 2.75" tall</p></li>
              <li><p>Recyclable, soft rubber material</p></li>
              <li><p>Electical cord management for everyday use</p></li>
            </ul>
          </div>

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

      <section className={`section-container section-quotes`}>
                  <q className="home-quote"><span>My cords are now manageable!</span><br/> It's like a whole new world underneath my desk.  I could find all kinds of uses for these such as lamps, kitchen appliances, radios, and TVs” - Nancy</q>
                  <q className="home-quote"><span>I love my Applecore!</span><br/>We use them for headphones, phone cords, computer mouse and keyboard cords, and appliances in the kitchen. My kitchen counter is so tidy and I don't have to constantly try to shove the cord behind an appliance” - Akedy</q>
      </section>


      <SocialImgs
        socialHeader={socialHeader}
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
        productDesc3 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        productDesc4 {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        selectCore1 {
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

/** Use if figure out individual product
 * 
 *  {(() => {
        switch(product.handle){
          case "applecore-3-pack":
            return <Applecore3Pack
                      title={product.title} 
                      addedToCartMessage={addedToCartMessage}
                      setAddedToCartMessage={setAddedToCartMessage}
                      variant={variant}
                      gallery={gallery}
                      product={product}
                      colors={colors}
                      color={color}
                      setColor={setColor}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddToCart={handleAddToCart}
                  />;
          case "applecore-10-pack":
            return <Applecore10Pack 
                      title={product.title} 
                      addedToCartMessage={addedToCartMessage}
                      setAddedToCartMessage={setAddedToCartMessage}
                      variant={variant}
                      gallery={gallery}
                      product={product}
                      colors={colors}
                      color={color}
                      setColor={setColor}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddToCart={handleAddToCart}
                  />;
          case "applecore-30-pack":
            return <Applecore30Pack 
                      title={product.title} 
                      addedToCartMessage={addedToCartMessage}
                      setAddedToCartMessage={setAddedToCartMessage}
                      variant={variant}
                      gallery={gallery}
                      product={product}
                      colors={colors}
                      color={color}
                      setColor={setColor}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddToCart={handleAddToCart}
                  />;
          case "collections":
            return <Collections 
                      title={product.title} 
                      addedToCartMessage={addedToCartMessage}
                      setAddedToCartMessage={setAddedToCartMessage}
                      variant={variant}
                      gallery={gallery}
                      product={product}
                      colors={colors}
                      color={color}
                      setColor={setColor}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddToCart={handleAddToCart}
                  />;
          default:
            return <DefaultProduct
                      title={product.title} 
                      addedToCartMessage={addedToCartMessage}
                      setAddedToCartMessage={setAddedToCartMessage}
                      variant={variant}
                      gallery={gallery}
                      product={product}
                      colors={colors}
                      color={color}
                      setColor={setColor}
                      quantity={quantity}
                      setQuantity={setQuantity}
                      handleAddToCart={handleAddToCart}
                  />;
        }
      })()}
 */