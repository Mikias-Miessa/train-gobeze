import {useState} from 'react'
import { Grid, TextField, Box, Button,InputLabel, Select, MenuItem,FormHelperText } from "@mui/material"
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
const NewCourse = ({setOpen}) => {
  const [date, setDate] = useState(null);
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('will add the course')
  }
  return (
    <>
    <Box
      component="form"
      // sx={{
      //   '& .MuiTextField-root': { m: 1, width: '25ch' },
      // }}
      // noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
     <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <InputLabel id="courseSelect">Select Course</InputLabel>
  <Select
    labelId="courseSelect"
    value={10}
    label="Course *"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Graphic Design</MenuItem>
    <MenuItem value={20}>Digital Marketing</MenuItem>
    <MenuItem value={30}>Video Editing</MenuItem>
  </Select>
  <FormHelperText>Required</FormHelperText>
      </Grid>
      <Grid item xs={12} sm={6}>
      <InputLabel id="courseSchedule">Choose Schedule</InputLabel>
  <Select
    labelId="courseSchedule"
    value={10}
    label="Schedule *"
    // onChange={handleChange}
  >
    <MenuItem value={10}>Work Days</MenuItem>
    <MenuItem value={20}>Weekends</MenuItem>
  </Select>
  <FormHelperText>Required</FormHelperText>
      </Grid>
    
    <Grid item xs={12}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Start Date"
        value={date}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            name="instructor"
            label="Course instructor"
            fullWidth
            variant="outlined"
          />
        </Grid>
        {/* <Grid item xs={12}>
          <TextField
            required
            name="batchName"
            label="Batch"
            fullWidth
            variant="outlined"
          />
        </Grid> */}
        <Grid item xs={12}>
          <TextField
            
            name="remark"
            label="Remark (Optional)"
            fullWidth
            variant="outlined"
          />
        </Grid>
        </Grid>
         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                 
                    <Button onClick={()=>{
                      setOpen(false)
                    }} sx={{ mt: 3, ml: 1 }}>
                      Cancel
                    </Button>
                 

                  <Button
                    variant="contained"
                    type='submit'
                    sx={{ mt: 3, ml: 1 }}
                  >
                   Add
                  </Button>
                </Box> 
      </Box>
    
    </>
  )
}

export default NewCourse