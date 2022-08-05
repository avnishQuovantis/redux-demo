
let initialState = {

    note: []
}
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case "add":
            let obj1 = [...state.note, action.payload];
            return {
                note: obj1
            }
        case "delete":
            let obj2 = state.note.filter((obj) => {
                return obj.id != action.payload
            })
            return {
                note: obj2
            }

        default:
            return state;
    }
}
export default notesReducer