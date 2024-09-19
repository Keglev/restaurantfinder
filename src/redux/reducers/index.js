// Import the combineReducers function from Redux.
// This function helps combine multiple reducers into a single root reducer.
import { combineReducers } from "redux";

// Import the restaurants reducer from the restaurants module.
import restaurants from '../modules/restaurants';

// Use combineReducers to combine different reducers into one root reducer.
// In this case, we're combining only the "restaurants" reducer.
// As your app grows, you can add more reducers here to manage other parts of the state.
export default combineReducers({
    restaurants, // The "restaurants" reducer will manage the state related to restaurants.
});
