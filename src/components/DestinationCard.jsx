
const DestinationCard = ({destinationInfo, example}) => {
    const {name, imageURL, internation, notes} = destinationInfo
    console.log(destinationInfo)
    return (
        <div>
            <h1>{name}</h1>
            <img src={imageURL}/>
            {example}
        </div>
    )
}

export default DestinationCard