const redux = require("redux");
const createStore = redux.createStore;
const produce = require("immer").produce;

const initialState = {
  name: "neil",
  address: {
    street: "123 Main Streer",
    city: "San Jose City",
    country: "Philippines",
  },
};

const UPDATE_STREET = "UPDATE_STREET";

const updateStreet = (street) => {
  return {
    type: UPDATE_STREET,
    payload: street,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_STREET:
      return produce(state, (draft) => {
        draft.address.street = action.payload;
      });
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log("initialState", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated", store.getState())
);
store.dispatch(updateStreet("456 Second Street"));
unsubscribe();
