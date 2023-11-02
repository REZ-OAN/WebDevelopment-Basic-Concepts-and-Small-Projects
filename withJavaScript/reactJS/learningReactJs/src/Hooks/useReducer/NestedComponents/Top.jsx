import React, {createContext, useReducer} from 'react';
import ComponentA from './ComponentA';

// boiler plattes
export const counterContext = createContext();
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
export default function Top(){
    const [state,dispatch] = useReducer(reducer,initialState);
    return (
        <div>
            <div>Count : {state.count} From TOP</div>
           <counterContext.Provider value={{
            state,
            dispatch,
           }}>
                <ComponentA/>
           </counterContext.Provider>
        </div>
    );
}