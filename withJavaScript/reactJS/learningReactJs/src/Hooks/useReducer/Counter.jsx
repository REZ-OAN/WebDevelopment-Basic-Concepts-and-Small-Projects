import {useReducer} from "react";
// this is a boilerplatte for useReducer
const initialState = 0;
const reducer = (currentState, action) => {
    switch(action){
        case 'increment' :
            return currentState + 1;
        case 'decrement' :
            return currentState - 1 >= 0 ? currentState - 1 : currentState;
        default :
            return currentState;
    }
}
export default function Counter() {
    const [count,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>
                Count - {count}
            </div>
            <button type="button" onClick={() =>{
                dispatch('increment');
            }}>Increment</button>
            <button type="button" onClick={()=>{
                dispatch('decrement');
            }}>Decrement</button>

        </div>
    );
}