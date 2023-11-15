import {applyMiddleware, combineReducers, createStore} from "redux";

// this helps us to visualize the prev and next state after any state changes happens
// this shows in the console
import logger from "redux-logger";
import counterReducer from "../Reducers/counterReducer";

// combine the reducers as redux can store one reducer at a time
const reducer = combineReducers({
    counterR : counterReducer,
}); 

// creating store 
const store = createStore(reducer,applyMiddleware(logger));

export default store;