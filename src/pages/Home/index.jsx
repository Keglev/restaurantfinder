import React, { useState } from "react"; // Import React and useState hook for managing state
import TextField, { Input } from "@material/react-text-field"; // Import TextField and Input component from material design
import logo from '../../assets/imgs/logo.svg'; // Import the logo image
import food from '../../assets/imgs/foodimages.jpeg' // Import a default food image in case of a restaurant has no picture available
import { 
    Container, 
    Search, 
    Logo, 
    Wrapper, 
    CarouselTitle, 
    Carousel, 
    ModalTitle, 
    ModalContent 
} from "./styles"; // Import styled components made for layout and styles

import MaterialIcon from "@material/react-material-icon"; // Import MaterialIcon for search icon
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from "../../components"; // Import custom components including a Skeleton 
// for better user experience (Card, RestaurantCard, Modal, etc.)
import { useSelector } from "react-redux"; // Import useSelector hook to access the Redux state


const Home = () => {
    // Define state variables
    const [inputValue, setInputValue] = useState(''); // Stores the input value from the search bar
    const [query, setQuery] = useState(null); // Stores the search query to be sent to the map
    const [placeId, setPlaceId] = useState(null); // Stores the ID of the selected restaurant
    const [modalOpened, setModalOpened] = useState(false); // Controls whether the modal is open or closed
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants); // Access restaurants and selected restaurant from Redux state
    // Carousel settings for displaying restaurants in a carousel
    const settings = {
            dots: false,
            infinite: true,
            autoplay: true, // Enables automatic sliding
            speed: 300, // Speed of transition
            slidesToShow: 4,  // Number of slides visible at once
            slidesToScroll: 4, // Number of slides to scroll at a time
            adaptiveHeight: true, // Adjusts the height based on the content
          };
    // Handles the "Enter" key press in the search bar
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue) // Set the search query when the "Enter" key is pressed
        }
    }
    // Opens the modal with the selected restaurant details
    function handleOpenModal(placeId) {
        setPlaceId(placeId); // Set the ID of the selected restaurant
        setModalOpened(true); // Open the modal
    }
    // Main render function
    return(
    <Wrapper> {/* Wrapper is the main container for the page */}
        <Container> {/* Container holds the search bar and the restaurant carousel */}
            <Search> {/* Search section with logo and search bar */}
                <Logo src={logo} alt="RestaurantFinder logo" /> {/* Logo at the top of the page */}
                    <TextField
                        label='Find restaurants'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}> {/* Search icon in the text field*/}
                    <Input
                        value={inputValue} 
                        onKeyUp={handleKeyPress} // Calls handleKeyPress when the user presses a key
                        onChange={(e) => setInputValue(e.target.value)} /> {/* Updates the input value when the user types */}
                    </TextField>
                    {/* Display the restaurant carousel if restaurants are available, otherwise show a loading spinner */}
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>In your Region</CarouselTitle>
                                <Carousel { ...settings}> {/* Carousel component for displaying restaurant cards */}
                                    {restaurants.map((restaurant) => (
                                <Card 
                                    key={restaurant.place_id} // Display the restaurant location in the map.
                                    photo ={restaurant.photos ? restaurant.photos[0].getUrl() : food} // Show restaurant photo or default food image
                                     title={restaurant.name} // Display restaurant name
                                />
                                 ))}
                            </Carousel>
                        </>
                    ) : (
                        <Loader /> // Show a loader if no restaurants are available, or while is fetching at the server
                    )}
            </Search>
             {/* Render a list of restaurant cards */}
           {restaurants.map((restaurant) => (
                <RestaurantCard 
                    onClick={() => handleOpenModal(restaurant.place_id)} // Open modal when a restaurant card is clicked
                    restaurant={restaurant} // Pass restaurant data to the RestaurantCard component
                />
           ))}
        </Container>
        <Map query={query} placeId={placeId} /> {/* Display the map with search query and selected restaurant */}
        {/* Modal to display selected restaurant details */}
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
           {restaurantSelected ? (
            <>
                {/* Display restaurant name, phone number, address, and open status */}
                <ModalTitle>{restaurantSelected?.name || 'Unknown Restaurant Name'}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number || 'No Phone Number'}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address|| 'No Address'}</ModalContent>
                <ModalContent> 
                    {/* Shows if the restaurant is open or not, it reads the oppening hours from Google API*/}
                    {restaurantSelected?.opening_hours?.open_now 
                        ? 'Open Now :-)' 
                        : 'Closed Now :('}
                </ModalContent>
            </>
           ) : (
            // Show skeleton loading if restaurant details are not available, or when the fetching data in the server is taking longer
            <>
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
            </>
           )}
        </Modal> 
    </Wrapper>
    );
};

export default Home;

