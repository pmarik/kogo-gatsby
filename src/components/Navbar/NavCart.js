import React, {useContext} from 'react'
import { Link } from 'gatsby';
// import cart from '../../img/cartWhite.svg';
import cart from '../../img/cart10.svg';
import { GlobalStateContext } from '../../context/GlobalContextProvider';

const NavCart = () => {

    const state = useContext(GlobalStateContext) || { cartArray: [] };

    const getTotalNumItems = (cartArray) => {
        return cartArray.reduce((accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity, 0)
    }

    return (
        <div className="nav-cart">
            <Link className="navbar-item nav-your-cart" to="/cart">
                <span className="icon">
                    <span className="cart-icon-num">
                        <img src={cart} alt="Cart" />
                        <span className="cart-num">
                            {getTotalNumItems(state.cartArray)}
                        </span>       
                    </span>
                    <span className="your-cart-text">Your Cart</span>
                </span>
            </Link>
        </div>)
}       

export default NavCart;