const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM";

buyCake = () => {
  return {
    type: BUY_CAKE,
    info: "customer buys a cake",
  };
};

buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "customer buys an ice-cream",
  };
};

const initialCakeState = {
  noOfCakes: 10,
};
const initialIceCreamState = {
  noOfIceCreams: 10,
};

const cakeReducer = (state = initialCakeState, action) => {
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

const iceCreamReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        noOfIceCreams: state.noOfCakes - 1,
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer,
});

const store = createStore(rootReducer);
console.log("Initial state", store.getState());
const unsusbcribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsusbcribe();
