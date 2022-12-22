const init = {
  isLoggedIn: false,
  user: [],
  cart: [],
};

export const loginReducer = (store = init, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return { ...store, isLoggedIn: true, user: payload };
    case "LOGOUT":
      return { ...store, isLoggedIn: false, user: {} };
    case "ADDCART":
      return {
        ...store,
        cart: [...store.cart, payload],
      };
    default:
      return store;
  }
};
