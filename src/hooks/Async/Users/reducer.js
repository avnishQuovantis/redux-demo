import { GET_USERS, ERRORS } from "./actions"
const initialState = {
    user: [],
    loading: true,
    error: null
}
const REDUCER_HANDLER = {
    [GET_USERS]: function (state, action) {
        return { loading: false, error: null, user: action.payload }
    }
    ,
    [ERRORS]: (state, action) => ({ loading: false, user: [], error: "error" })


}
const userReducer = (state = initialState, action = {}) => {
    const handler = REDUCER_HANDLER[action.type]

    return handler ? handler(state, action) : state;

}
export default userReducer