import { createStore } from "redux";
import countReducer from "../reducer/counterReducer";
export const store=createStore(countReducer)
