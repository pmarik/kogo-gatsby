import React, { useContext } from 'react';
import { GlobalDispatchContext } from '../../context/GlobalContextProvider';
import upArrow from '../../img/up-arrow.svg';
import downArrow from '../../img/down-arrow.svg';


const ItemQuantity = ({ cartItem }) => {

    const dispatch = useContext(GlobalDispatchContext);

    const handleDecreaseItem = (cartItem) => {
        dispatch({
            type: "DECREASE_QUANTITY",
            payload: cartItem
        })
    }

    const handleIncreaseItem = (cartItem) => {
        dispatch({
            type: "INCREASE_QUANTITY",
            payload: cartItem
        })
    }

    return (
        <div className="product-quantity">
            <div className="decrease-item" title="Decrease Item Quantity" onClick={() => handleDecreaseItem(cartItem)}><img src={downArrow} alt="decrease item quantity" style={{width: '12px', height: 'auto'}}/></div>
            <h3><span>{cartItem.quantity}</span></h3>
            <div className="increase-item" title="Increase Item Quantity" onClick={() => handleIncreaseItem(cartItem)}><img src={upArrow} alt="increase item quantity" style={{width: '12px', height: 'auto'}}/></div>

        </div>
    )
}

export default ItemQuantity;