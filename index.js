const redux = require("redux");
const createStore = redux.createStore;

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

const store = createStore(reducer);
console.log("Initial state", store.getState());
const unsusbcribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsusbcribe();
