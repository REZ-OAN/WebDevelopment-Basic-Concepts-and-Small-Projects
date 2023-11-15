//Here all of the actions are defined 
// actions that returns the types and payload ( in out counter example payload is not needed)

import {DECREMENT, INCREMENT, RESET} from "../Constants/actionTypes";

// for increment
export const incrementAction = ()=>{
    return {
        type : INCREMENT,
    };
};

export const decrementAction = () =>{
    return {
        type : DECREMENT,
    };
};

export const resetAction = () =>{
    return {
        type : RESET,
    };
};