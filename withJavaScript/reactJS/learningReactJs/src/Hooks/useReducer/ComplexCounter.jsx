import {useReducer} from "react";
// this is a boilerplatte for useReducer
const initialState = {
    count : 0,
};
const reducer = (currentState, action) => {
    switch(action.type){
        case 'increment' :
            return {
                ...currentState,
                count : currentState.count + action.step
            };
        case 'decrement' :
            return currentState.count - action.step >= 0 ? {
                ...currentState,
                count : currentState.count - action.step
            } : currentState;
        default :
            return currentState;
    }
}
export default function Counter() {
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>
                <p>Step Size is 5</p>
                Count - {state.count}
            </div>
            <button type="button" onClick={() =>{
                dispatch({
                    type: 'increment',
                    step : 5,
                });
            }}>Increment</button>
            <button type="button" onClick={()=>{
                dispatch({
                    type : 'decrement',
                    step : 5,
                });
            }}>Decrement</button>

        </div>
    );
}