let initialState = {
    user: [],
    loading: true,
    error: ""
}

function reducer(state = initialState, action) {
    console.log("inside reducer");
    switch (action.type) {
        case "success":
            return {
                user: action.payload,
                loading: false,
                error: ""
            }
        case "error":
            return {
                user: [],
                loading: false,
                error: action.payload
            }
        default: return state
    }
}
console.log("outside reducer");
export default reducer