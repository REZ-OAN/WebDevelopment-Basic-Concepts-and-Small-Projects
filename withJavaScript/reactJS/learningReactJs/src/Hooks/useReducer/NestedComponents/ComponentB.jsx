import {useContext} from "react";
import {counterContext} from "./Top";
export default function ComponentB(){
    const {state,dispatch} = useContext(counterContext);
    return (
        <div>
            <p>ComponentB</p>
            <h3>Count - {state.count}</h3>
            <div>
                <button type="button" onClick={() =>{
                    dispatch({
                        type: 'increment',
                        step : 3,
                    });
                }}>Increment</button>
                <button type="button" onClick={()=>{
                    dispatch({
                        type : 'decrement',
                        step : 3,
                    });
                }}>Decrement</button>
            </div>
        </div>
    );
}