import Slider from "react-slick"; // Importing the Slider component from the "react-slick" library for carousel functionality.
import styled from "styled-components"; // Importing styled-components for defining styled components.

// Wrapper is the main container that uses flexbox to align child elements in a row.
export const Wrapper = styled.div`
    display: flex; /* Enables flexbox layout */
    flex-direction: row; /* Aligns child components horizontally */
`;

// Container is a sidebar element that holds the search bar and carousel.
// It has a fixed width, fills the height of the viewport, and enables vertical scrolling if content overflows.
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background}; /* Sidebar background color from the theme */
    width: 360px; /* Fixed width for the sidebar */
    height: 100vh; /* Full height of the viewport */
    overflow-y: auto; /* Enables vertical scrolling if content exceeds the container height */
`;

// Search section styling, which contains the search bar and related components.
// Uses flexbox to align its content vertically and center-aligns them.
export const Search = styled.section`
    display: flex; /* Flexbox layout for vertical alignment */
    flex-direction: column; /* Stack elements vertically */
    justify-content: center; /* Center content vertically */
    background-color: #ffffff; /* White background for the search section */
    padding: 16px; /* Padding around the search content */
`; 

// Logo component styling for the app's logo.
// Adds a bottom margin to create spacing between the logo and other elements.
export const Logo = styled.img`
    margin-bottom: 15px; /* Spacing below the logo */
`;

// Map component styling that defines the map container.
// Sets a fixed width and a red background, meant for map display purposes.
export const Map = styled.div`
    background-color: red; /* Placeholder background color for the map */
    width: 500px; /* Fixed width for the map container */
`;

// Carousel component for displaying restaurant cards, extending the "react-slick" Slider component.
// Adds right margin to each slide in the carousel to space them out.
export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right: 30px; /* Adds space between the slides */
    };
`;

// CarouselTitle component for the carousel heading.
// Defines typography settings such as font size, weight, color, and spacing.
export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular}; /* Font family from the theme */
    color: ${(props) => props.theme.colors.text}; /* Text color from the theme */
    font-size: 24px; /* Font size for the title */
    font-weight: bold; /* Bold font weight for emphasis */
    line-height: 29px; /* Line height for readability */
    margin: 16px 0; /* Spacing above and below the title */
`;

// ModalTitle component for the modal's title text.
// Adds margin spacing and typography settings such as font size, color, and line height.
export const ModalTitle = styled.p`
    margin-bottom: 10px; /* Space below the modal title */
    letter-spacing: 0.11px; /* Small letter spacing for better readability */
    font-family: ${(props) => props.theme.fonts.regular}; /* Font family from the theme */
    color: ${(props) => props.theme.colors.text}; /* Text color from the theme */
    line-height: 29px; /* Line height for readability */
    font-size: 24px; /* Font size for the modal title */
    font-weight: bold; /* Bold font weight for emphasis */
`;

// ModalContent component for the modal's content text.
// Defines typography settings such as font size, color, and margin.
export const ModalContent = styled.p`
    margin-bottom: 10px; /* Space below each content line */
    font-family: ${(props) => props.theme.fonts.regular}; /* Font family from the theme */
    color: ${(props) => props.theme.colors.text}; /* Text color from the theme */
    line-height: 19px; /* Line height for readability */
    font-size: 16px; /* Font size for the modal content */
    font-weight: normal; /* Normal font weight */
`;
