import React from 'react';
import { addItemToCart, decreaseItemFromCart, increaseItemFromCart } from './cart.utils';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    cartArray: [],
    tagsArray: [],
    tagsUpdated: false, 
}

function reducer(state, action){
    switch (action.type){
        case "ADD_TO_CART": {
            return {
                ...state,
                cartArray: addItemToCart(state.cartArray, action.payload)
            }
        }
        case "REMOVE_ITEM": {
            return {
                ...state,
                cartArray: state.cartArray.filter(
                    cartItem => cartItem.variantSelected.id !== action.payload.variantSelected.id
                )
            }
        }
        case "INCREASE_QUANTITY": {
            return {
                ...state,
                cartArray: increaseItemFromCart(state.cartArray, action.payload)
            }
        }
        case "DECREASE_QUANTITY": {
            return {
                ...state,
                cartArray: decreaseItemFromCart(state.cartArray, action.payload)
            }
        }
        case "HYDRATE_TAGS": {
            return {
                ...state,
                tagsArray: action.payload,
                tagsUpdated: true,
            }
        }
        default:
            throw new Error('Bad Action Type');
    }
}

const GlobalContextProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    return (
        <GlobalStateContext.Provider value={state}>
            <GlobalDispatchContext.Provider value={dispatch}>
                {children}
            </GlobalDispatchContext.Provider>
        </GlobalStateContext.Provider>
    )
}


export default GlobalContextProvider;