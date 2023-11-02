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
    const [state1,dispatch1] = useReducer(reducer,initialState);
    const [state2,dispatch2] = useReducer(reducer,initialState);
    const [state5,dispatch5] = useReducer(reducer,initialState);
    return (
        <>
            <div>
                <div>
                    <p>Step Size is 1</p>
                    Count - {state1.count}
                </div>
                <button type="button" onClick={() =>{
                    dispatch1({
                        type: 'increment',
                        step : 1,
                    });
                }}>Increment</button>
                <button type="button" onClick={()=>{
                    dispatch1({
                        type : 'decrement',
                        step : 1,
                    });
                }}>Decrement</button>

        </div>
        <div>
            <div>
                <p>Step Size is 2</p>
                Count - {state2.count}
            </div>
            <button type="button" onClick={() =>{
                dispatch2({
                    type: 'increment',
                    step : 2,
                });
            }}>Increment</button>
            <button type="button" onClick={()=>{
                dispatch2({
                    type : 'decrement',
                    step : 2,
                });
            }}>Decrement</button>

        </div>
        <div>
            <div>
                <p>Step Size is 5</p>
                Count - {state5.count}
            </div>
            <button type="button" onClick={() =>{
                dispatch5({
                    type: 'increment',
                    step : 5,
                });
            }}>Increment</button>
            <button type="button" onClick={()=>{
                dispatch5({
                    type : 'decrement',
                    step : 5  ,
                });
            }}>Decrement</button>

        </div>
        </>
    );
}