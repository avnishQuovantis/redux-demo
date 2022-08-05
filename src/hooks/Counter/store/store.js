import { createStore } from "redux";
import { INCREMENT, DECREMENT, RESET } from "./descriptors"
let initialState = {
  count: 0,
};
function countReducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        count: state.count + 1,
      };

    case DECREMENT:
      return {
        count: state.count - 1,
      }
    case RESET:
      return {
        count: 0
      }
    case "--":
      console.log("custom load")
      return {
        ...state.count
      }

    default:
      return state;
  }
}

const store = createStore(countReducer);
export default store;
