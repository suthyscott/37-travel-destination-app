import {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const DestinationDetails = () => {
    const {id} = useParams()
    const [destInfo, setDestInfo] = useState({})

    const getDestInfo = () => {
        axios.get(`http://localhost:4545/api/destination/${id}?apiKey=${process.env.REACT_APP_TRAVEL_DESTINATION_KEY}`)
            .then(res => setDestInfo(res.data))
            .catch(err => console.log(err))
    }

    useEffect(getDestInfo, [])
    
  return (
    <div>{destInfo.name}</div>
  )
}

export default DestinationDetails