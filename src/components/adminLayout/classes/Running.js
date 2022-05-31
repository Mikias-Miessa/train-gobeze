import {useState} from 'react';
import Link from '../../Link';
// import  from '@mui/material/Table';
import {Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal, Typography,Popper,Fade,IconButton} from '@mui/material';

import Title from '../../Title';
import NewClass from './NewClass'
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DoDisturbAltOutlinedIcon from '@mui/icons-material/DoDisturbAltOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
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

  const [open, setOpen] = useState(false);
  const [openPoper, setOpenPoper] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.courseSchedule}</TableCell>
              
              <TableCell>{row.startDate}</TableCell>
              <TableCell>{row.instructor}</TableCell>
              <TableCell>
              <Box  sx={{ display: 'flex', gap: '1rem' }}>
                <Typography>{row.enrolledStudents}</Typography>
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
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more 
      </Link>

      <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...modalStyle, width: 400 }}>
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