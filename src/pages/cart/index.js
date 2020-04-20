import React, {useContext} from 'react';
import { Link } from 'gatsby';
import Layout from '../../components/Layout'
import "./cart.styles.scss";
import PreviewCompatibleImage from '../../components/PreviewCompatibleImage';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';


const Index = () => {

  const state = useContext(GlobalStateContext) || { cartArray: [] };
  const dispatch = useContext(GlobalDispatchContext);

 
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
                            <div className="product-image">
                              <PreviewCompatibleImage
                                imageInfo={{
                                  image: item.featuredImage,
                                  alt: `${item.itemName}`,
                                }}
                              />
                            </div>
                            <div className="product-info">
                              <h2 className="product-name">{item.itemName}</h2>
                              <h3>Price: ${item.variantSelected.price}</h3>
                            </div>
                            <h3>Quantity: {item.quantity}</h3>
                          </div>
                      )
                    } )}
                     <div>
                        <p>Your total is $$$</p>
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
