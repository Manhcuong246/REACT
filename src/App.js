import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Mycomponent from './components/Mycomponents';
import React from 'react';

import { increaseCounter, decreaseCounter } from './redux/action/counterAction';
class App extends React.Component {
  render(){
    return(
<div>

Hello Wolrd
<Mycomponent></Mycomponent>
</div>
    );
  }
}

// const App = () => {
//   const count = useSelector(state => state.counter.count);
//   const dispatch = useDispatch();

//   return (
   
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//         Hello world
//         </p>
//         <div>Count = {count}</div>
//         <button onClick={() => dispatch(increaseCounter())}>Increase</button>
//         <button onClick={() => dispatch(decreaseCounter())}>Decrease</button>
//       </header>
//     </div>
//   );
// }

export default App;
