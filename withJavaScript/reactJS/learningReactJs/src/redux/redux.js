import {createStore} from "redux";

// redux e ki hoy
/**
 * 1. state declare
 * 2. dispatch action
 * 3. for action type declare some constants
 * 4. reducer
 * 5. store
 */

// defining actions type
const INCREMENT = "increment";
const DECREMENT = "decrement";
const ADD_USER = "adduser";
// state 
const initialCounterState = {
    count : 0,
}
const initialUsersState = {
    users : [{name:""}],
}
//action -> a object where we define the type  and we send some required data to pass
// Increment count 
const incrementActionCounter = ()=>{
        return {
            type : INCREMENT,
            payload :{
        
            },
        };
};
// Decrement count 
const decrementActionCounter = ()=>{
    return {
        type : DECREMENT,
        payload :{
    
        },
    };
};

// // User adding
// const userActionAdd = (user) =>{
//     type : ADD_USER,
//     payload : {...user,},
// };

// reducer -> it updates the current state of the states comparing the previous state 
const counterReducer = (state = initialCounterState, action) =>{
    switch(action.type){
        case INCREMENT : 
            return {
                ...state,
                count : state.count + 1,
            };
        case DECREMENT :
            return {
                ...state,
                count : state.count - 1,
            };
        default :
            return state;
    }
}

// createStore  -> getState(), dispatch(), subscribe()
// creating store ki chay she -> akta reducer and akta middleware 
const store = createStore(counterReducer);

store.subscribe(()=>{
    console.log(store.getState());
});

store.dispatch(incrementActionCounter());
store.dispatch(incrementActionCounter());
store.dispatch(incrementActionCounter());
store.dispatch(incrementActionCounter());
store.dispatch(incrementActionCounter());
store.dispatch(decrementActionCounter());
store.dispatch(decrementActionCounter());
store.dispatch(decrementActionCounter());