import { createContext, useContext, useEffect, useReducer } from 'react';
import { DISPLAY_ITEMS, LOADING, INCREASE, DECREASE, REMOVE, CLEAR_CART } from './actions';
import { reducer } from './reducer';
import { getTotals } from './utils';
const url = 'https://www.course-api.com/react-useReducer-cart-project';

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
  const { totalAmount, totalCost } = getTotals(state.cart);

  const increase = (id) => {
    dispatch({ type: INCREASE, payload: { id } });
  };

  const decrease = (id) => {
    dispatch({ type: DECREASE, payload: { id } });
  };

  const remove = (id) => {
    dispatch({ type: REMOVE, payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  const fetchData = async () => {
    dispatch({ type: LOADING });
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({ type: DISPLAY_ITEMS, payload: { cart } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, clearCart, remove, increase, decrease, totalAmount, totalCost }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
