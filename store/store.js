import {  applyMiddleware } from "redux";
import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

import user from './userSlice';
import course from './courseSlice';
import auth from './authSlice';
import classroom from './classSlice';
import student from './studentSlice';
// initial states here
const initalState = {};


// creating store with redux
// export const store = createStore(
//   rootReducer,
//   initalState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

const combinedReducer = combineReducers({
  auth,user,course,classroom,student
})

const masterReducer = (state, action)=>{
  if(action.type === HYDRATE){
    const nextState = {
      ...state,
      users:[...action.payload.user.users, ...state.user.users],
      courses:[...action.payload.course.courses, ...state.course.courses],
      classes:[...action.payload.classroom.classes, ...state.classroom.classes],
      students:[...action.payload.student.students, ...state.student.students],
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