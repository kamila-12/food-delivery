import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './foodDisplay.css'
interface FoodDisplayProps {
    category: string;
}

const FoodDisplay: React.FC<FoodDisplayProps> = ({ category }) => {
    const storeContext = useContext(StoreContext);

    if (!storeContext) {
        return null;
    }

    const { food_list } = storeContext;

    return (
        <div className='food-display' id='food-display'>
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list.map((item: any, index: number) => {
                    if (category === "All" || category === item.category) {
                        return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />;
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default FoodDisplay;


