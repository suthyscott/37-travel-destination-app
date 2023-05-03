import './DestinationCard.css'

const DestinationCard = ({destinationInfo, addToWishList}) => {
    const {name, imageURL, international, notes} = destinationInfo
    console.log(destinationInfo)
    return (
        <div className="destination-card-container">
            <h1>{name}</h1>
            <img src={imageURL}/>
            <p>International: {international ? 'true' : 'false'}</p>
            <p>{notes}</p>
            <button onClick={() => addToWishList(destinationInfo)}>Add To Wish List</button>
        </div>
    )
}

export default DestinationCard