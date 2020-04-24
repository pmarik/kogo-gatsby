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
