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
        let res = await Client.get(`${BASE_URL}/api/spas/view/${id}`)
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
    let res = await Client.put(`${BASE_URL}/api/spas/${id}`, formState)
    setFormState(initialState)
    alert('You have successfully updated the spa!')
    navigate('/feed')
  }

  const deleteSpa = async () => {
    let res = await Client.delete(`${BASE_URL}/api/spas/${id}`, formState)
    alert('You have successfully deleted the spa!')
    navigate('/feed')
  }
  const refreshPage = () => {
    window.location.reload()
  }

  return (
    <div className="details_page">
      <div className="details_grid">
        <h1 className="spa_name">{spa.spaName}</h1>
        <img className="spa_card" src={spa.imageUrl} alt="spa image" />
        <div className="details_container">
          <h1 className="details_header">Phone Number</h1>
          <h1 className="detail">{spa.phoneNumber}</h1>
          <h1 className="details_header2">Location</h1>
          <h1 className="detail">{spa.location}</h1>
          <h1 className="detail_header3">Description</h1>
          <h1 className="detail">{spa.description}</h1>
        </div>

        <div className="forms_section">
          <h1 className="forms_header">Edit this Spa</h1>
          <form onSubmit={handleSubmit}>
            <div className="form_container">
              <div className="input1">
                <label htmlFor="spa_name">Spa Name:</label>
                <input
                  type="text"
                  id="spaName"
                  onChange={handleChange}
                  value={formState.spaName}
                  placeholder={spa.spaName}
                />
              </div>
              <div className="input1">
                <label htmlFor="spa_image">Image:</label>
                <input
                  type="text"
                  id="imageUrl"
                  onChange={handleChange}
                  value={formState.imageUrl}
                  placeholder={spa.imageUrl}
                />
              </div>
              <div className="input1">
                <label htmlFor="phone_number">Phone Number:</label>
                <textarea
                  type="text"
                  id="phoneNumber"
                  onChange={handleChange}
                  value={formState.phoneNumber}
                  placeholder={spa.phoneNumber}
                />
              </div>
              <div className="input2">
                <label htmlFor="location">Location:</label>
                <textarea
                  type="text"
                  id="location"
                  onChange={handleChange}
                  value={formState.location}
                  placeholder={spa.location}
                />
              </div>
              <div className="input3">
                <label htmlFor="description">Description:</label>
                <textarea
                  type="text"
                  id="description"
                  onChange={handleChange}
                  value={formState.description}
                  placeholder={spa.description}
                />
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
