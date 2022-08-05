import { combineReducers } from "redux";
import { createStore } from "redux";
import notesReducer from "./notesReducer";
import counterReducer from "./counterReducer";
const combine = combineReducers({
    notes: notesReducer,
    count: counterReducer
})
export default combine
