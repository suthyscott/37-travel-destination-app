import { useState, useEffect } from "react"
import axios from 'axios'
// import {REACT_APP_TRAVEL_DESTINATION_KEY} = process.env

// console.log(REACT_APP_TRAVEL_DESTINATION_KEY)
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
        // another function
    }, [])

    return (
        <div>
            Home.jsx
        </div>
    )
}

export default Home