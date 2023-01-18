const init = {
  isLoggedIn: false,
  user: [],
  cart: [],
  search:"",
  products:[]
};

export const loginReducer = (store = init, { type, payload }) => {
  switch (type) {
    case "PRODUCT":
      return { ...store, isLoggedIn: true, products: payload };
    case "LOGIN":
      return { ...store, isLoggedIn: true, user: payload };
    case "LOGOUT":
      return { ...store, isLoggedIn: false, user: {} };
    case "ADDCART":
      return {
        ...store,
        cart: [...store.cart, payload],
      };
      case "SEARCH":
        return { ...store,search: payload };
    default:
      return store;
  }
};
