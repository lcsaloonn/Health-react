import { Link } from "react-router-dom";
import "./navBar.scss";
const NavBar = () => {
  return (
    <>
      <div className="navbar">
        <input id="toggle" type="checkbox" />

        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
        </label>

        <nav className="nav">
          <Link className="nav-item" to="/">
            Menu
          </Link>
          <Link className="nav-item" to="register">
            Profil
          </Link>
          <Link className="nav-item" to="#">
            Sessions
          </Link>
          <Link className="nav-item" to="exercices">
            Exerices
          </Link>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
