// Define action types for setting the restaurant list and a single selected restaurant.
export const Types = {
    SET_RESTAURANTS: 'restaurants/SET_RESTAURANTS', // Action type for setting the list of restaurants.
    SET_RESTAURANT: 'restaurants/SET_RESTAURANT', // Action type for setting a single selected restaurant.
};

// Initial state of the restaurant-related data.
// restaurants: An array to store the list of restaurants.
// restaurantSelected: Holds the data of a single selected restaurant (initially null).
const initialState = {
    restaurants: [], // Empty array to hold restaurant data.
    restaurantSelected: null, // Null value to indicate no restaurant is selected initially.
};

// Reducer function that handles state changes based on the action type.
// It listens for actions and updates the state accordingly.
export default function reducer(state = initialState, action) {
    switch (action.type) {
        // When the SET_RESTAURANTS action is dispatched, update the restaurants array in the state with the provided data.
        case Types.SET_RESTAURANTS:
            return { ...state, restaurants: action.payload }; // Spread the current state and update the restaurants list.

        // When the SET_RESTAURANT action is dispatched, update the restaurantSelected field in the state with the selected restaurant data.
        case Types.SET_RESTAURANT:
            return { ...state, restaurantSelected: action.payload }; // Spread the current state and set the selected restaurant.

        // If the action type does not match any cases, return the current state unchanged.
        default:
            return state; // Return the current state if no actions match.
    }
}

// Action creator for setting the list of restaurants.
// It returns an action with the SET_RESTAURANTS type and the restaurants data as the payload.
export function setRestaurants(restaurants) {
    return {
        type: Types.SET_RESTAURANTS, // Action type.
        payload: restaurants, // The list of restaurants to update the state with.
    };
}

// Action creator for setting the selected restaurant.
// It returns an action with the SET_RESTAURANT type and the selected restaurant data as the payload.
export function setRestaurant(restaurant) {
    return {
        type: Types.SET_RESTAURANT, // Action type.
        payload: restaurant, // The selected restaurant data to update the state with.
    };
}
