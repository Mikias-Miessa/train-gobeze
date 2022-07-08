import  {useState, useEffect} from 'react';
import Link from '@mui/material/Link';
import {useSelector,useDispatch} from 'react-redux'
import {Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal, Typography} from '@mui/material';

import Title from '../../Title';
import NewCourse from './NewCourse'
import { getCourses } from '../../../../store/courseSlice';
// Generate Order Data
function createData(id,name, courseCode, price) {
  return { id, name, courseCode, price };
}

const rows = [
  createData(
    0,
    'Introduction to Graphic Design',
    'GD101',
    '3800'
  ),
  createData(
    1,
    'Advanced Graphic Design',
    'GDA',
    '10000'
  ),
  createData(2,'Introduction to Graphic Design',
  'GD101',
  '3800'),
  createData(
    3,
    'Introduction to Graphic Design',
    'GD101',
    '3800',
  ),
  createData(
    4,
    'Introduction to Graphic Design',
    'GD101',
    '4000',
  ),
];

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  // border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function preventDefault(event) {
  event.preventDefault();
}

export default function Courses() {
  
const dispatch = useDispatch();
  const {courses, loading} = useSelector((state)=> state.course)


  const [open, setOpen] = useState(false);

  useEffect(() => {
    dispatch(getCourses())
  }, [])
  

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Title>Courses </Title>
      <Paper elevation={0}  sx={{
              p: '24px'
            }} >
      <Button variant="contained" onClick={handleOpen}>New Course</Button>
      </Paper>
      {loading? <Typography variant='body1' sx={{textAlign: 'center'}}>
        Loading ...
        </Typography> : courses.length > 0 ? <>
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Code</TableCell>
            <TableCell>Price</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course,index) => course && (
            <TableRow key={index}>
                 <TableCell>{course.courseName && course.courseName}</TableCell>
            <TableCell>{course.courseCode && course.courseCode}</TableCell>
            <TableCell>{course.price && course.price}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
       <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more 
      </Link>
        </> : <>
        <Typography component='span' variant='body1' sx={{textAlign: 'center',margin: 'auto',color:'secondary.light'}}>
       No courses added yet!
        </Typography>
        </>        
        }
    
     
      <Modal
  open={open}
  onClose={handleClose}
>
  <Box sx={{ ...modalStyle, width: '80%' }}>
    <h2 id="parent-modal-title">Add new course</h2>
    <p id="parent-modal-description">
      Add In-person courses which are held on Gobeze.
    </p>
    <NewCourse setOpen={setOpen} />
  </Box>
</Modal>
    </>
  );
}