import React, { useState } from "react"; // React and useState hook for managing component state.
import ReactStars from 'react-rating-stars-component'; // Component for rendering star ratings.
import { Restaurant, RestaurantInfo, RestaurantPicture, Title, Address } from "./styles"; // Importing styled components.
import food from '../../assets/foodimages.jpeg'; // Default image if the restaurant doesn't have one.
import Skeleton from "../Skeleton"; // Skeleton component for loading placeholder effect.

const RestaurantCard = ({ restaurant, onClick }) => {
    // State to manage if the restaurant's image has loaded.
    const [imageLoaded, setImageLoaded] = useState(false);

    return (
        // Wrapper component for the restaurant card that triggers a click event.
        <Restaurant onClick={onClick}> 
            {/* Container for restaurant's information (name, rating, and address). */}
            <RestaurantInfo>
                {/* Restaurant name displayed as the title. */}
                <Title>{restaurant.name}</Title> 
                {/* Star rating component with the restaurant's rating value. */}
                <ReactStars count={5} isHalf value={restaurant.rating} edit={false} activeColor="#e7711c" />
                {/* Address or formatted address of the restaurant */}
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>

            {/* Image of the restaurant or a default image if none is available. */}
            <RestaurantPicture
                imageLoaded={imageLoaded} // Conditional to show/hide image.
                src={restaurant.photos ? restaurant.photos[0].getUrl() : food} // Either the restaurant's photo or a default one.
                onLoad={() => setImageLoaded(true)} // Sets imageLoaded to true once the image has loaded.
                alt="RestaurantPhoto" // Alt text for accessibility.
            />
            
            {/* Skeleton loading animation until the image is fully loaded. */}
            {!imageLoaded && <Skeleton width="100px" height="100px" />} 
        </Restaurant>
    );
};

export default RestaurantCard; // Export the RestaurantCard component.
