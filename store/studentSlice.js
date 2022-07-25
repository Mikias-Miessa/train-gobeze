import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {useDispatch} from 'react-redux'
import axios from 'axios';

const initialState = {
    students: [],
    student: null,
    loading: true,
    status: ''
  };

  export const getStudents = createAsyncThunk(
    "student/getall",
    async (student,thunkAPI) =>{
         
        try {
        const res = await axios.get('/api/students');
  
        return res.data;
        
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  )
   //add student
 export const addStudent = createAsyncThunk(
    "student/add",
    async (student,thunkAPI) =>{
     console.log(student)
      const { course,name,
      email,
      phone,bank } = student;
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ course,name,
        email,
        phone,bank });
        try {
        const res = await axios.post('/api/students/register', body, config);
  console.log(res.data)
        return res.data;
        
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  );

  
    //mark student as contacted with/out remark 
 export const markAsContacted = createAsyncThunk(
  "student/add",
  async (student,thunkAPI) =>{
   console.log(student)
    const { id,remark } = student;
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const body = JSON.stringify({remark});
      try {
      const res = await axios.put(`/api/students/contacted/${id}`, body, config);
console.log(res.data)
      return res.data;
      
      
      } catch (error) {
        console.log(error)
        const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
        console.log(message)
             
           return thunkAPI.rejectWithValue(message)
          
      }
  }
);

   //delete student
   export const deleteStudent = createAsyncThunk(
    "student/delete",
    async (id,thunkAPI) =>{
     console.log(id)
     
     
        try {
        const res = await axios.delete(`/api/students/${id}`);
  console.log(res.data)
        return res.data;
        
        
        } catch (error) {
          console.log(error)
          const message = (error.response && error.response.data && error.response.data.errors) || error.message || error.toString();
          console.log(message)
               
             return thunkAPI.rejectWithValue(message)
            
        }
    }
  );

  export const studentSlice = createSlice({
      name: 'student',
      initialState,
      reducers: {
        reset: (state)=>{
          state.status = ''
        }
      },
      extraReducers: (builder) => {
        builder
          .addCase(addStudent.pending, (state, action) => {
            state.loading = true;
            state.status = 'pending';

          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(addStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.students = [...state.students,action.payload]
            state.status = 'success';
           
          })
          // You can match a range of action types
          .addCase(
            addStudent.rejected,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
            state.status = '';

                // state.error= action.error.message
            }
          )
          .addCase(deleteStudent.pending, (state, action) => {
            state.loading = true;
            state.status = 'deleting';

          })
          // You can chain calls, or have separate `builder.addCase()` lines each time
          .addCase(deleteStudent.fulfilled, (state, action) => {
            state.loading = false;
            state.students = state.students.filter(student => student._id !== action.payload.id)
            state.status = 'deleted';
           
          })
          // You can match a range of action types
          .addCase(
            deleteStudent.rejected,
            // `action` will be inferred as a RejectedAction due to isRejectedAction being defined as a type guard
            (state, action) => {
                state.loading = false;
            state.status = '';

                // state.error= action.error.message
            }
          )
          .addCase(getStudents.pending, (state, action) => {
            state.loading = true;

          })
          .addCase(getStudents.fulfilled, (state, action) => {
            console.log(action.payload);
            state.loading = false;
            state.students = action.payload;
            
  // const dispatch = useDispatch();

  //           dispatch(setAlert({
  //             msg: 'Student added'
  //             , alertType: 'success'
  //           }))
           
          })
          .addCase(
            getStudents.rejected,
            (state, action) => {
                state.loading = false;
            }
          )
      },
  });

  export const {reset} = studentSlice.actions

  export default studentSlice.reducer