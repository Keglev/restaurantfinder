import React, { useEffect, useState } from "react"; // Import React, useEffect and useState for managing component state and lifecycle
import styled from "styled-components"; // Import styled-components for styling
import Skeleton from "../Skeleton"; // Import Skeleton component to display a loading placeholder


// Styled component for the card that holds the image and title
const Card = styled.div`
    display: flex;
    justify-content: center;
    padding: 5px;
    width: 90px;
    height: 90px;
    border-radius: 6px;
    background-image: url(${(props) => props.photo}); // Dynamically set the background image
    background-size: cover; // Ensure the background image covers the entire card
`;

// Styled component for the title text displayed on the card
const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular}; // Use the regular font from the theme
    color: #ffffff; // White font color for visibility over the image
    font-size: 16px; // Set the font size
`;

// ImageCard component accepts 'photo' and 'title' as props
const ImageCard = ({ photo, title }) => {
    const [imageLoaded, setImageLoaded] = useState(false); // State to track if the image is loaded

    // useEffect hook runs when the component is mounted or when 'photo' changes
    useEffect(() => {
        const imageLoader = new Image(); // Create a new image object
        imageLoader.src = photo; // Set the image source to the passed 'photo' prop
        imageLoader.onload = () => setImageLoaded(true); // Once the image is loaded, update the state to true
    }, [photo]); // Dependency array ensures the effect runs when the 'photo' prop changes

    return (
        <>
        {/* Conditionally render the card or a skeleton loader based on whether the image is loaded */}
        {imageLoaded ? ( 
            <Card photo={photo}> {/* Render the Card component with the background photo */}
                <Title>{title}</Title> {/* Render the title on the card */}
            </Card>
        ) : (
            <Skeleton width="90px" height="90px" /> // Show a skeleton loader while the image is loading
        )}
        </>
    );
};

export default ImageCard;