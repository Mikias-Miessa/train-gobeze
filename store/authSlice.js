import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import setAuthToken from '../src/utils/setAuthToken'
import axios from 'axios'
const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    auth: null,
    dashboard: null,
    error: null
  };

  //Load User
  export const loadUser = createAsyncThunk(
    "auth/loadUser",
    async (dispatch, getState) =>{
        setAuthToken(localStorage.token);
        try {
            console.log('got here')
        const res = await axios.get('http://localhost:3000/api/auth/user');
        console.log(res.data)
        return res.data
        } catch (err) {
            console.log(err.message)
        }
        
    }
)

 //Loign User
 export const login = createAsyncThunk(
  "auth/login",
  async (user,thunkAPI) =>{
    console.log(user)
    const { email, password } = user;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({ email, password });
      try {
          console.log('got here')
      const res = await axios.post('http://localhost:3000/api/auth/', body, config);
      console.log(res.data)
      if(res.data){
        localStorage.setItem('token', res.data.token);
      }
      return res.data
      } catch (err) {
          console.log(err.message)
      }
      
  }
)

  
  export const authSlice = createSlice({
      name: 'auth',
      initialState,
      reducers: {
          logout: (state, action)=>{
           
            state.token= null,
            state.isAuthenticated= false,
            state.user= null,
            state.loading = false
          }
      },
      extraReducers: (builder) => {
        builder
          .addCase(loadUser.pending, (state, action) => {
            state.loading = true 
          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(loadUser.fulfilled, (state, action) => {
            state.loading = false;
            console.log(action.payload)
            state.auth = action.payload
            state.isAuthenticated = true;
          })
          // You can match a range of action types
          .addCase(
            loadUser.rejected,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
                // state.error= action.error.message
            }
          )
          .addCase(login.pending, (state, action) => {
            state.loading = true 
          })
          .addCase(login.fulfilled, (state, action) => {
            state.loading = false;
            state.user = action.payload.user
            state.isAuthenticated = true;
          })
          .addCase(
            login.rejected,
            (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            }
          )
      },

  });

  export const { logout} = authSlice.actions

  export default authSlice.reducer