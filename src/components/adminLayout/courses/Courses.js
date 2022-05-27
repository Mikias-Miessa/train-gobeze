import * as React from 'react';
import Link from '@mui/material/Link';
// import  from '@mui/material/Table';
import {Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal} from '@mui/material';

import Title from '../../Title';
import NewCourse from './NewCourse'
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

  const [open, setOpen] = React.useState(false);
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
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.courseCode}</TableCell>
              <TableCell>{row.price}</TableCell>
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