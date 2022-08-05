import { GET_USERS, ERRORS } from "./actions";

export default async function middleware(dispatch) {
    try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await resp.json()
        dispatch({ type: GET_USERS, payload: data })
    }
    catch (err) {
        console.log(err);
        dispatch({ type: ERRORS })
    }
}