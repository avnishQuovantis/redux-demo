import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import middleware from './middleware';

function Users() {
    const select = useSelector(state => state)
    const dispatch = useDispatch()
    useEffect(() => {

        dispatch(middleware)
    }, [])
    return (
        <div>
            {console.log("users", select)}
            {select.loading ? <h1>loading ...</h1> :
                select.error != null ? <h1>{select.error}</h1> :
                    <>
                        <h2>User</h2>
                        {select.user.map(obj => {
                            return (<li key={obj.id}>{obj.name}</li>)
                        })}
                    </>}
        </div>
    )
}

export default Users

