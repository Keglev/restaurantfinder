import styled from "styled-components"; // Import styled-components library for styling.


/* Flexbox to arrange restaurant info and image side by side. */
export const Restaurant = styled.div`
    
    display: flex;
    justify-content: space-between; 
    cursor: pointer; 
    margin-top: 5px; 
    padding: 16px; 
    background-color: #ffffff; 
    border-left: 5px solid transparent; 

    /* On hover, change background and border color to match theme. */
    :hover {
        background-color: ${(props) => props.theme.colors.background}; /* Hover background color from theme */
        border-left-color: ${(props) => props.theme.colors.primary}; /* Highlight border on hover */
    }
`; 

 /* Flexbox to stack restaurant details vertically (name, rating, address). */
export const RestaurantInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

/* Styling for the restaurant name (title). */
export const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular}; /* Use regular font from theme */
    color: ${(props) => props.theme.colors.text}; /* Text color from theme */
    font-size: 24px; 
    font-weight: bold; 
    line-height: 29px; 
    margin-bottom: 10px; 
`;

  /* Styling for the restaurant's address text. */
export const Address = styled.span`
    font-family: ${(props) => props.theme.fonts.regular}; /* Regular font from theme */
    color: ${(props) => props.theme.colors.text}; /* Text color from theme */
    font-size: 16px; 
    line-height: 19px; 
    margin-bottom: 10px; 
    margin-top: 10px; 
`;


 /* Conditional rendering: display the image only when it's fully loaded. */
export const RestaurantPicture = styled.img`
    display: ${(props) => (props.imageLoaded ? 'block' : 'none')}; 
    width: 100px; 
    height: 100px; 
    object-fit: cover; 
    border-radius: 6px; 
`;
