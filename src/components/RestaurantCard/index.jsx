import React, { useState } from "react";
import ReactStars from 'react-rating-stars-component';
import { Restaurant, RestaurantInfo, RestaurantPicture, Title, Address } from "./styles";
import food from '../../assets/foodimages.jpeg';
import Skeleton from "../Skeleton";

const RestaurantCard = ({ restaurant, onClick }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    return (
    <Restaurant onClick={onClick}>
        <RestaurantInfo>
            <Title>{restaurant.name}</Title>
            <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
            <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
        </RestaurantInfo>
        <RestaurantPicture
            imageLoaded={imageLoaded} 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : food } 
            onLoad={() => setImageLoaded(true)}
            alt="RestaurantPhoto"
        />
        {!imageLoaded && <Skeleton width="100px" height="100px" />}
    </Restaurant>
    );
};

export default RestaurantCard;