import { socials, links } from './data';
import { useState, useRef } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from './logo.svg';
const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linkContainerRef = useRef(null);
  const linkRef = useRef(null);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const linkStyles = {
    height: showLinks ? `${linkRef.current.getBoundingClientRect().height}px` : '0px',
  };

  return (
    <nav>
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt={logo} className="logo" />
          <button className="nav-toggle" onClick={toggleLinks}>
            <FaBars />{' '}
          </button>
        </div>
        <div className="links-container" ref={linkContainerRef} style={linkStyles}>
          <ul className="links" ref={linkRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        {/* social links */}
        <ul className="social-icons">
          {socials.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
