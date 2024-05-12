import './exploreMenu.css';
import { menu_list } from '../../assets/assets';
import React from 'react';

interface IExploreMenuProps {
    category: string; 
    setCategory: React.Dispatch<React.SetStateAction<string>>;
}

const ExploreMenu: React.FC<IExploreMenuProps> = ({category, setCategory}) => {
    
    return (
        <div className='explore-menu' id='explore-menu'>
            <h1>Explore menu</h1>
            <p className='explore-menu-text'>
            The Art dessert workshop is a modern complex where masterpieces of confectionery art are created: author's cakes, handmade sweets, unique desserts according to the original recipe. 
            Here dreams of a sweet life become a reality!
            </p>
            <div className="explore-menu-list" style={{display: 'flex'}}>
                {menu_list.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(prev => prev ===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                            <img className={category===item.menu_name?"active":""} style={{ width: '200px', height: 'auto' }} src={item.menu_image} alt="" />
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr />
        </div>
      )
}

export default ExploreMenu;
