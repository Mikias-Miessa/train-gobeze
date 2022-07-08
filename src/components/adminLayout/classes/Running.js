import {useState,useEffect} from 'react';
import {useSelector,useDispatch} from 'react-redux'
import Link from '../../Link';
import Moment from 'moment';
import {Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal, Typography,Popper,Fade,IconButton} from '@mui/material';

import Title from '../../Title';
import NewClass from './NewClass'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import { getClasses } from '../../../../store/classSlice';
// Generate Order Data
function createData(id,name, courseCode, courseSchedule, startDate, batchName,  instructor, enrolledStudents) {
  return { id,name, courseCode, courseSchedule, startDate, batchName,  instructor, enrolledStudents };
}

const rows = [
  createData(
    0,
    'Introduction to Graphic Design',
    'GD101',
    'Weekend',
    'July 2 2021',
    'July 2022 Batch',
    'Kidus Yosef',
    12
  ),
  createData(
    1,
    'Advanced Graphic Design',
    'GDA',
    'Weekend',
    'October 2 2021',
    'October 2021 Batch',
    'Kidus Yosef',
    14
  ),
  createData(2,'Introduction to Graphic Design',
  'GD101',
  'Work days',
  'July 2 2021',
  'July 2021 Batch',
  'Kidus Yosef',10
  ),
  createData(
    3,
    'Introduction to Graphic Design',
    'GD101',
    'Workdays',
    'October 2 2021',
    'October 2021 Batch',
    'Kidus Yosef',12
  ),
  createData(
    4,
    'Introduction to Graphic Design',
    'GD101',
    'Weekend',
    'October 2 2021',
    'October 2021 Batch',
    'Kidus Yosef',12
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

export default function Classes() {
const {classes, loading} = useSelector((state)=> state.classroom)
const dispatch = useDispatch();
console.log(classes)
console.log(classes)
  const [open, setOpen] = useState(false);
  const [openPoper, setOpenPoper] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    dispatch(getClasses())
  }, [])
  const handlePopperClick = (event) => {
    setAnchorEl(event.currentTarget);
    setOpenPoper((prev) => !prev);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Title>Running Classes (5)</Title>
      <Paper elevation={0}  sx={{
              p: '24px'
            }} >
      <Button variant="contained" onClick={handleOpen}>New Class</Button>
      </Paper>
      {loading ? <Typography variant='body1' sx={{textAlign: 'center'}}>
        Loading ...
        </Typography>: <>
        <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Schedule</TableCell>
            <TableCell>Start Date</TableCell>
            <TableCell>Instructor</TableCell>
            <TableCell>Enrolled Students</TableCell>
            {/* <TableCell>Price</TableCell> */}
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          { classes.length>0 ? classes.map((item,index) => item &&(
            <TableRow key={index}>
              <TableCell>{item.course?.courseName}</TableCell>
              <TableCell>{item.schedule && item.schedule}</TableCell>
              
              <TableCell>{item.start_date && Moment(item.start_date).format(
            'MMM DD YYYY '
          )}</TableCell>
              <TableCell>{item.instructor && item.instructor}</TableCell>
              <TableCell>
              <Box  sx={{ display: 'flex', gap: '1rem' }}>
                <Typography>{item.students ? item.students.length : 0}</Typography>
         <Link href={`/admin/classes/students`} >See Students</Link>
    </Box>
                

              </TableCell>
              <TableCell>
              <Popper open={openPoper} anchorEl={anchorEl} placement='bottom-end' transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <Paper sx={{p: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start', }}>
            <Button sx={{border: 'none',color: 'secondary.main', fontWeight: '300', textTransform: 'none'}} variant="outlined" startIcon={<DoDisturbAltOutlinedIcon fontSize='small' />}>
  End Class
</Button>
<Button   sx={{border: 'none',color: 'secondary.main', fontWeight: '300', textTransform: 'none'}} variant="outlined" startIcon={<EditOutlinedIcon fontSize='small' />}>
  Edit Class
</Button>
            <Button   sx={{border: 'none',color: 'secondary.main', fontWeight: '300', textTransform: 'none'}} variant="outlined" startIcon={<DeleteOutlineOutlinedIcon fontSize='small' />}>
  Delete Class
</Button>

            </Paper>
          </Fade>
        )}
      </Popper>
      <IconButton onClick={handlePopperClick} >
        <MoreVertIcon />
      </IconButton>
              </TableCell>
              {/* <TableCell>{row.price}</TableCell> */}
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          )) : <>
          <TableRow>
<TableCell colSpan={5} sx={{textAlign: 'center'}}>
  
          <Typography component='span' variant='body1' sx={{color: 'secondary.light'}} >
       There are no running classes.
        </Typography>
</TableCell>
          </TableRow>
          </>}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more 
      </Link>
        </>}
     

      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...modalStyle, width: '80%' }}>
    <h2 id="parent-modal-title">Add new class</h2>
    <p id="parent-modal-description">
      Add In-person classes which are held on Gobeze.
    </p>
    <NewClass setOpen={setOpen} />
  </Box>
</Modal>
    </>
  );
}