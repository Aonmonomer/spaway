const ReviewFields = ({ formState, handleChange }) => {
  return (
    <div className="review_fields">
      <div className="input1">
        <label htmlFor="title">Title: </label>
        <textarea
          rows="1"
          cols="48"
          type="text"
          id="title"
          onChange={handleChange}
          value={formState.title}
          placeholder="Please write your title."
        />
      </div>
      <div className="input1">
        <label htmlFor="rating">Rating: </label>
        <input
          type="integer"
          id="rating"
          onChange={handleChange}
          value={formState.rating}
          placeholder="Please rate out of 5"
        />
      </div>
      <div className="input2">
        <label htmlFor="review">Review:</label>
        <textarea
          rows="5"
          cols="50"
          type="text"
          id="review"
          onChange={handleChange}
          value={formState.review}
          placeholder="Please write your review."
        />
      </div>
    </div>
  )
}

export default ReviewFields
