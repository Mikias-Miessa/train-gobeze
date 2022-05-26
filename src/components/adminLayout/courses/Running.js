import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
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

export default function Running() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={3}>
     
      {/* Recent Courses */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
        <React.Fragment>
      <Title>Courses Running</Title>
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
        </Paper>
      </Grid>
    </Grid>
  
  </Container>
   
  );
}