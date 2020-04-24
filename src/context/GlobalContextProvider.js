import React from 'react';
import { addItemToCart } from './cart.utils';

export const GlobalStateContext = React.createContext();
export const GlobalDispatchContext = React.createContext();

const initialState = {
    cartArray: []
}

function reducer(state, action){
    switch (action.type){
        case "ADD_TO_CART": {
            return {
                // cartArray: [...state.cartArray, action.payload]
                cartArray: addItemToCart(state.cartArray, action.payload)
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