import { useNavigate } from 'react-router-dom'
import '../App.css'
// import '../assets/lotusicon.png'

const Home = () => {
  let navigate = useNavigate()

  return (
    <div className="home_pic_container">
      <h1 className="home_title">Welcome to Spaway!</h1>
      <img
        className="home_pic"
        src="https://www.avenuecalgary.com/wp-content/uploads/2017/05/Spa.jpeg"
        alt="spa pic"
      />
      <div>
        <button className="home_btn" onClick={() => navigate(`/signin`)}>
          Sign In
        </button>
        <button className="home_btn" onClick={() => navigate(`/register`)}>
          Register
        </button>
      </div>
    </div>
  )
}
export default Home
