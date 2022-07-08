import {useState,useEffect} from 'react'
import Image from 'next/image';
import {useSelector,useDispatch} from 'react-redux'
import { Grid, TextField, Box, Button,InputLabel, Select, MenuItem,FormHelperText,CircularProgress,Backdrop } from "@mui/material"
import { toast } from 'react-toastify';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { addClass,reset } from '../../../../store/classSlice';
import { getCourses } from '../../../../store/courseSlice';


const NewCourse = ({setOpen}) => {
const {classes, loading,newClassAdded} = useSelector((state)=> state.classroom)
const {courses} = useSelector((state)=> state.course)
const [backdrop, setBackdrop] = useState(false);
  const dispatch = useDispatch();
  const [values,setValues] = useState({
    course: '',
    description:'',
    schedule: 'work_days',
    start_date: null,
    instructor: '',
    remark: '',
    thumbnail: null
  });

  const [imageInput,setImageInput] = useState(null)

  let courseOptions =[<MenuItem key={0} value=''>No Courses</MenuItem>];
  // let courseOptions =  <MenuItem value=''>Choose Courses</MenuItem>;
  if(courses.length > 0 ){
    courseOptions = courses.map((course,index)=> course && (
      <MenuItem key={index+1} value={course._id && course._id}>{course.courseName && course.courseName}</MenuItem>
    )) 
        }

  useEffect(()=>{
    dispatch(getCourses())
  },[])


  
      const handleImageChange = (e)=>{
        const file = e.target.files[0];
        setValues({...values,
          thumbnail: file})
          if(file){

            const fileReader = new FileReader();
            fileReader.onload = function(e){
              setImageInput(e.target.result)
              
            }
            fileReader.readAsDataURL(file)
          }
      }
  const handleInputChange = (e)=>{
    const {name,value} = e.target;

    setValues({
      ...values,
      [name]:value
    })
  }
  useEffect(() => {
    if(newClassAdded==='pending'){
      setBackdrop(true)
    }
    if(newClassAdded === 'success'){
      toast.success('New Class added successfully!');
      setOpen(false);
      setBackdrop(false)
      dispatch(reset())
    }
  }, [newClassAdded])
  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(values)
    const formData = new FormData();
 

    formData.append('course',values.course);
    formData.append('description',values.description);
    formData.append('schedule',values.schedule);
    formData.append('start_date',values.start_date);
    formData.append('instructor',values.instructor);
    formData.append('remark',values.remark);
    formData.append('thumbnail',values.thumbnail);
    dispatch(addClass(formData))
  }
  
  return (
    <>
    <Box
      component="form"
      sx={{
       width: '100%'
      }}
      // noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
     <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
      <InputLabel id="courseSelect">Select Course</InputLabel>
  <Select
    labelId="courseSelect"
    value={values.course}
    name='course'
    label="Course *"
    onChange={handleInputChange}
    required
    sx={{
      minWidth: '200px'
    }}
  >
   {courseOptions}
  </Select>
  <FormHelperText>Required</FormHelperText>
      </Grid>
      <Grid item xs={12} sm={6}>
      <InputLabel id="schedule">Choose Schedule</InputLabel>
  <Select
    labelId="schedule"
    value={values.schedule}
    label="Schedule *"
    name='schedule'
    onChange={handleInputChange}
  >
    <MenuItem value='work_days'>Work Days</MenuItem>
    <MenuItem value='weekends'>Weekends</MenuItem>
  </Select>
  <FormHelperText>Required</FormHelperText>
      </Grid>
      <Grid item xs={12}>
          <TextField
            required
            name="description"
            label="Class description"
            fullWidth
            variant="outlined"
            onChange={handleInputChange}
            value={values.description}
            multiline
          />
        </Grid>
    <Grid item xs={12}>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Start Date"
        required
        value={values.start_date}
        name='start_date'
        onChange={(newValue) => {
          setValues({
            ...values,
            start_date:newValue
          });
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
            onChange={handleInputChange}
            value={values.instructor}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel htmlFor='thumbnail'>Upload thumbnail</InputLabel>
          <TextField
          id='thumbnail'
          type='file'
            required
            name="thumbnail"
            // label="Upload thumbnail"
            fullWidth
            variant="outlined"
            onChange={handleImageChange}
          />
          {imageInput &&<Image src={imageInput} width={100} height='100' /> }
        </Grid>
        <Grid item xs={12}>
          <TextField
            
            name="remark"
            label="Remark (Optional)"
            fullWidth
            variant="outlined"
            onChange={handleInputChange}
            value={values.remark}
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
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  )
}

export default NewCourse