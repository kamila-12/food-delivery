import basket_icon from './basket_icon.png';
import logo from './logo.png';
import header_img from './header_img.png';
import search_icon from './search_icon.png';
import menu_1 from './menu_1.png';
import menu_2 from './menu_2.png';
import menu_3 from './menu_3.png';
import menu_4 from './menu_4.png';
import menu_5 from './menu_5.png';
import menu_6 from './menu_6.png';
import menu_7 from './menu_7.png';
import menu_8 from './menu_8.png';

import food_1 from './food_1.png';
import food_2 from './food_2.png';
import food_3 from './food_3.png';
import food_4 from './food_4.png';
import food_5 from './food_5.png';
import food_6 from './food_6.png';
import food_7 from './food_7.png';
import food_8 from './food_8.png';
import food_9 from './food_9.png';
import food_10 from './food_10.png';
import food_11 from './food_11.png';
import drink_1 from './drink_1.png';
import drink_2 from './drink_2.png';
import drink_3 from './drink_3.png';
import drink_4 from './drink_4.png';
import drink_5 from './drink_5.png';
import drink_6 from './drink_6.png';
import drink_7 from './drink_7.png';


import add_icon_white from './add_icon_white.png';
import add_icon_green from './add_icon_green.png';
import remove_icon_red from './remove_icon_red.png';
import app_store from './app_store.png';
import play_store from './play_store.png';
import linkedin_icon from './linkedin_icon.png';
import facebook_icon from './facebook_icon.png';
import twitter_icon from './twitter_icon.png';
import cross_icon from './cross_icon.png';
import selector_icon from './selector_icon.png';
import rating_starts from './rating_starts.png';
import profile_icon from './profile_icon.png';
import bag_icon from './bag_icon.png';
import logout_icon from './logout_icon.png';
import parcel_icon from './parcel_icon.png';

export const assets = {
    logo,
    basket_icon,
    header_img,
    search_icon,
    rating_starts,
    add_icon_green,
    add_icon_white,
    remove_icon_red,
    app_store,
    play_store,
    linkedin_icon,
    facebook_icon,
    twitter_icon,
    cross_icon,
    selector_icon,
    profile_icon,
    logout_icon,
    bag_icon,
    parcel_icon
};

export const menu_list: { menu_name: string; menu_image: string }[] = [
    {
        menu_name: "Salad",
        menu_image: menu_1
    },
    {
        menu_name: "Rolls",
        menu_image: menu_2
    },
    {
        menu_name: "Deserts",
        menu_image: menu_3
    },
    {
        menu_name: "Sandwich",
        menu_image: menu_4
    },
    {
        menu_name: "Cake",
        menu_image: menu_5
    },
    {
        menu_name: "Pure Veg",
        menu_image: menu_6
    },
    {
        menu_name: "Pasta",
        menu_image: menu_7
    },
    {
        menu_name: "Noodles",
        menu_image: menu_8
    }
];

export const food_list: {
    _id: string;
    name: string;
    image: string;
    price: number;
    description: string;
    category: string;
}[] = [
    {
        _id: "1",
        name: "Greek salad",
        image: food_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "2",
        name: "Veg salad",
        image: food_2,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "3",
        name: "Clover Salad",
        image: food_3,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "4",
        name: "Chicken Salad",
        image: food_4,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Salad"
    },
    {
        _id: "5",
        name: "Lasagna Rolls",
        image: food_5,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "6",
        name: "Peri Peri Rolls",
        image: food_6,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "7",
        name: "Chicken Rolls",
        image: food_7,
        price: 20,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "8",
        name: "Veg Rolls",
        image: food_8,
        price: 15,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Rolls"
    },
    {
        _id: "9",
        name: "Ripple Ice Cream",
        image: food_9,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "10",
        name: "Fruit Ice Cream",
        image: food_10,
        price: 22,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "11",
        name: "Jar Ice Cream",
        image: food_11,
        price: 10,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "12",
        name: "Vanilla Ice Cream",
        image: drink_1,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Deserts"
    },
    {
        _id: "13",
        name: "Chicken Sandwich",
        image: drink_2,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "14",
        name: "Vegan Sandwich",
        image: drink_3,
        price: 18,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "15",
        name: "Grilled Sandwich",
        image: drink_4,
        price: 16,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "16",
        name: "Bread Sandwich",
        image: drink_5,
        price: 24,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Sandwich"
    },
    {
        _id: "17",
        name: "Cup Cake",
        image: drink_6,
        price: 14,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    },
    {
        _id: "18",
        name: "Vegan Cake",
        image: drink_7,
        price: 12,
        description: "Food provides essential nutrients for overall health and well-being",
        category: "Cake"
    }
];

