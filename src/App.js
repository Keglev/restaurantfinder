import React from 'react'; // Import the React library for creating components
import { Provider } from 'react-redux'; // Import Provider from react-redux to integrate the Redux store
import { ThemeProvider } from 'styled-components'; // Import ThemeProvider from styled-components for theming
import theme from './theme'; // Import the custom theme object from the theme file
import Home from './pages/Home'; // Import the Home component from the pages directory
import { Reset } from 'styled-reset'; // Import Reset to normalize styles across different browsers

import store from './redux/store'; // Import the Redux store configuration

function App() {
  return (  
    // Wrap the application with the Redux Provider to give access to the store throughout the app
    <Provider store={store}>
      <ThemeProvider theme={theme}>
      <Reset />
      <Home />
    </ThemeProvider>
    </Provider>
  );
}

export default App;  // Export the App component as the default export of this file
