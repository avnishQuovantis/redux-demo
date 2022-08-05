import React from 'react';
import logo from './logo.svg';
// import Counter from './hooks/Counter/component/Counter';
import './App.css';
// import Counter  from './basic/Counter/component/Counter';
import Todo from './basic/combineReducer/component/Todo';
import Counter from './redux-toolkit/component/Counter';
// import Users from './basic/async/Users';
import { useSelector } from 'react-redux';
import Heading from './redux-toolkit/component/Heading';
import Users from "./hooks/Async/Users/Users"
function App() {

  // const isAuth = useSelector(state => state.auth.isAuthenticated)
  console.log("inside app");
  return (
    <div className="App">
      {/* <Heading />
      {isAuth ?
        <Counter /> : <h2>Pleas login</h2>
      } */}


      {/* <Todo />
      <Counter /> */}
      {/* <Users /> */}
      <Users />
    </div>
  );
}

export default App;
