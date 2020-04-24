export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.variantSelected.id === cartItemToAdd.variantSelected.id);

    if (existingCartItem){
        return cartItems.map(cartItem => 
                cartItem.variantSelected.id === cartItemToAdd.variantSelected.id
                    ? { ...cartItem, quantity: cartItem.quantity + cartItemToAdd.quantity }
                    : cartItem
            )
    }   

    return [...cartItems, cartItemToAdd ]
}


export const decreaseItemFromCart = (cartItems, cartItemToDecrease) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.variantSelected.id === cartItemToDecrease.variantSelected.id
    )

    if (existingCartItem.quantity === 1){
        return cartItems.filter(cartItem => cartItem.variantSelected.id !== cartItemToDecrease.variantSelected.id)
    }

    return cartItems.map(
        cartItem => 
            cartItem.variantSelected.id === cartItemToDecrease.variantSelected.id ? 
            {...cartItem, quantity: cartItem.quantity - 1}
            : cartItem
    );
}


export const increaseItemFromCart = (cartItems, cartItemToIncrease) => {
    const existingCartItem = cartItems.find(
        cartItem => cartItem.variantSelected.id === cartItemToIncrease.variantSelected.id);

    if (existingCartItem){
        return cartItems.map(cartItem => 
                cartItem.variantSelected.id === cartItemToIncrease.variantSelected.id
                    ? { ...cartItem, quantity: cartItem.quantity + 1 }
                    : cartItem
            )
    }   

    return [...cartItems, cartItemToIncrease ]
}