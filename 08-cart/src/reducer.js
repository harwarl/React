export const reducer = (state, action) => {
  let newCart, newItem, item;
  switch (action.type) {
    case 'CLEAR_CART':
      return { ...state, cart: new Map() };
    case 'REMOVE':
      newCart = new Map(state.cart);
      newCart.delete(action.payload.id);
      return { ...state, cart: newCart };
    case 'INCREASE':
      newCart = new Map(state.cart);
      item = newCart.get(action.payload.id);
      newItem = { ...item, amount: item.amount + 1 };
      newCart.set(action.payload.id, newItem);
      return { ...state, cart: newCart };
    case 'DECREASE':
      newCart = new Map(state.cart);
      item = newCart.get(action.payload.id);
      newItem = { ...item, amount: item.amount - 1 };
      newCart.set(action.payload.id, newItem);
      return { ...state, cart: newCart };
    case 'LOADING':
      return { ...state, loading: true };
    case 'DISPLAY_ITEMS':
      newCart = new Map(action.payload.cart.map((item) => [item.id, item]));
      return { ...state, loading: false, cart: newCart };
    default:
      throw new Error(`no matching action type : ${action.type}`);
  }
};


