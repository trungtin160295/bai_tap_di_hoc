const initState = {
  cart: {
    id: "",
    ductName: "",
    color: "",
    size: "",
    quantity: "",
    price: "",
  },
};

const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "cart/addCart":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: "90",
            ductName: "sawqeqeqw",
            color: "",
            size: "",
            amount: "",
            price: "",
          },
        ],
      };

    default:
      return state;
  }
};
export default rootReducer;
