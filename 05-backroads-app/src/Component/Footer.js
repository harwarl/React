import { NAV_ICONS_DATA, NAV_LINK_DATA } from '../data/nav.data';

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {NAV_LINK_DATA.map((item) => {
          const { id, href, text } = item;
          return (
            <li key={id}>
              <a href={href} className="footer-link" rel="noreferrer">
                {text}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className="footer-icons">
        {NAV_ICONS_DATA.map((item) => {
          const { id, link, icon } = item;
          return (
            <li key={id} rel="noreferrer">
              <a href={link} target="_blank" className="footer-icon">
                <i className={icon}></i>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
