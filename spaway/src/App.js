import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Nav from './components/Nav'
import Home from './pages/Home'
import SignIn from './pages/Signin'
import { CheckSession } from './services/Auth'
import { useState, useEffect } from 'react'
import Spa from './pages/Spa'
import Register from './pages/Register'
import SpaCard from './components/SpaCard'
import SpaForm from './pages/SpaForm'

function App() {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogOut = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div className="App">
      <Nav
        authenticated={authenticated}
        user={user}
        handleLogOut={handleLogOut}
      />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/feed"
            element={<Spa user={user} authenticated={authenticated} />}
          />
          <Route path="/register" element={<Register />} />
          <Route
            path="/spas/:id"
            element={<SpaCard user={user} authenticated={authenticated} />}
          />
          <Route
            path="/spa_add"
            element={<SpaForm user={user} authenticated={authenticated} />}
          />

          <Route
            path="/signin"
            element={
              <SignIn
                setUser={setUser}
                toggleAuthenticated={toggleAuthenticated}
              />
            }
          />
        </Routes>
      </main>
    </div>
  )
}

export default App
