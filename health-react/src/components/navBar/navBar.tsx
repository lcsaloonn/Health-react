import { Link } from "react-router-dom";
import "./navBar.scss";
const NavBar = () => {
  function closePanel() {
    const checkbox = document.getElementById("checkbox") as HTMLInputElement;
    if (checkbox.checked) checkbox.checked = false;
  }

  return (
    <>
      <nav role="navigation" className="navbar">
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
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
