import { Link, NavLink } from "react-router-dom";

// Logo is imported in this manner to enable use of the logo in this page
// NOTE: Explore using some method where the image directory can be passed in so this component is resuable.
import logo from "../../images/logoipsum.svg";

function MainNav({ homeDetails }) {
  const { route, title, alt } = homeDetails;
  // Navigation options will need to vary depending on if the current user is authenticated
  // Not Auth: Login / Register
  // Auth: Logout

  // Might need a possible dashboard so the

  return (
    <div className="mainNav">
      <Link to={route} className="mainNav-branding">
        <img src={logo} alt={alt} />
      </Link>

      <nav className="mainNav-navbar">
        <li className="mainNav-navbar__li">
          <NavLink className="mainNav-navbar__link" to="/register">
            Register
          </NavLink>
        </li>
        <li className="mainNav-navbar__li">
          <NavLink className="mainNav-navbar__link" to="/login">
            Login
          </NavLink>
        </li>
        <li className="mainNav-navbar__li">
          <NavLink className="mainNav-navbar__link" to="/activities">
            Activities
          </NavLink>
        </li>
        <li className="mainNav-navbar__li">
          <NavLink className="mainNav-navbar__link" to="/todos">
            Todos
          </NavLink>
        </li>
      </nav>
    </div>
  );
}

export default MainNav;
