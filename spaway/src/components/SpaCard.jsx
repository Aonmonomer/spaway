import { BASE_URL } from '../globals'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../App.css'
import Client from '../services/api'

const SpasCard = (props) => {
  let navigate = useNavigate()
  const [spa, setSpa] = useState('')

  const initialState = {
    spaName: '',
    phoneNumber: '',
    location: '',
    description: '',
    imageUrl: ''
  }

  const [formState, setFormState] = useState(initialState)
  let { id } = useParams()

  useEffect(() => {
    const selectedSpa = async () => {
      try {
        let res = await Client.get(`${BASE_URL}/api/recipes/view/${id}`)
        setSpa(res.data)
      } catch (eer) {}
    }
    setSpa(selectedSpa)
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await Client.put(`${BASE_URL}/api/recipes/${id}`, formState)
    setFormState(initialState)
    alert('You have successfully updated the spa!')
    navigate('/feed')
  }

  const deleteSpa = async () => {
    let res = await Client.delete(`${BASE_URL}/api/recipes/${id}`, formState)
    alert('You have successfully deleted the spa!')
    navigate('/feed')
  }
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="details_page">
      <div>
        <SideNav />
      </div>
      <div className="details_grid">
        <h1 className="recipe_title">{spa.title}</h1>
        <img className="recipe_card" src={spa.image} alt="spa image" />
        <div className="details_container">
          <h1 className="details_header">Ingredients:</h1>
          <h1 className="detail">{spa.ingredients}</h1>
          <h1 className="details_header2">Directions:</h1>
          <h1 className="detail">{spa.directions}</h1>
          {/* <h1 className='details_header2'>Category:</h1> */}
          <h1 className="detail">{spa.category}</h1>
        </div>

        <div className="forms_section">
          <h1 className="forms_header">Edit this Spa</h1>
          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <div className="input1">
                <label htmlFor="title">Title:</label>
                <input
                  type="text"
                  id="title"
                  onChange={handleChange}
                  value={formState.title}
                  placeholder={spa.title}
                />
              </div>
              <div className="input1">
                <label htmlFor="image">Image:</label>
                <input
                  type="text"
                  id="image"
                  onChange={handleChange}
                  value={formState.image}
                  placeholder={spa.image}
                />
              </div>
              <div className="input1">
                <label htmlFor="ingredients">Ingredients:</label>
                <textarea
                  type="text"
                  id="ingredients"
                  onChange={handleChange}
                  value={formState.ingredients}
                  placeholder={spa.ingredients}
                />
              </div>
              <div className="input2">
                <label htmlFor="directions">Directions:</label>
                <textarea
                  type="text"
                  id="directions"
                  onChange={handleChange}
                  value={formState.directions}
                  placeholder={spa.directions}
                />
              </div>
              <div className="input1">
                <label htmlFor="category">Category:</label>
                <select
                  id="category"
                  onChange={handleChange}
                  value={formState.category}
                >
                  <option value="Default" selected>
                    {' '}
                    -Select One-{' '}
                  </option>
                  <option value="Diabetic Friendly">Diabetic Friendly</option>
                  <option value="Gluten Free">Gluten Free</option>
                  <option value="Halal">Halal</option>
                  <option value="Kosher">Kosher</option>
                  <option value="Lactose Free">Lactose Free</option>
                  <option value="Low Sodium">Low Sodium</option>
                  <option value="Vegan">Vegan</option>
                  <option value="Vegetarian">Vegetarian</option>
                </select>
              </div>
              <div className="form_button"></div>
              <div className="button1">
                <button type="submit" onClick={refreshPage}>
                  Update Spa
                </button>
              </div>
            </div>
          </form>

          <div className="button2">
            <button onClick={deleteSpa}>Delete Spa</button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default SpaCard
