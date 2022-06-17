import {  applyMiddleware } from "redux";
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import user from './userSlice';
import course from './courseSlice';
// initial states here
const initalState = {};

// middleware
const middleware = [thunk];

// creating store with redux
// export const store = createStore(
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const combinedReducer = combineReducers({
  user,course
})

const masterReducer = (state, action)=>{
  if(action.type === HYDRATE){
    const nextState = {
      ...state,
      users:[...action.payload.user.users, ...state.user.users],
      courses:[...action.payload.user.courses, ...state.user.courses],
    }
    return nextState;
  }else {
    return combinedReducer(state, action)
  }
}

// assigning store to next wrapper
export const store = () => configureStore({
  reducer: masterReducer,
  devTools:  process.env.NODE_ENV !== 'production',
  // preloadedState
});

export const wrapper = createWrapper(store);