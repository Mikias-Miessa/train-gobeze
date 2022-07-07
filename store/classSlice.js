import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import axios from 'axios';
const initialState = {
    classes: [],
    singleClass: null,
    loading: true,
    newClassAdded: ''
  };

  export const getClasses = createAsyncThunk(
    "classroom/getall",
    async (classValues,thunkAPI) => {
         
        try {
        const res = await axios.get('/api/classes');
  
        return res.data;
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  )

  export const getClass = createAsyncThunk(
    "classroom/getclass",
    async (id,thunkAPI) => {
          
        try {
        const res = await axios.get(`/api/classes/${id}`);
  
        return res.data;
        
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  )

   //add class
 export const addClass = createAsyncThunk(
    "classroom/add",
    async (classValues,thunkAPI) =>{
     // console.log(class)
      const {course,instructor,start_date,schedule,description,remark} = classValues;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ course,instructor,start_date,schedule,description,remark });
        try {
        const res = await axios.post('/api/classes', body, config);
  console.log(res.data)
        return res.data;
        
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  )
  
  export const classSlice = createSlice({
      name: 'classroom',
      initialState,
      reducers: {
        reset: (state)=>{
          state.newClassAdded = ''
        }
      },
      extraReducers: (builder) => {
        builder
          .addCase(addClass.pending, (state, action) => {
            state.loading = true;
            state.newClassAdded = 'pending';

          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(addClass.fulfilled, (state, action) => {
            state.loading = false;
            state.classes = [...state.classes,action.payload]
            state.newClassAdded = 'success';
           
          })
          // You can match a range of action types
          .addCase(
            addClass.rejected,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
            state.newClassAdded = '';

                // state.error= action.error.message
            }
          )
          .addCase(getClasses.pending, (state, action) => {
            state.loading = true;

          })
          .addCase(getClasses.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.classes = action.payload;           
          })
          .addCase(
            getClasses.rejected,
            (state, action) => {
                state.loading = false;
            }
          )
          .addCase(getClass.pending, (state, action) => {
            state.loading = true;

          })
          .addCase(getClass.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.singleClass = action.payload;           
          })
          .addCase(
            getClass.rejected,
            (state, action) => {
                state.loading = false;
            }
          )
      },
  });

  export const {reset} = classSlice.actions

  export default classSlice.reducer