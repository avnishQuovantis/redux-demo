import { createStore } from "redux";
import combine from "./reducer/combine";

const store = createStore(combine)
store.getState()
export default store