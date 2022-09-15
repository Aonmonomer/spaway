import React from 'react'
import { useState, useEffect } from 'react'
import { BASE_URL } from '../globals'
import Client from '../services/api'
import { Navigate, useNavigate } from 'react-router-dom'

const SpaForm = ({ user, authenticated }) => {
  let navigate = useNavigate()
  const initialState = {
    spaName: '',
    phoneNumber: '',
    location: '',
    description: '',
    imageUrl: ''
  }
  const [spa, setSpa] = useState({})
  const [formState, setFormState] = useState(initialState)
  useEffect(() => {
    const getSpa = async () => {
      try {
        let res = await Client.get(`${BASE_URL}/api/spas/view/all`)
        console.log(res.data)
        setSpa(res.data)
      } catch (eer) {}
    }
    getSpa()
  }, [])
  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    let res = await Client.post(`${BASE_URL}/api/spas/create`, formState)
    setFormState(initialState)
    navigate('/feed')
  }
  return user && authenticated ? (
    <div className="new_spa">
      <div className="forms_section_new_spa">
        <h1 className="forms_header">Add A New Spa: </h1>
        <form onSubmit={handleSubmit}>
          <div className="form_container">
            <div className="input1">
              <label>Spa Name: </label>
              <input
                type="text"
                id="spaName"
                value={spa.spaName}
                onChange={handleChange}
                name={'spaName'}
                placeholder={'Spa Name'}
              />
            </div>
            <div className="input1">
              <label>Image Link: </label>
              <textarea
                type="text"
                id="imageUrl"
                value={spa.imageUrl}
                onChange={handleChange}
                name={'imageUrl'}
                placeholder={'Image Url'}
              />
            </div>
            <div className="input1">
              <label>Phone Number: </label>
              <input
                type="text"
                id="phoneNumber"
                value={spa.phoneNumber}
                onChange={handleChange}
                name={'phoneNumber'}
                placeholder={'Phone Number'}
              />
            </div>
            <div className="input1">
              <label>Location: </label>
              <textarea
                id="location"
                value={spa.location}
                onChange={handleChange}
                name="location"
                placeholder={'Location'}
              />
            </div>
            <div className="input1">
              <label>Description: </label>
              <textarea
                id="description"
                value={spa.description}
                onChange={handleChange}
                name="description"
                placeholder={'Description'}
              />
            </div>
            <div className="button1">
              <button type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>
      <button onClick={() => navigate('/feed')}>Back</button>
    </div>
  ) : (
    <div className="new_spa">
      <h3>Oops! You must be signed in to add a spa!</h3>
      <button onClick={() => navigate('/signin')}>Sign In</button>
    </div>
  )
}

export default SpaForm
