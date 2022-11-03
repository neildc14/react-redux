const redux = require("redux");
const createStore = redux.createStore;

const BUY_CAKE = "BUY_CAKE";

//Actions
function buyCake() {
  return {
    type: BUY_CAKE,
    info: "buena mano",
  };
}

const initialState = {
  numbeOfCakes: 10,
};

//reducers
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numbeOfCakes: state.numbeOfCakes - 1,
      };
    default:
      return state;
  }
};

//store 
const store = createStore(reducer);
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated State", store.getState())
);
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
unsubscribe();
