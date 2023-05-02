import { useState, useEffect } from "react"
import axios from 'axios'
import DestinationCard from "./DestinationCard"

const Home = () => {
    const [destinations, setDestinations] = useState([])

    const getDestinations = () => {
        console.log('in getDestinations')
        axios.get(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_TRAVEL_DESTINATION_KEY}`)
            .then(res => {
                console.log(res)
                setDestinations(res.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getDestinations()
    }, [])

    return (
        <div>
            {destinations.map((destination, index) => {
                return <DestinationCard key={destination.id} destinationInfo={destination} example='example text'/>
            })}
        </div>
    )
}

export default Home