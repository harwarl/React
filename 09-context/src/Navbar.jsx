import NavLinks from './NavLinks';
import { useState, createContext, useContext } from 'react';

export const NavbarContext = createContext();

export const useAppContext = () => useContext(NavbarContext);

const Navbar = () => {
  const [user, setUser] = useState({ name: 'adeolu' });
  const handleLogout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, handleLogout }}>
      <nav className="navbar">
        <h5>CONTEXT API</h5>
        <NavLinks />
      </nav>
    </NavbarContext.Provider>
  );
};

export default Navbar;
