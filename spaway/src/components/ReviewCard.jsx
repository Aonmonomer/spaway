import { useState } from 'react'
import { BASE_URL } from '../globals'
import Client from '../services/api'
import ReviewFields from './ReviewFields'
const ReviewCard = ({ review, getReviews }) => {
  const [isEditing, setIsEditing] = useState(false)
  const [formState, setFormState] = useState(review)

  const startEdit = () => {
    setIsEditing(true)
  }
  const cancelEdit = () => {
    setIsEditing(false)
  }
  const remove = async () => {
    await Client.delete(`${BASE_URL}/api/reviews/${review.id}`)
    getReviews()
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      let res = await Client.put(
        `${BASE_URL}/api/reviews/${review.id}`,
        formState
      )
      cancelEdit()
      getReviews()
    } catch (e) {
      console.error(e)
    }
  }

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  if (isEditing)
    return (
      <>
        <ReviewFields handleChange={handleChange} formState={formState} />
        <button onClick={cancelEdit}>Cancel</button>
        <button onClick={handleSubmit}>Save</button>
      </>
    )
  return (
    <div className="review_grid" key={review.id}>
      <h2>{review.title}</h2>
      <h4>Rating: {review.rating} of 5</h4>
      <h4>User Id: {review.userId}</h4>
      <p>Review: {review.review}</p>
      <button onClick={startEdit}>Update</button>
      <button onClick={remove}>Delete</button>
    </div>
  )
}

export default ReviewCard
