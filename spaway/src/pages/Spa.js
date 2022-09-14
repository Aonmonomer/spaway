import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import { BASE_URL } from '../globals'

const Spa = (props) => {
  let navigate = useNavigate()

  const [spa, setSpa] = useState('')

  const showSpas = (spa) => {
    navigate(`/spas/${spa.id}`)
  }

  useEffect(() => {
    const getSpas = async () => {
      let res = await axios.get(`${BASE_URL}/api/spas/view/all`)
      setSpa(res.data)
    }
    getSpas()
  }, [props.spa])

  return (
    <div className="list_all">
      {spa
        ? spa.map((spa) => (
            <div
              className="spa_grid"
              onClick={() => showSpas(spa)}
              key={spa.id}
            >
              <h2 className="spa_name">{spa.spaName}</h2>
              <img
                className="spa_card"
                style={{ display: 'block' }}
                src={spa.imageUrl}
                alt={spa.spaName}
              />
              <h3>Phone Number: {spa.phoneNumber}</h3>
              <h3>Location: {spa.location}</h3>
              <p>Description: {spa.description}</p>
            </div>
          ))
        : ''}
    </div>
  )
}
export default Spa
