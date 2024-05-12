import React, { createContext, useState, useEffect, ReactNode } from "react";
import { food_list } from '../assets/assets'; 

interface CartItems {
    [key: string]: number;
}

interface StoreContextType {
    cartItems: CartItems;
    addToCart: (itemId: string) => void;
    removeFromCart: (itemId: string) => void;
    getTotalCartAmount: () => number;
    food_list: any[];
    user: any;
    setUser: (user: any) => void; 
}


export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider: React.FC<{ children: ReactNode }> = (props) => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [foodList] = useState(food_list); 
    const [user, setUser] = useState<any>(null);

    const addToCart = (itemId: string) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 }));
    }

    const removeFromCart = (itemId: string) => {
        if (cartItems[itemId] === 1) {
            const newCartItems = { ...cartItems };
            delete newCartItems[itemId];
            setCartItems(newCartItems);
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = foodList.find((product) => product._id === item);
                if (itemInfo) {
                    totalAmount += itemInfo.price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount, 
        food_list: foodList, 
        user,
        setUser
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;


