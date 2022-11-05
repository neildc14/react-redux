const { dispatch } = require("./app/store");
const store = require("./app/store");
const { icecreamActions } = require("./features/icecream/icecreamSlice");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const { fetchUsers } = require("./features/user/userSlice");

console.log("Initial State", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated", store.getState());
});
store.dispatch(fetchUsers());
