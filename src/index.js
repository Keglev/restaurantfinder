import React from 'react';
import ReactDOM from 'react-dom/client'; // Import ReactDOM for rendering the React app in the DOM
import App from './App'; // Import the main App component
import '@material/react-text-field/dist/text-field.css';// Import Material UI styles for text fields
import '@material/react-material-icon/dist/material-icon.css'; // Import Material UI styles for icons   
import 'slick-carousel/slick/slick.css'; // Import Slick Carousel base CSS for styling
import 'slick-carousel/slick/slick-theme.css'; // Import additional theme CSS for Slick Carousel


// Create a root container in the DOM to render the React application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the App component inside React's StrictMode to catch potential problems early
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
