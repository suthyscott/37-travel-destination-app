import { useState, useEffect } from "react"
import axios from "axios"
import DestinationCard from "./DestinationCard"
import "./Home.css"

const Home = () => {
    const [destinations, setDestinations] = useState([])
    const [wishList, setWishList] = useState([])
    const [showAll, setShowAll] = useState(true)
    const [searchInput, setSearchInput] = useState("")

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
        <main id="home-container">
            <button onClick={() => setShowAll(!showAll)}>
                {showAll ? "See my Wishlist" : "See all destinations"}
            </button>
            <div>
                <label>Search for a destination:</label>
                <input
                    placeholder="type destination name or keyword"
                    onChange={e => setSearchInput(e.target.value)}
                    value={searchInput}
                />
            </div>
            {showAll ? (
                <div id="cards-container">
                    
                    {destinations
                        .filter(destination => {
                            return (
                                destination.name
                                    .toLowerCase()
                                    .includes(searchInput.toLowerCase()) ||
                                destination.notes
                                    .toLowerCase()
                                    .includes(searchInput.toLowerCase())
                            )
                        })
                        .map((destination, index) => {
                            return (
                                <DestinationCard
                                    key={destination.id}
                                    destinationInfo={destination}
                                    addToWishList={addToWishList}
                                />
                            )
                        })}
                </div>
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
        </main>
    )
}

export default Home
