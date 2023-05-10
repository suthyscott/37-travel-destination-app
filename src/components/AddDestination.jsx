import {useState} from 'react'

const AddDestination = () => {
  const [name, setName] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [international, setInternational] = useState(false)
  const [notes, setNotes] = useState('')

  console.log(international)
  return (
    <form>
      <input placeholder='Destination name' onChange={e => setName(e.target.value)} value={name}/>
      <input placeholder='Image url' onChange={e => setImageURL(e.target.value)} value={imageURL}/>
      <input type='checkbox' checked={international ? true : false} onChange={e => setInternational(!international)} />
      <input placeholder='Enter notes here' onChange={e => setNotes(e.target.value)} value={notes}/>

    </form>
  )
}

export default AddDestination