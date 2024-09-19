import React from "react"; // Importing React for the functional component.
import styled, { keyframes } from 'styled-components'; // Importing styled-components and keyframes for animations.

// Define a keyframe animation for the loading skeleton.
// This animation alternates the opacity of the skeleton from 0.5 to 1, creating a pulsing effect.
const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5; /* Start with 50% opacity */
    }
    100% {
        opacity: 1; /* End with full opacity */
    }
`;

// Create a styled div (skeleton placeholder) that mimics the shape of the content being loaded.
// It has a gray background, rounded corners, and a pulsing animation to indicate loading.
const LoadingSkeleton = styled.div`
    background-color: gray; /* Gray background to resemble a loading placeholder */
    border-radius: 6px; /* Rounded corners for a cleaner look */
    margin-bottom: 10px; /* Margin at the bottom to separate skeleton elements */
    min-width: ${(props) => props.width}; /* Minimum width is passed as a prop */
    height: ${(props) => props.height}; /* Height is passed as a prop */
    animation: ${KeyFrameLoading} 500ms infinite alternate; /* Apply the loading animation, alternating every 500ms */
`;

// Functional component that renders the loading skeleton with the specified width and height.
// This component is used as a placeholder while content is loading.
export default ({ width, height }) => <LoadingSkeleton width={width} height={height} />;
