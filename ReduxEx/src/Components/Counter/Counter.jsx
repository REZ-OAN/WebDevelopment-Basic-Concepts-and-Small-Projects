import {useDispatch, useSelector} from "react-redux";
import {decrementAction, incrementAction, resetAction} from "../../services/Actions/counterActions";
import "./Counter.css";
const Counter = () => {
    // we are using the state of counterR 
    const count = useSelector(state=>state.counterR.count);
    console.log(count);
    // using the dicpatch to set the action
    const dispatch = useDispatch();
    const handleIncrement = ()=>{
        dispatch(incrementAction());
    }
    const handleDecrement = ()=>{
        dispatch(decrementAction());
    }
    const handleReset = ()=>{
        dispatch(resetAction());
    }
  return (
        <div>
            <h2>Counter App</h2>
            <h3> Count : <span>{count}</span></h3>
            <button onClick={handleIncrement}>INCREMENT</button>
            <button onClick={handleDecrement}>DECREMENT</button>
            <button onClick={handleReset}>RESET</button>
        </div>
  )
}

export default Counter;