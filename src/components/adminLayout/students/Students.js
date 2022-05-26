import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from '../../Title';

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

export default function Students() {
  return (
    <React.Fragment>
      <Title>Students </Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Dte</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              <TableCell>{row.course}</TableCell>
              <TableCell>{row.date}</TableCell>
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more 
      </Link>
    </React.Fragment>
  );
}