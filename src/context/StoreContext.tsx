import React, { createContext, useState, useEffect, ReactNode } from "react";

interface CartItems {
    [key: string]: number;
}

interface StoreContextType {
    cartItems: CartItems;
    addToCart: (itemId: string) => void;
    removeFromCart: (itemId: string) => void;
    food_list: any[]; // Добавьте food_list
}

export const StoreContext = createContext<StoreContextType | null>(null);

const StoreContextProvider: React.FC<{children: ReactNode}> = (props) => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [food_list] = useState<any[]>([]); // Добавьте food_list

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

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    const contextValue = {
        cartItems,
        addToCart,
        removeFromCart,
        food_list // Добавьте food_list в контекстное значение
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;






// import React, { createContext, useState, useEffect } from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//     const [cartItems, setCartItems] = useState({});

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 }));
//     }

//     const removeFromCart = (itemId) => {
//         if (cartItems[itemId] === 1) {
//             const newCartItems = { ...cartItems };
//             delete newCartItems[itemId];
//             setCartItems(newCartItems);
//         } else {
//             setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//         }
//     }

//     useEffect(() => {
//         console.log(cartItems);
//     }, [cartItems]);

//     const contextValue = {
//         cartItems,
//         addToCart,
//         removeFromCart
//     }

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// }

// export default StoreContextProvider;




// import { createContext } from "react";
// import {food_list} from "../assets/assets"

// export const StoreContext  = createContext(null)

// const StoreContextProvider = (props) => {


//     const contextValue = {
//         food_list 


//     }
//     return (
//         <StoreContextProvider value={contextValue}>
//             {props.children}
//         </StoreContextProvider>
//     )

// }
// export default StoreContextProvider