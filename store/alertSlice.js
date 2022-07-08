import {createSlice} from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const initialState = [];


  
  export const alertSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
          setAlert: (state, action)=>{
            const id = uuidv4();
            const {msg,alertType} = action.payload;
            let alert = {
id,msg,alertType
            }
            state=[...state, alert] ;
          },
          removeAlert: (state)=>{
          state=  state.filter((alert) => alert.id !== action.payload);
          }
      },
     
  });

  export const { setAlert,removeAlert} = alertSlice.actions

  export default alertSlice.reducer