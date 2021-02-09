import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql, Link } from "gatsby"
import { ButtonLink, Button } from '../buttons/Button.component';
import Arrow from '../../images/backArrow.inline.svg';
import './cartModal.styles.scss';


import {
    useCartItems,
    useCheckoutUrl,
    useCart,
    useUpdateItemQuantity,
  } from "gatsby-theme-shopify-manager"


const CartModal = ({addedToCartMessage, setAddedToCartMessage}) => {
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

  //const count = useCartCount()
  const lineItems = useCartItems()
  const updateItemQuantity = useUpdateItemQuantity()
  const checkoutUrl = useCheckoutUrl()
  const cart = useCart()
  const { subtotal } = getCartTotals(cart)
  //const addItemToCart = useAddItemToCart()


  const betterProductHandles = products.map(({ handle, variants }) => {
    const newVariants = variants.map(variant => variant.shopifyId)
    return {
      variants: newVariants,
      handle,
    }
  })

  function getCartTotals(cart) {
    if (cart == null) {
      return { subtotal: "-" }
    }

    const subtotal = cart.subtotalPriceV2 
      ? `$${Number(cart.subtotalPriceV2.amount).toFixed(2)}`
      : "-"

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
    <div className="cart-line-item cart-line-item-modal">
      <div>
        <div>
          <Img fluid={getImageFluidForVariant(item.variant.id)} />
        </div>
      </div>
      <div>
        <Link
          to={`/shop/${getHandleForVariant(item.variant.id)}/`}
          className="line-item-product-title"
        >
          {item.title}
        </Link>
        <ul className="line-item-desc-list" >
          {item.variant.selectedOptions.map(({ name, value }) => (
            <li key={name}>
              <p>{name}: {value} </p>
            </li>
          ))}
          <li key="quantity">
            <p>Quantity: {item.quantity}</p>
          </li>
          <li>
            <button className='remove-btn' variant="link" onClick={() => removeFromCart(item.variant.id)}>
              x remove
            </button>
          </li>
        </ul>
      </div>
     
      <p
        style={{
          fontSize: '0.9rem',
          marginLeft: "auto",
        }}
      >
        ${Number(item.variant.priceV2.amount).toFixed(2)}
      </p>
    </div>
  )

    return (
        <aside className={`${addedToCartMessage ? 'added-to-cart' : 'added-start'}`} variant="primary">
            <div className="cart-preview-inner">
                <div className="added-top-flex">
                    <button 
                        className="added-to-cart-close"
                        title="Close" 
                        aria-label="Close"
                        onClick={() => {
                            document.getElementsByTagName("html")[0].style = '';
                            setAddedToCartMessage(null)
                          }}>
                        <span><Arrow/></span>
                    </button>
                    <p className="added-msg">{lineItems.length === 0 ? "Cart Empty" : addedToCartMessage}</p>
                </div>
                    <section style={{marginBottom: 'auto'}}>
                        {lineItems.map(item => (
                        <React.Fragment key={item.id}>
                            <LineItem key={item.id} item={item} />
                            <hr style={{ margin: 3, color: "#c7c6c6" }} />
                        </React.Fragment>
                        ))}
                        <div style={{ display: "flex" }}>
                            <div style={{ marginLeft: "auto", minWidth: "10rem", padding: 4 }}>
                                <div className="cart-cost-grid" style={{marginBottom: '3em'}}>
                                <p>Subtotal:</p>
                                <p style={{ marginLeft: "auto", fontWeight: 'bold' }}>
                                    {subtotal}
                                </p>
                                <p style={{marginLeft: 'auto', fontSize: '0.8rem', opacity: '0.6'}}>*tax and shipping will be calculated in checkout</p>

                                </div>                               
                            </div>
                        </div>
                    </section>

                {lineItems.length === 0 ? ( <Button 
                        className="button"
                        title="Close" 
                        aria-label="Close"
                        onClick={() => {
                            document.getElementsByTagName("html")[0].style = '';
                            setAddedToCartMessage(null)
                          }}>
                        <span>Continue Shopping</span>
                    </Button>) : (       <div className="added-options">
                                    <ButtonLink
                                        toLink="/cart/"
                                        className="invert-btn"
                                    >
                                        View Cart
                                    </ButtonLink>

                                    {checkoutUrl != null ? (
                                    <span>
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
              </div>) }
         
            </div>
        </aside>
    )
}

export default CartModal;