import React, { useState } from "react";
import TextField, { Input } from "@material/react-text-field";
import logo from '../../assets/logo.svg';
import food from '../../assets/foodimages.jpeg'
import { 
    Container, 
    Search, 
    Logo, 
    Wrapper, 
    CarouselTitle, 
    Carousel, 
    ModalTitle, 
    ModalContent 
} from "./styles";

import MaterialIcon from "@material/react-material-icon";
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from "../../components";
import { useSelector } from "react-redux";


const Home = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState(null);
    const [placeId, setPlaceId] = useState(null);
    const [modalOpened, setModalOpened] = useState(false);
    const { restaurants, restaurantSelected } = useSelector((state) => state.restaurants);

    const settings = {
            dots: false,
            infinite: true,
            autoplay: true,
            speed: 300,
            slidesToShow: 4,
            slidesToScroll: 4,
            adaptiveHeight: true,
          };
    
    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            setQuery(inputValue)
        }
    }

    function handleOpenModal(placeId) {
        setPlaceId(placeId);
        setModalOpened(true);
    }

    return(
    <Wrapper>
        <Container>
            <Search>
                <Logo src={logo} alt="RestaurantFinder logo" />
                    <TextField
                        label='Find restaurants'
                        outlined
                        trailingIcon={<MaterialIcon role="button" icon="search"/>}>
                    <Input
                        value={inputValue} 
                        onKeyUp={handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                    </TextField>
                    {restaurants.length > 0 ? (
                        <>
                            <CarouselTitle>In your Region</CarouselTitle>
                                <Carousel { ...settings}>
                                    {restaurants.map((restaurant) => (
                                <Card 
                                    key={restaurant.place_id} 
                                    photo ={restaurant.photos ? restaurant.photos[0].getUrl() : food} 
                                     title={restaurant.name}
                                />
                                 ))}
                            </Carousel>
                        </>
                    ) : (
                        <Loader />
                    )}
            </Search>
           {restaurants.map((restaurant) => (
                <RestaurantCard 
                    onClick={() => handleOpenModal(restaurant.place_id)} 
                    restaurant={restaurant} 
                />
           ))}
        </Container>
        <Map query={query} placeId={placeId} />
        <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
           {restaurantSelected ? (
            <>
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>
                    {restaurantSelected?.opening_hours?.open_now 
                        ? 'Open Now :-)' 
                        : 'Closed Now :('}
                </ModalContent>
            </>
           ) : (
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

