import React, {useContext} from 'react'
import { navigate } from 'gatsby-link'
import { Link } from 'gatsby';
import Layout from '../../components/Layout'
import "./cart.styles.scss";
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';




const Index = () => {

    const state = useContext(GlobalStateContext);
    const dispatch = useContext(GlobalDispatchContext);

 
    return (
      <Layout>
        <main className="main-content">
          <section className="main-content-container anim-start-0 fadeIn">
            <div className="cart-main">
                <h1 className="cart-title">Your Cart</h1>

               {/* { state.cartArray.length === 0 ? 

               } */}
                <div>
                   <p>Your cart is currently empty, please <Link to="/shop" className="continue-shop-link">continue shopping</Link></p>
                </div>
            </div>
          </section>
        </main>
      </Layout>
    )
}

export default Index;
