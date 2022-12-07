import {useSelector,useDispatch} from "react-redux"
import {increment,decrement} from "./Action"


/*import logo from './logo.svg';
import './App.css';*/

function App() {
  /*const [num,setNum]=useState(0)*/
  const count=useSelector(state=>state.Counter)
  const dispatch=useDispatch()
  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      <button onClick={()=>{dispatch(decrement())}}>-</button>

    </div>
   /* <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>*/
  );
}

export default App;
