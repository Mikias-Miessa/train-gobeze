import { useState } from "react";
import {useSelector, useDispatch } from 'react-redux';
import { Grid, TextField, Box, Button } from "@mui/material"
import {addCourse} from '../../../../store/courseSlice';

const NewCourse = ({setOpen}) => {
  const [values, setValues] = useState({
    courseName: '',
    courseCode: '',
    price: ''
  })

const {courses, loading} = useSelector((state)=> state.course)
// const {alert} = useSelector((state)=> state.alert)

const dispatch = useDispatch();
  const handleInputChange = (e)=>{
    const {name,value} = e.target;

    setValues({
      ...values,
      [name]:value
    })
  }
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(values)
    dispatch(addCourse(values))
  }
  return (
    <><form action="" onSubmit={handleSubmit}>
      
      
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseName"
            name="courseName"
            label="Course name"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseCode"
            name="courseCode"
            label="Course code"
            fullWidth
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid>
    <Grid item xs={12}>
          <TextField
            required
            name="price"
            label="Course price"
            fullWidth
            type='number'
            variant="standard"
            onChange={handleInputChange}
          />
        </Grid></Grid>
         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                 
                    <Button onClick={()=>{
                      setOpen(false)
                    }} sx={{ mt: 3, ml: 1 }}>
                      Cancel
                    </Button>
                 

                  <Button
                    variant="contained"
                    type='submit'
                    // onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                  >
                   Add
                  </Button>
                </Box>
                </form>
    </>
  )
}

export default NewCourse