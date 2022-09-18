// import { BASE_URL } from '../globals'
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom'
// import '../App.css'
// import Client from '../services/api'

// const SpaCard = (props) => {
//   let navigate = useNavigate()
//   const [spa, setSpa] = useState('')
//   const [review, setReview] = useState('')

//   const initialState = {
//     spaName: '',
//     phoneNumber: '',
//     location: '',
//     description: '',
//     imageUrl: ''
//   }

//   const [formState, setFormState] = useState(initialState)
//   let { id } = useParams()

//   useEffect(() => {
//     const selectedSpa = async () => {
//       try {
//         let res = await Client.get(`${BASE_URL}/api/spas/view/${id}`)
//         setSpa(res.data)
//       } catch (eer) {}
//     }
//     setSpa(selectedSpa)
//   }, [])

//   useEffect(() => {
//     const getReviews = async () => {
//       let res = await Client.get(
//         `${BASE_URL}/api/reviews/view/find_by_spa/${id}`
//       )
//       console.log(res.data)
//       setReview(res.data)
//     }
//     getReviews()
//   }, [props.review])

//   const handleChange = (event) => {
//     setFormState({ ...formState, [event.target.id]: event.target.value })
//   }

//   const handleSubmit = async (event) => {
//     event.preventDefault()
//     let res = await Client.put(`${BASE_URL}/api/spas/${id}`, formState)
//     setFormState(initialState)
//     alert('You have successfully updated the spa!')
//     navigate('/feed')
//   }

//   const deleteSpa = async () => {
//     let res = await Client.delete(`${BASE_URL}/api/spas/${id}`, formState)
//     alert('You have successfully deleted the spa!')
//     navigate('/feed')
//   }
//   const refreshPage = () => {
//     window.location.reload()
//   }

//   return (
//     <div className="details_page">
//       <div className="details_grid">
//         <h1 className="spa_name">{spa.spaName}</h1>
//         <img className="spa_card" src={spa.imageUrl} alt="spa image" />
//         <div className="details_container">
//           <h3 className="details_header">Phone Number</h3>
//           <h3 className="detail">{spa.phoneNumber}</h3>
//           <h3 className="details_header2">Location</h3>
//           <h3 className="detail">{spa.location}</h3>
//           <h3 className="detail_header3">Description</h3>
//           <h3 className="detail">{spa.description}</h3>
//         </div>

//         <div className="list_review">
//           {review
//             ? review.map((review) => (
//                 <div className="review_grid" key={review.id}>
//                   <h2>{review.title}</h2>
//                   <h4>Rating: {review.rating} of 5</h4>
//                   <p>Review: {review.review}</p>
//                 </div>
//               ))
//             : ''}
//         </div>

//         <div className="forms_section">
//           <h2 className="forms_header">Review this Spa</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="form_container">
//               <div className="input1">
//                 <label htmlFor="title">Title: </label>
//                 <textarea
//                   type="text"
//                   id="title"
//                   onChange={handleChange}
//                   value={formState.title}
//                   placeholder="Please write your review"
//                 />
//               </div>
//               <div className="input1">
//                 <label htmlFor="spa_image"> . . Image:</label>
//                 <textarea
//                   type="text"
//                   id="imageUrl"
//                   onChange={handleChange}
//                   value={formState.imageUrl}
//                   placeholder={spa.imageUrl}
//                 />
//               </div>
//               <div className="input1">
//                 <label htmlFor="phone_number">Phone Number:</label>
//                 <input
//                   type="text"
//                   id="phoneNumber"
//                   onChange={handleChange}
//                   value={formState.phoneNumber}
//                   placeholder={spa.phoneNumber}
//                 />
//               </div>
//               <div className="input2">
//                 <label htmlFor="location">Location:</label>
//                 <textarea
//                   type="text"
//                   id="location"
//                   onChange={handleChange}
//                   value={formState.location}
//                   placeholder={spa.location}
//                 />
//               </div>
//               <div className="input3">
//                 <label htmlFor="description">Description:</label>
//                 <textarea
//                   type="text"
//                   id="description"
//                   onChange={handleChange}
//                   value={formState.description}
//                   placeholder={spa.description}
//                 />
//               </div>
//               <div className="form_button"></div>
//               <div className="button1">
//                 <button type="submit" onClick={refreshPage}>
//                   Update Spa
//                 </button>
//               </div>
//             </div>
//           </form>

//           <div className="button2">
//             <button onClick={deleteSpa}>Delete Spa</button>
//           </div>
//           <div className="button3">
//             <button onClick={() => navigate('/review')}>Review this Spa</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
// export default SpaCard
