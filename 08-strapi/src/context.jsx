import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);
  const closeSideBar = () => {
    setIsSideBarOpen(false);
  };

  const openSideBar = () => {
    setIsSideBarOpen(true);
  };

  return (
    <AppContext.Provider value={{ openSideBar, closeSideBar, isSideBarOpen, setPageId, pageId }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
