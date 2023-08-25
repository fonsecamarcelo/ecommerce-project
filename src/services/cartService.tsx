import {createContext, useState} from "react";

import cardImages from '../../cardImages.json'

export const CartContext = createContext(null);

const getDefaultCart = () => {
    let cart: any = {}
    for(let i = 1; i < cardImages.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}

export const CartContextProvider = (props) => {
    const [ cartItems, setCartItems ] = useState(getDefaultCart());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0 ) {
                let itemInfo = cardImages.find((product) => product.id === item);
                totalAmount += cartItems[item] * itemInfo.price;
            }
        }
        return totalAmount.toFixed(2);
    }

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}))
    }

    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount}))
    }

    const contextValue: any = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount }

    return <CartContext.Provider value={contextValue}>{props.children}</CartContext.Provider>
}