const ReviewFields = ({ formState, handleChange }) => {
  return (
    <>
      <div className="input1">
        <label htmlFor="title">Title: </label>
        <textarea
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
          type="text"
          id="review"
          onChange={handleChange}
          value={formState.review}
          placeholder="Please write your review."
        />
      </div>
    </>
  )
}

export default ReviewFields
