import * as React from 'react';
import Link from '@mui/material/Link';
// import  from '@mui/material/Table';
import {Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal, Typography} from '@mui/material';

import Title from '../../Title';
import NewClass from './NewClass'
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

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Title>Closed Classes </Title>
     
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
         <Link href={`/admin/classes/students`}>See Students</Link>
    </Box>
                

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
    
    </>
  );
}