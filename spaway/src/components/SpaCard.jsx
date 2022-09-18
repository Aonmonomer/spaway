import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../App.css'
import Client from '../services/api'
import ReviewCard from './ReviewCard'
import ReviewFields from './ReviewFields'

const SpaCard = (props) => {
  const [spa, setSpa] = useState('')
  const [review, setReview] = useState('')

  // const currentUserId = props.user.id
  // console.log({ props })

  let { id } = useParams()
  const initialState = {
    title: '',
    review: '',
    rating: '',
    // userId: currentUserId,
    spaId: id
  }

  const [formState, setFormState] = useState(initialState)

  useEffect(() => {
    const selectedSpa = async () => {
      try {
        let res = await Client.get(`${BASE_URL}/api/spas/view/${id}`)
        setSpa(res.data)
      } catch (eer) {}
    }
    selectedSpa()
  }, [])

  const getReviews = async () => {
    let res = await Client.get(`${BASE_URL}/api/reviews/view/find_by_spa/${id}`)
    setReview(res.data)
  }

  useEffect(() => {
    getReviews()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let res = await Client.post(`${BASE_URL}/api/reviews/create`, formState)
      setFormState(initialState)
      getReviews()
      alert('You have successfully added the review!')
    } catch (e) {
      console.error(e)
    }
    //navigate(`/spas/${id}`)
  }

  return (
    <div className="details_page">
      <div className="details_grid">
        <h1 className="spa_name">{spa.spaName}</h1>
        <img className="spa_card" src={spa.imageUrl} alt="spa image" />
        <div className="details_container">
          <h3 className="details_header">Phone Number</h3>
          <h3 className="detail">{spa.phoneNumber}</h3>
          <h3 className="details_header2">Location</h3>
          <h3 className="detail">{spa.location}</h3>
          <h3 className="detail_header3">Description</h3>
          <h3 className="detail">{spa.description}</h3>
        </div>

        <div className="list_review">
          {review
            ? review.map((review) => (
                <ReviewCard review={review} getReviews={getReviews} />
              ))
            : ''}
        </div>

        <div className="forms_section">
          <h2 className="forms_header">Review this Spa</h2>
          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <ReviewFields handleChange={handleChange} formState={formState} />
              <div className="button1">
                <button type="submit" onClick={handleSubmit}>
                  Submit review
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default SpaCard
