import React, {useContext, useState, useEffect} from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout'
import "./cart.styles.scss";
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';
import ItemQuantity from '../../components/ItemQuantity/ItemQuantity';
import removeBtn from '../../img/remove-btn.svg';
import Helmet from 'react-helmet';
import Checkout from '../../components/checkout/Checkout.component';

// import {loadStripe} from '@stripe/stripe-js';
// import StripeCheckout from 'react-stripe-checkout';
// import {Elements} from '@stripe/react-stripe-js';

//const stripePromise = loadStripe('pk_test_wt88SmfJIv2fEihXzYmOEGVc00sIwkHG9m');


const Index = () => {

  const state = useContext(GlobalStateContext) || { cartArray: [] };
  const dispatch = useContext(GlobalDispatchContext);

  const [totalPrice, setTotalPrice] = useState(0);
  const [checkoutClicked, setCheckoutClicked] = useState(false);

  useEffect(() => {
    setTotalPrice(state.cartArray.reduce((accumulator, item) => {
      return (accumulator + (item.variantSelected.price * item.quantity))
    }, 0))
  }, [state.cartArray])

  const getTotalNumItems = (cartArray) => {
    return cartArray.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
  }

  const handleRemoveItem = (cartItem) => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: cartItem
    })
  }

  const handleCheckout = () => {
    setCheckoutClicked(true);
  }

    return (
      <Layout>
        <main className="main-content">
        <Helmet title={`${state.cartArray.length > 0 ? ("(" + getTotalNumItems(state.cartArray) + ")") : ('')} Cart | KOGO | Organic Ground Coffee Cherries`} />
          <section className="main-content-container anim-start-0 fadeIn">
            <div className="cart-main">
                <h1 className="cart-title">Your Cart</h1>                

               { state.cartArray.length === 0 ? 
                (<div>
                   <p>Your cart is currently empty, please <Link to="/shop" className="continue-shop-link">continue shopping</Link></p>
                </div>)
                :
                (
                  <div className="has-cart-item">
                    <div className="cart-items-heading">
                      <h2 className="cart-items-heading-Item">Item</h2>
                      <h2 className="cart-items-heading-Description">Description</h2>
                      <h2 className="cart-items-heading-Quantity">Quantity</h2>
                      <h2 className="cart-items-heading-Price">Price</h2>
                    </div>
                    {state.cartArray.map( item => {
                      return(
                          <div key={item.variantSelected.id} className="cart-item-display">
                            <div className="product-name-pic">
                              <div className="product-info">
                                <h2>{item.itemName}</h2>
                                <h4>{item.variantSelected.option}</h4>
                              </div>

                              <div className="product-image">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: item.featuredImage,
                                    alt: `${item.itemName}`,
                                  }}
                                />
                              </div>
                            </div>
                           
                            <ItemQuantity cartItem={item}/>

                            <div className="product-price">
                              <h3>${item.variantSelected.price}</h3>
                            </div>

                            
                              <button onClick={() => handleRemoveItem(item)} className="remove-btn">
                                  <img src={removeBtn} alt="remove button" title="Remove Item" style={{width: '20px', height: 'auto'}}/>
                              </button>
                            
                          </div>
                      )
                    } )}
                     <div className="cart-total">
                        <p>Your total is ${totalPrice}</p>
                        {/* <button style={{width: '220px', fontSize: '1rem'}} onClick={handleCheckout}>
                          CHECK OUT
                        </button> */}
                        <Checkout price={totalPrice} productArray={state.cartArray} />
                     </div>
                  </div>
                )
               }

            </div>
          </section>
        </main>
      </Layout>
    )
}

export default Index;
