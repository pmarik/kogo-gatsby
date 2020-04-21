import React, {useContext} from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout'
import "./cart.styles.scss";
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';


const Index = () => {

  const state = useContext(GlobalStateContext) || { cartArray: [] };
  const dispatch = useContext(GlobalDispatchContext);

  const calculatePrice = (cartArray) => {
    return (
      cartArray.reduce((accumulator, item) => {
        return (accumulator + (item.variantSelected.price * item.quantity))
      }, 0)
    )
  }

    return (
      <Layout>
        <main className="main-content">
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
                    {state.cartArray.map( item => {
                      return(
                          <div className="cart-item-display">
                            <div className="product-name-pic">
                              <h2 className="product-name">{item.itemName}</h2>
                              <div className="product-image">
                                <PreviewCompatibleImage
                                  imageInfo={{
                                    image: item.featuredImage,
                                    alt: `${item.itemName}`,
                                  }}
                                />
                              </div>
                            </div>
                           
                            <div className="product-info">
                              <h3>Quantity: {item.quantity}</h3>
                              <h3>${item.variantSelected.price}</h3>
                            </div>
                          </div>
                      )
                    } )}
                     <div className="cart-total">
                        <p>Your total is ${calculatePrice(state.cartArray)}</p>
                        <button style={{width: '220px', fontSize: '1rem'}}>
                          CHECK OUT
                        </button>
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
