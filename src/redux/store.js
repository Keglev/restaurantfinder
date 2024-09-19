// Import the configureStore function from @reduxjs/toolkit.
// configureStore simplifies store setup by providing good defaults for Redux, such as adding middleware and enabling Redux DevTools.
import { configureStore } from '@reduxjs/toolkit'; 

// Import the root reducer, which is the combined reducers from the reducers folder.
import rootReducer from './reducers';

// Create the Redux store using the configureStore function.
// The reducer option points to the rootReducer, which handles the global state by combining multiple slice reducers.
const store = configureStore({
    reducer: rootReducer, // Attach the root reducer to the store, which will handle all state changes.
});

// Export the store so it can be used throughout the app.
// The store is the central part of Redux that holds the state of the entire application.
export default store;
