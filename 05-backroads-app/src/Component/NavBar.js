import logo from '../images/logo.svg';
import { NAV_ICONS_DATA, NAV_LINK_DATA } from '../data/nav.data';
const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {NAV_LINK_DATA.map((item) => {
            const { id, href, text } = item;
            return (
              <li key={id} rel="noreferrer">
                <a href={href} className="nav-link">
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {NAV_ICONS_DATA.map((item) => {
            const { id, link, icon } = item;
            return (
              <li key={id}>
                <a href={link} target="_blank" className="nav-icon">
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
