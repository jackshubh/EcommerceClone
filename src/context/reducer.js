export const initialState = {
  cart: [],
  user: null,
};
//Function to find the total value of the cart and it is called in Checkout.js
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      //Logic for adding item to card
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case "REMOVE_FROM_CART":
      // Logic for removing item from cart

      let newCart = [...state.cart]; // Creating a newcart array for initial state of the the cart
      const index = state.cart.findIndex((item) => item.id === action.item.id); // Finding the index of the item which is been asked to remove from the cart
      if (index >= 0) newCart.splice(index, 1);
      // After finding the index that item is been removed from the array and a new array is formed with rest of the item left.
      else console.warn(`can't remove as it's not available`);
      return {
        ...state,
        cart: newCart,
      };
    //Logic to set the user value when a new user signIn or create an account
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    default:
      return state;
  }
};

export default reducer;
