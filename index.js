console.log("works fine");
const BUY_CAKE = "BUY_CAKE";

buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "customer buys a cake",
  };
};

const initialState = {
  noOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        noOfCakes: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};
