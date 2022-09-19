import { NavLink } from 'react-router-dom'

const Nav = ({ authenticated, handleLogOut }) => {
  let authenticatedOptions
  if (authenticated) {
    authenticatedOptions = (
      <div className="pub_opts">
        <span>
          <NavLink className="nav_links" to="/feed">
            Spas
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
    </div>
  )

  return (
    <div className="navbar_container">
      {staticOptions}
      {authenticated ? authenticatedOptions : publicOptions}
    </div>
  )
}
export default Nav
