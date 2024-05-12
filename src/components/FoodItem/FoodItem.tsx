import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { assets } from '../../assets/assets';
import './FoodItem.css';

interface FoodItemProps {
    id: string;
    name: string;
    price: number;
    description: string;
    image: string;
}

const FoodItem: React.FC<FoodItemProps> = ({ id, name, price, description, image }) => {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
        // Обработка случая, когда контекст не определен
        return null;
    }

    const { cartItems, addToCart, removeFromCart } = storeContext;

    return (
    //    <div className="food-items-container">
        <div className='food-item'>
            <div className="food-item-img-container">
                <img className='food-item-image' src={image} alt="" />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} alt="" />
                    </div>
                }
            </div>
            <div className="food-item-info">
                <div className="food-item-name-rating">
                    <p>{name}</p>
                </div>
                <p className="food-item-desc">{description}</p>
                <p className="food-item-price">${price}</p>
            </div>
        </div>
        // </div>
    );
}

export default FoodItem;






