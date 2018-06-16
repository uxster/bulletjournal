import { createStore, combineReducers, applyMiddleware } from "redux";
import messageReducer from "./reducers/message";
import thunk from "redux-thunk";

/*
*
* Import the message reducer and pass it into combineReducers to combine all reducers into one and 
store it inside a reducer variable.
*
*/

const reducer = combineReducers({
  messageReducer
});

/** 
*
* Import the message reducer and pass it into combineReducers to combine all reducers into one and 
store it inside a reducer variable.
*
**/
const store = createStore(reducer, applyMiddleware(thunk));

export default store;
