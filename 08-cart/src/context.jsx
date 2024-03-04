import { createContext, useContext, useEffect, useReducer } from 'react';
import { DISPLAY_ITEMS, LOADING, INCREASE, DECREASE, REMOVE, CLEAR_CART } from './actions';
import { reducer } from './reducer';

const AppContext = createContext();

/* -------------------------------------------------------------------------------------------------
 * ALL THE FUNCTIONS THAT USES THE DISPATCH WILL BE DECLARED HERE
 * -----------------------------------------------------------------------------------------------*/

const initialState = {
  loading: false,
  cart: new Map(),
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
