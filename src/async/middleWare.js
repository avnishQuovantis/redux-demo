
export default async function middleWare(dispatch) {
    console.log("inside middleware");
    try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/users")
        let data = await resp.json()
        console.log(data);
        dispatch({ type: "success", payload: data })

    } catch (err) {
        dispatch({ type: "error", payload: err.message })

    }
}