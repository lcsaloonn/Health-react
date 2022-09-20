import { Link } from "react-router-dom";
import "./navBar.scss";
const NavBar = () => {
  return (
    <>
      {/* <nav role="navigation" className="navbar">
        <div id="menuToggle">
          <input type="checkbox" id="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link to="/" onClick={closePanel}>
                Menu
              </Link>
              <Link to="#" onClick={closePanel}>
                Profile
              </Link>
              <Link to="#" onClick={closePanel}>
              session
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}
      <div className="navbar">
        <input id="toggle" type="checkbox" />

        <label className="toggle-container" htmlFor="toggle">
          <span className="button button-toggle"></span>
        </label>

        <nav className="nav">
          <Link className="nav-item" to="/">
            Menu
          </Link>
          <Link className="nav-item" to="#">
            Profil
          </Link>
          <Link className="nav-item" to="#">
            Session
          </Link>
          <Link className="nav-item" to="#">
            Exerices
          </Link>
        </nav>
      </div>
    </>
  );
};
export default NavBar;
