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
          addCourse: (state, action)=>{
            state.courses=[...state.courses, action.payload],
            state.loading = false
          }
      }
  });

  export const {getCourses, addCourse, getCourse} = courseSlice.actions

  export default courseSlice.reducer