import React from "react"; // Import React to define the component
import Lottie from "react-lottie"; // Import the Lottie component for displaying animations

import animationData from '../../assets/restaurants-loading.json'; // Import the JSON file containing the Lottie animation data


// Export a default functional component (Loader)
export default () => {
    // Define the default options for the Lottie animation
    const defaultOptions = {
        loop: true, // Set the animation to loop continuously
        autoplay: true, // Automatically start playing the animation
        animationData, // Use the imported animation data from the JSON file
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice', // Preserve the aspect ratio of the animation
        },
    };

    // Render the Lottie animation with the defined options
    return <Lottie options={defaultOptions} />;
};
