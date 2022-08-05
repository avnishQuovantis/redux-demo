import { createSlice, configureStore } from "@reduxjs/toolkit";
import counterReducer from "../basic/combineReducer/reducer/counterReducer";

const initialCounterState = { count: 0, showCounter: true }
const initialAuthState = { isAuthenticated: false }
const counterSlice = createSlice({
    name: "counter",
    initialState: initialCounterState,
    reducers: {
        increment(state) {
            state.count++
        },
        decrement(state) {
            state.count--
        },
        increase(state, action) {
            state.count = state.count + action.payload
        },
        reset(state) {
            state.count = 0
        },
        toggleCounter(state) {
            state.showCounter = !state.showCounter
        }
    }
})
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        login(state) {
            state.isAuthenticated = true
        },
        logoff(state) {
            state.isAuthenticated = false
        }
    }
})
//exporting counterSlice actions which inclues all reducers function which can be used by component to dispatch
export const counterActions = counterSlice.actions
export const authActions = authSlice.actions
const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
})
export default store