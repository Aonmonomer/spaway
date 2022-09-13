import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, user, handleLogOut }) => {
  let authenticatedOptions
  if (user) {
    authenticatedOptions = (
      <div className="pub_opts">
        <span>
          <NavLink className="nav_links" to="/feed">
            Feed
          </NavLink>
        </span>
        <span>
          <NavLink className="nav_links" onClick={handleLogOut} to="/">
            Sign Out
          </NavLink>
        </span>
      </div>
    )
  }

  const publicOptions = (
    <div className="pub_opts">
      <span>
        <NavLink className="nav_links" to="/signin">
          Sign In
        </NavLink>
      </span>
      <span>
        <NavLink className="nav_links" to="/register">
          Register
        </NavLink>
      </span>
    </div>
  )

  const staticOptions = (
    <div className="pub_opts2">
      <span>
        <NavLink className="nav_links" to="/">
          Home
        </NavLink>
      </span>
      <span>
        <NavLink className="nav_links" to="/about">
          About
        </NavLink>
      </span>
    </div>
  )

  return (
    <div className="navbar_container">
      {staticOptions}
      {authenticated && user ? authenticatedOptions : publicOptions}
    </div>
  )
}
export default Nav
