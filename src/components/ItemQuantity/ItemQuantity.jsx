import React, { useContext } from 'react';
import { GlobalStateContext, GlobalDispatchContext } from '../../context/GlobalContextProvider';


const ItemQuantity = ({ cartItem }) => {

    const state = useContext(GlobalStateContext) || { cartArray: [] };
    const dispatch = useContext(GlobalDispatchContext);

    return (
        <div>
            <span>{cartItem.quantity}</span>
        </div>
    )
}

export default ItemQuantity;