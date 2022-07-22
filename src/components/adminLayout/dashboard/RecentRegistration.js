import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Link from '../../Link';
import {Table,CircularProgress,TableBody,TableCell,TableHead,TableRow, Box } from '@mui/material';

import Title from '../../Title';
import {getStudents} from '../../../../store/studentSlice'
import Moment from 'moment';
// Generate Order Data
function createData(id,name, phone, email, course,date) {
  return { id, name, phone, email, course,date };
}

const rows = [
  createData(
    0,
    'Natnael Feleke',
    '0929336352',
    'nfeleke568@gmail.com',
    'GD101',
    'July 2 2021'
  ),
  createData(
    1,
    'Natnael Feleke',
    '0929336352',
    'nfeleke568@gmail.com',
    'GD101',
    'July 2 2021'
  ),
  createData(2,'Natnael Feleke',
  '0929336352',
  'nfeleke568@gmail.com',
  'GD101',
  'July 2 2021'),
  createData(
    3,
    'Natnael Feleke',
    '0929336352',
    'nfeleke568@gmail.com',
    'GD101',
    'July 2 2021'
  ),
  createData(
    4,
    'Natnael Feleke',
    '0929336352',
    'nfeleke568@gmail.com',
    'GD101',
    'July 2 2021'
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function RecentRegistration() {
  const {students, loading} = useSelector((state)=> state.student)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStudents());
  },[])
  return (
    <>
      <Title>Recent Registration </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Registered Date</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {
      loading ?<TableRow><TableCell colSpan={5}><CircularProgress color='primary' sx={{m:'auto'}} /> </TableCell></TableRow> : 
          students.map((student,index) => student &&(
            <TableRow key={index}>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.phone}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.course?.course?.courseName}</TableCell>
              <TableCell>{student.createdAt && Moment(student.createdAt).format(
            'MMM DD YYYY '
          )}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Box sx={{mt: 3 ,'& a':{}}}>
      <Link  href="/admin/students" >
        See more 
      </Link>
        </Box>
    </>
  );
}