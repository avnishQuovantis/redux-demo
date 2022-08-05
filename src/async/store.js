import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import reducer from "./reducer"
console.log("in store");
const store = createStore(reducer, applyMiddleware(thunk))
export default store