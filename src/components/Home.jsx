import { useState, useEffect } from "react"
import axios from "axios"
import DestinationCard from "./DestinationCard"
import "./Home.css"

const Home = () => {
    const [destinations, setDestinations] = useState([])
    const [wishList, setWishList] = useState([])
    const [showAll, setShowAll] = useState(true)

    const getDestinations = () => {
        console.log("in getDestinations")
        axios
            .get(
                `http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_TRAVEL_DESTINATION_KEY}`
            )
            .then(res => {
                console.log(res)
                setDestinations(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDestinations()
    }, [])

    const addToWishList = destination => {
        setWishList([...wishList, destination])
    }

    return (
        <div id="home-container">
            <button onClick={() => setShowAll(!showAll)}>{showAll ? 'See my Wishlist' : 'See all destinations'}</button>
            {showAll ? (
                <>
                    All Destinations
                    {destinations.map((destination, index) => {
                        return (
                            <DestinationCard
                                key={destination.id}
                                destinationInfo={destination}
                                addToWishList={addToWishList}
                            />
                        )
                    })}
                </>
            ) : (
                <>
                    Wishlist
                    {wishList.map((destination, index) => {
                        return (
                            <DestinationCard
                                key={destination.id}
                                destinationInfo={destination}
                                addToWishList={addToWishList}
                            />
                        )
                    })}
                </>
            )}
        </div>
    )
}

export default Home
