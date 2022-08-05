import React, { useState } from 'react'
import { connect } from 'react-redux';
import "./style.css";
function Todo(props) {
    const [note, setNote] = useState("")
    const data = props.notes.note;
    const addNotes = () => {
        let obj = { id: props.notes.note.length, data: note };
        props.add(obj)
    }
    return (
        <div className="countTodoContainer">
            <div className="count">
                <button onClick={props.increment}> +</button>
                <span>count : {props.count.count}</span>
                <button onClick={props.decrement}>-</button>
            </div>
            <div className="todoInput">
                <input type="text" onChange={(e) => setNote(e.target.value)} value={note} />
                <button onClick={addNotes}> add</button>
            </div>
            <div className="todoList">
                {
                    data.map(obj => {
                        return (
                            <div className='todoItem'>
                                <span>{obj.id}</span>
                                <span>{obj.data}</span>
                                <button onClick={() => props.delete(obj.id)}>delete</button>
                            </div>

                        )

                    })

                }
            </div>
        </div>
    )
} const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {
        add: (obj) => {
            dispatch({ type: "add", payload: obj });
        },
        delete: (id) => {
            dispatch({ type: "delete", payload: id });
        }
        ,
        increment: () => {
            dispatch({ type: "increment" });
        },
        decrement: () => {
            dispatch({ type: "decrement" });
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todo);

