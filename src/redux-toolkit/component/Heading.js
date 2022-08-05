import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { authActions } from '../store';
export default function Heading() {

    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => dispatch(authActions.login())}> login</button>
            <button onClick={() => dispatch(authActions.logoff())}> logoff</button>
        </div>
    )
}

