import './DestinationCard.css'
import { useNavigate } from 'react-router-dom'

const DestinationCard = ({destinationInfo, addToWishList}) => {
    const {name, imageURL, international, notes, id} = destinationInfo
    const navigate = useNavigate()

    return (
        <div className="destination-card-container">
            <h1>{name}</h1>
            <img src={imageURL}/>
            <p>International: {international ? 'true' : 'false'}</p>
            <p>{notes}</p>
            <button onClick={() => addToWishList(destinationInfo)}>Add To Wish List</button>
            <button onClick={() => navigate(`/details/${id}`)}>See more details</button>
        </div>
    )
}

export default DestinationCard