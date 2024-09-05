import React from "react";
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, RestaurantPicture, Title, Address } from "./styles";
import food from '../../assets/foodimages.jpeg';

const RestaurantCard = ({ restaurant, onClick }) => 
    {<Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPicture 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : food } 
            alt="RestaurantPhoto"
        />
    </Restaurant>

};

export default RestaurantCard;