// import {useState} from 'react'
// import axios from 'axios'

// const AddDestination = () => {
//   const [name, setName] = useState('')
//   const [imageURL, setImageURL] = useState('')
//   const [international, setInternational] = useState(false)
//   const [notes, setNotes] = useState('')

//   console.log(international)

//   const submitHandler = e => {
//     e.preventDefault()

//     let bodyInfo = {
//       name,
//       imageURL,
//       international,
//       notes
//     }

//     axios.post(`http://localhost:4545/api/destinations?apiKey=${process.env.REACT_APP_TRAVEL_DESTINATION_KEY}`, bodyInfo)
//       .then(res => {
//         console.log(res)
//       })
//       .catch(err => console.log(err))

//   }
//   return (
//     <form onSubmit={e => submitHandler(e)}>
//       <input placeholder='Destination name' onChange={e => setName(e.target.value)} value={name}/>
//       <input placeholder='Image url' onChange={e => setImageURL(e.target.value)} value={imageURL}/>
//       <input type='checkbox' checked={international ? true : false} onChange={e => setInternational(!international)} />
//       <input placeholder='Enter notes here' onChange={e => setNotes(e.target.value)} value={notes}/>
//       <button>Submit</button>
//     </form>
//   )
// }

// export default AddDestination

import {useState} from 'react'
import axios from 'axios'
import {Formik} from 'formik'

const AddDestination = () => {

  const initialValues = {
    name: '',
    imageURL: '',
    international: false,
    notes: ''
  }

  const submitHandler = values => {
    console.log(values)
  }

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={submitHandler}>
        {(params) => {
          const {values, handleChange, handleSubmit} = params
          return (
            <form>
              <input placeholder='Destination name' value={values.name} onChange={handleChange} name='name'/>
              <input/>
              <input/>
              <input/>
            </form>
          )
        }}
      </Formik>
    </div>
  )
}

export default AddDestination