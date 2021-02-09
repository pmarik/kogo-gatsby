import React from "react"
import Img from "gatsby-image"
import SEO from "../../components/Seo.component"
import Layout from '../../components/layout/Layout.component'
import { useStaticQuery, graphql, Link } from "gatsby"
import Minus from '../../images/minus.inline.svg';
import Plus from '../../images/plus.inline.svg';
import './cart.styles.scss';

import {
  useCartItems,
  useCheckoutUrl,
  useCart,
  useUpdateItemQuantity,
  useCartCount,
} from "gatsby-theme-shopify-manager"

const CartPage = () => {
  const {
    allShopifyProductVariant: { nodes: variants },
    allShopifyProduct: { nodes: products },
  } = useStaticQuery(graphql`
    query {
      allShopifyProductVariant {
        nodes {
          shopifyId
          image {
            localFile {
              childImageSharp {
                fluid(maxWidth: 120) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      allShopifyProduct {
        nodes {
          handle
          variants {
            shopifyId
          }
        }
      }
    }
  `)

  const count = useCartCount()
  const lineItems = useCartItems()
  const updateItemQuantity = useUpdateItemQuantity()
  const checkoutUrl = useCheckoutUrl()
  const cart = useCart()
  const { subtotal } = getCartTotals(cart)
  //const addItemToCart = useAddItemToCart()


  async function updateLineQuantity(variant, quantity) {
    try {
      await updateItemQuantity(variant, quantity);
    } catch (e){
      console.log('error updating item quantity', e)
    }
  }

  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getCartTotals(cart) {
    if (cart == null) {
      return { tax: "-", total: "-" }
    }

    // const tax = cart.totalTaxV2
    //   ? `$${Number(cart.totalTaxV2.amount).toFixed(2)}`
    //   : "-"
    // const total = cart.totalPriceV2
    //   ? `$${Number(cart.totalPriceV2.amount).toFixed(2)}`
    //   : "-"

    const subtotal = cart.subtotalPriceV2
      ? `$${Number(cart.subtotalPriceV2.amount).toFixed(2)}`
      : "-"

    // const shipping = cart.shippingLine
    //   ? `$${Number(cart.shippingLine.price).toFixed(2)}`
    //   : "-"

    return {
      subtotal,
    }
  }

  async function removeFromCart(variantId) {
    try {
      await updateItemQuantity(variantId, 0)
    } catch (e) {
      console.log(e)
    }
  }

  function getHandleForVariant(variantId) {
    const selectedProduct = betterProductHandles.find(product => {
      return product.variants.includes(variantId)
    })

    return selectedProduct ? selectedProduct.handle : null
  }

  function getImageFluidForVariant(variantId) {
    const selectedVariant = variants.find(variant => {
      return variant.shopifyId === variantId
    })

    if (selectedVariant) {
      return selectedVariant.image.localFile.childImageSharp.fluid
    }
    return null
  }

  const LineItem = ({ item }) => (
    <div className="cart-line-item">
      <div>
        <div>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div>
        <Link
          to={`/shop/${getHandleForVariant(item.variant.id)}`}
          className="line-item-product-title"
        >
          {item.title}
        </Link>
        <ul className="line-item-desc-list">
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <p>{name}: {value}</p>
            </li>
          ))}
          <li>
            <button className='remove-btn' variant="link" onClick={() => removeFromCart(item.variant.id)}>
              x remove
            </button>
          </li>
        </ul>
      </div>
      
      <p className="line-price">
        ${Number(item.variant.priceV2.amount).toFixed(2)}
      </p>

      {/* <p className="line-quantity">
         {item.quantity}
      </p> */}

      <div className="item-quantity line-quantity">
            <div aria-label="Choose Quantity">Quantity</div>
            <button onClick={() => updateLineQuantity(item.variant.id, (item.quantity - 1))} aria-label="Decrease Quantity by 1"><Minus /></button>
              <span>{item.quantity}</span>
            <button onClick={() => updateLineQuantity(item.variant.id, (item.quantity + 1))} aria-label="Increase Quantity by 1"><Plus /></button>
      </div>

      <p className="line-total">
        ${Number(item.quantity * Number(item.variant.priceV2.amount)).toFixed(2)}
      </p>
    </div>
  )

  const emptyCart = (
    <Layout>
      <SEO 
        title={`Cart`}
        url="https://www.myapplecore.com/cart"
      />
      <section className="cart-wrap cart-empty">
        <h1>Cart</h1>
        <p>Your cart is empty. Please <Link to="/shop" ><span className="accent" style={{textDecoration: 'underline'}}>continue shopping.</span></Link></p>
      </section>
    </Layout>
  )

  return lineItems.length < 1 ? (
    emptyCart
  ) : (
    <Layout>
      <SEO title={`(${count}) Cart`}/>
      <section className="cart-container">
        <h1 style={{textAlign: 'center', marginBottom: '3rem'}}>Your Cart</h1>
        <div className="cart-line-header">
          <p className="header-product">Product</p>
          <p className="header-price">Price</p>
          <p className="header-quantity">Quantity</p>
          <p className="header-total">Total</p>
        </div>
        <hr style={{color: '#e3e3e3'}}></hr>
        {lineItems.map(item => (
          <React.Fragment key={item.id}>
            <LineItem key={item.id} item={item} />
            <hr style={{ marginTop: '1em', color: '#e3e3e3'}} />
          </React.Fragment>
        ))}
        <div style={{display: 'flex'}}>
          <div style={{ marginLeft: "auto", minWidth: "10rem", padding: 4 }}>
            
            {/* <h3 style={{ marginTop: 0, marginBottom: 3 }}>Cart Summary</h3>
            <hr />

            <div className="cart-cost-grid">
              <p>Subtotal:</p>
              <p style={{ marginLeft: "auto" }}>{subtotal}</p>
              <p>Shipping:</p>
              <p style={{ marginLeft: "auto" }}>{shipping}</p>
              <p>Tax: </p>
              <p style={{ marginLeft: "auto" }}>{tax}</p>
            </div> */}


            <div className="cart-cost-grid">
              <p>Subtotal:</p>
              <p style={{ marginLeft: "auto", fontWeight: 'bold', fontSize: '1.5rem' }}>
                {subtotal}
              </p>
              <p style={{marginLeft: 'auto', fontSize: '0.9rem', opacity: '0.8'}}>*tax and shipping will be calculated in checkout</p>
            </div>

            <br />
            {checkoutUrl != null ? (
               <span style={{float: 'right'}}>
                <a
                    className="button"
                    style={{color: '#fff'}}
                    href={checkoutUrl}
                    rel="noopener noreferrer"
                >
                    Checkout
                </a>
              </span>
            ) : null}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default CartPage
