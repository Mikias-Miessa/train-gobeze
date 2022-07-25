import {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux'
import Link from '../../Link';
import {Table,CircularProgress,TableBody,TableCell,TableHead,TableRow, Box, Typography } from '@mui/material';

import Title from '../../Title';
import {getStudents} from '../../../../store/studentSlice'
import Moment from 'moment';


function preventDefault(event) {
  event.preventDefault();
}

export default function Students() {
  const {students, loading} = useSelector((state)=> state.student)

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getStudents());
  },[]);

  const getDuration = (date) => {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const createdDate = new Date(date);
    const today = new Date();
    const utc1 = Date.UTC(
      createdDate.getFullYear(),
      createdDate.getMonth(),
      createdDate.getDate()
    );
    const utc2 = Date.UTC(
      today.getFullYear(),
      today.getMonth(),
      today.getDate()
    );
    const dayDifference = Math.floor((utc2 - utc1) / _MS_PER_DAY);
    return dayDifference === 0 ? 'Today' : dayDifference + ' days ago';
  };

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
              <TableCell >{student.createdAt && Moment(student.createdAt).format(
            'MMM DD YYYY '
          )}
          <Typography sx={{color: 'primary.main',fontSize: '0.875rem',}}>
            {getDuration(student.createdAt && student.createdAt)}
          </Typography>
          </TableCell>
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