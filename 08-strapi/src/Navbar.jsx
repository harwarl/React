import { FaBars } from 'react-icons/fa';
import { useAppContext } from './context';
import NavLinks from './NavLinks';

const Navbar = () => {
  const { openSideBar, setPageId } = useAppContext();

  const handleSubmenu = (e) => {
    if (!e.target.classList.includes('nav-link')) {
      setPageId(null);
    }
  };
  return (
    <nav onMouseOver={handleSubmenu}>
      <div className="nav-center">
        <h3 className="logo">Strapi</h3>
        <button className="toggle-btn" onClick={openSideBar}>
          <FaBars />
        </button>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
