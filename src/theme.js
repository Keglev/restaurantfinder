// Define a theme object that holds design-related properties such as colors and fonts.
// This theme will be used throughout the application to maintain consistent styling.

const theme = {
    // Define a set of colors used in the application.
    colors: {
        primary: '#6200ee', // The primary color, often used for buttons, links, and other highlights.
        background: '#00000014', // The background color, typically used for page or section backgrounds.
        text: '#000000B3', // The text color, used for most of the text in the application.
        success: '#135E01', // Color representing success states, like confirmations or success messages.
    },
    
    // Define a set of fonts used in the application.
    fonts: {
        regular: 'Roboto, sans-serif', // The default font style for text, using Roboto or a fallback sans-serif font.
    },
};

// Export the theme object so it can be used throughout the application.
// Components can access this theme to apply consistent styling via styled-components or other CSS-in-JS libraries.
export default theme;
