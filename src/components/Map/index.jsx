import React, { useState, useEffect } from "react"; // Import React, useState, and useEffect for managing state and lifecycle events
import { useDispatch, useSelector } from "react-redux"; // Import Redux hooks to dispatch actions and select state
import { GoogleApiWrapper, Map, Marker } from "google-maps-react"; // Import Google Maps components for rendering a map and markers

import { setRestaurants, setRestaurant } from '../../redux/modules/restaurants'; // Import Redux actions to update the state with restaurant data

// Define the MapContainer component
export const MapContainer = (props) => {
    const dispatch = useDispatch(); // Initialize dispatch to send actions to Redux
    const { restaurants } = useSelector((state) => state.restaurants); // Select restaurants data from the Redux store
    const [map, setMap] = useState(null); // Local state to store the Google Maps instance
    const { google, query, placeId } = props; // Destructure props passed into the component

    // useEffect hook to trigger search when the query prop changes
    useEffect(() => {
        if (query) {
            searchByQuery(query); // Call function to search for restaurants based on query
        }
    }, [query]); // Runs the effect whenever the 'query' prop changes

    // useEffect hook to fetch restaurant details when placeId changes
    useEffect(() => { 
        if (placeId) {
            getRestaurantById(placeId); // Fetch restaurant details by ID
        }
    }, [placeId]); // Runs the effect whenever the 'placeId' prop changes

    // Function to fetch restaurant details by its placeId
    function getRestaurantById(placeId) {
        const service = new google.maps.places.PlacesService(map); // Initialize the PlacesService with the Google Map instance
        dispatch(setRestaurant(null)); // Clear current restaurant details in Redux state

        // Define the request to fetch specific fields for the restaurant
        const request = {
            placeId,
            fields: ['name', 'opening_hours', 'formatted_address', 'formatted_phone_number'],
        };
        
        // Fetch restaurant details and dispatch to Redux store if successful
        service.getDetails(request, (place, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurant(place)); // Update Redux state with the restaurant details
            }
        });
    }

    // Function to search restaurants by query (user's input)
    function searchByQuery(query) {
        const service = new google.maps.places.PlacesService(map); // Initialize PlacesService
        dispatch(setRestaurants([])); // Clear current list of restaurants

        // Define the search request parameters
        const request = {
            location: map.center, // Search around the current map center
            radius: '200', // Define the search radius (200 meters)
            type: ['restaurant'], // Search specifically for restaurants
            query, // The query string (restaurant name or keyword)
        };

        // Perform a text search and dispatch results to Redux store
        service.textSearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results)); // Update Redux state with the search results
            }
        });
    }

    // Function to search nearby restaurants based on the map center
    function searchNearby(map, center) {
        const service = new google.maps.places.PlacesService(map); // Initialize PlacesService
        dispatch(setRestaurants([])); // Clear current list of restaurants

        // Define the search request for nearby restaurants
        const request = {
            location: center, // Search around the provided map center
            radius: '20000', // Define the search radius (20 kilometers)
            type: ['restaurant'], // Search for restaurants
        };

        // Perform a nearby search and dispatch results to Redux store
        service.nearbySearch(request, (results, status) => {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                dispatch(setRestaurants(results)); // Update Redux state with nearby search results
            }
        });
    }

    // Function called when the map is ready to load and set the Google Map instance
    function onMapReady(_, map) {
        setMap(map); // Store the map instance in the component state
        searchNearby(map, map.center); // Perform a nearby search when the map is ready
    }

    return (
        // Render the Map component with Google Maps, centered around the user's current location
        <Map 
            google={google} 
            centerAroundCurrentLocation 
            onReady={onMapReady} // Callback when the map is ready
            onRecenter={onMapReady} // Callback when the map is re-centered
            { ...props } // Spread other props
        >
            {/* Map through the list of restaurants and render a Marker for each one */}
            {restaurants.map((restaurant) => (
                <Marker 
                    key={restaurant.place_id} 
                    name={restaurant.name} 
                    position={{
                        lat: restaurant.geometry.location.lat(), // Latitude of the restaurant
                        lng: restaurant.geometry.location.lng(), // Longitude of the restaurant
                    }}
                />
            ))}
        </Map>
    );
};

// Wrap the MapContainer component with GoogleApiWrapper to provide the Google API key and additional settings
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_API_KEY, // Load API key from environment variables
    language: 'eng', // Set the language for the map
})(MapContainer);
