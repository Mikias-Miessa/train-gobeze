import { Grid, TextField, Box, Button } from "@mui/material"

const NewCourse = ({setOpen}) => {

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('will add the course')
  }
  return (
    <>
    <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
          <TextField
            required
            id="courseName"
            name="courseName"
            label="Course name"
            fullWidth
            variant="standard"
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
                    onClick={handleSubmit}
                    sx={{ mt: 3, ml: 1 }}
                  >
                   Add
                  </Button>
                </Box>
    </>
  )
}

export default NewCourse