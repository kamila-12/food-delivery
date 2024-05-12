import React, { createContext, useState, useEffect, ReactNode } from "react";
import { food_list } from '../assets/assets'; // Импорт списка блюд из assets.ts

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

const StoreContextProvider: React.FC<{ children: ReactNode }> = (props) => {
    const [cartItems, setCartItems] = useState<CartItems>({});
    const [foodList] = useState(food_list); // Используйте food_list из импорта

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
        food_list: foodList, // Используйте новое состояние food_list
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default StoreContextProvider;


// import React, { createContext, useState, useEffect, ReactNode } from "react";

// interface CartItems {
//     [key: string]: number;
// }

// interface StoreContextType {
//     cartItems: CartItems;
//     addToCart: (itemId: string) => void;
//     removeFromCart: (itemId: string) => void;
//     food_list: any[]; // Добавьте food_list
// }

// export const StoreContext = createContext<StoreContextType | null>(null);

// const StoreContextProvider: React.FC<{children: ReactNode}> = (props) => {
//     const [cartItems, setCartItems] = useState<CartItems>({});
//     const [food_list] = useState<any[]>([

//     ]); // Добавьте food_list

//     const addToCart = (itemId: string) => {
//         setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] ? prev[itemId] + 1 : 1 }));
//     }

//     const removeFromCart = (itemId: string) => {
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
//         removeFromCart,
//         food_list 
//     }

//     return (
//         <StoreContext.Provider value={contextValue}>
//             {props.children}
//         </StoreContext.Provider>
//     );
// }

// export default StoreContextProvider;






