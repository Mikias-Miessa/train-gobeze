import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import axios from 'axios';
const initialState = {
    courses: [],
    course: null,
    loading: true,
    newCourseAdded: ''
  };

  export const getCourses = createAsyncThunk(
    "course/getall",
    async (course,thunkAPI) =>{
         
        try {
        const res = await axios.get('/api/courses');
  
        return res.data;
        
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  )
   //add course
 export const addCourse = createAsyncThunk(
    "course/add",
    async (course,thunkAPI) =>{
     // console.log(course)
      const { courseName,
      courseCode,
      price,online_url } = course;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ courseName,
        courseCode,
        price,online_url });
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
        reset: (state)=>{
          state.newCourseAdded = ''
        }
      },
      extraReducers: (builder) => {
        builder
          .addCase(addCourse.pending, (state, action) => {
            state.loading = true;
            state.newCourseAdded = 'pending';

          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(addCourse.fulfilled, (state, action) => {
            state.loading = false;
            state.courses = [...state.courses,action.payload]
            state.newCourseAdded = 'success';
           
          })
          // You can match a range of action types
          .addCase(
            addCourse.rejected,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
            state.newCourseAdded = '';

                // state.error= action.error.message
            }
          )
          .addCase(getCourses.pending, (state, action) => {
            state.loading = true;

          })
          .addCase(getCourses.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.courses = action.payload;
            
  // const dispatch = useDispatch();

  //           dispatch(setAlert({
  //             msg: 'Course added'
  //             , alertType: 'success'
  //           }))
           
          })
          .addCase(
            getCourses.rejected,
            (state, action) => {
                state.loading = false;
            }
          )
      },
  });

  export const {reset} = courseSlice.actions

  export default courseSlice.reducer