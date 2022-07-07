import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
    courses: [],
    course: null,
    loading: true,
  };

  const fetchCourses = createAsyncThunk(
      "course/fetchCourses",
      async (dispatch, getState) =>{
          return await axios.get(' ')
      }

  )
   //add course
 export const addCourse = createAsyncThunk(
    "course/add",
    async (course,thunkAPI) =>{
      // console.log(course)
      const { courseName,
      courseCode,
      price } = course;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ courseName,
        courseCode,
        price });
        try {
        const res = await axios.post('/api/courses', body, config);
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
  
  export const courseSlice = createSlice({
      name: 'course',
      initialState,
      reducers: {
          getCourses: (state, action) =>{
              state.courses = action.payload,
              state.loading = false
          },
          getCourse: (state, action) =>{
            state.course = action.payload,
            state.loading = false
        },
      },
      extraReducers: (builder) => {
        builder
          .addCase(addCourse.pending, (state, action) => {
            state.loading = true 
          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(addCourse.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = state.courses.push(action.payload)
           
          })
          // You can match a range of action types
          .addCase(
            addCourse.rejected,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
                // state.error= action.error.message
            }
          )
      },
  });

  export const {getCourses, getCourse} = courseSlice.actions

  export default courseSlice.reducer