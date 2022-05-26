import { Grid, TextField } from "@mui/material"

const NewCourse = () => {
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
            name="name"
            label="Course name"
            fullWidth
            variant="standard"
          />
        </Grid></Grid>
    </>
  )
}

export default NewCourse