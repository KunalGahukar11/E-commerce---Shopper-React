import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product.js";

export const ShopContext = createContext(null);

const cartInit = () => {
    let cart = {};

    for (let i = 0; i < all_product.length+1; i++) {
        cart[i] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItem,setCartItem] = useState(cartInit());

    const addToCart = (id) => {
        setCartItem((prev) => ({...prev,[id]:prev[id]+1}));
        console.log(cartItem);
    };

    const removeFromCart = (id) => {
        setCartItem((prev) => ({...prev,[id]:prev[id]-1}));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItem[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;

        for (const item in cartItem) {
            if (cartItem[item] > 0) {
                totalItem += cartItem[item];
            }
        }

        return totalItem;
    };

    const contextValue = { getTotalCartItems, getTotalCartAmount, all_product, cartItem, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
};

export default ShopContextProvider;