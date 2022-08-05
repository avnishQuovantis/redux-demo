import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import middleWare from './middleWare';

function Users(props) {
    const { error, loading, user, fetchUser } = props
    useEffect(() => {
        console.log("in component");
        fetchUser()
    }, [])
    return (
        <div>
            {loading ? <h1>loading ...</h1> :
                error != "" ? <h1>{error}</h1> :
                    <>
                        <h2>User</h2>
                        {user.map(obj => {
                            return (<li key={obj.id}>{obj.name}</li>)
                        })}
                    </>}
        </div>
    )
}
const mapStateToProps = (state) => {
    return state;
};
const mapDispatchToProps = (dispatch) => {
    return {

        fetchUser: () => {
            dispatch(middleWare);
        },
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Users);

