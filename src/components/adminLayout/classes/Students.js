import * as React from 'react';
import Link from '@mui/material/Link';
// import  from '@mui/material/Table';
import {Grid, Container,Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal, Typography, Divider} from '@mui/material';

import Title from '../../Title';
import NewClass from './NewClass'
// Generate Order Data
function createData(id,name, phone, email, paidAmount, registeredBy) {
  return { id,name, phone, email, paidAmount, registeredBy };
}

const rows = [
  createData(
    0,
    'Abebe Lakew',
    '0926564865',
    'abelakew@gmail.com',
    3800,
    'Meaza',
  ),
  createData(
    1,
    'Abebe Lakew',
    '0926564865',
    'abelakew@gmail.com',
    3800,
    'Meaza',
  ),
  createData(2,
  'Abebe Lakew',
  '0926564865',
  'abelakew@gmail.com',
  2000,
  'Online',
  ),
  createData(
    3,
    'Abebe Lakew',
    '0926564865',
    'abelakew@gmail.com',
    3800,
    'Meaza',
  ),
  createData(
    4,
    'Abebe Lakew',
    '0926564865',
    'abelakew@gmail.com',
    3800,
    'Meaza',
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

export default function Students() {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
    <Grid container spacing={3}>
     
      {/* Recent Running */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <div>
                <Title>Graphic Design</Title>
        <Typography variant='body1'>
            GD101
        </Typography>    
                </div>
               

        <Divider orientation='vertical' flexItem/>
        <div>

        <Typography variant='h2' sx={{fontSize: '1rem'}}>
            July 2 ( Batch Name )
        </Typography>   
        <Typography variant='h2' sx={{fontSize: '1rem', mt: '1rem', color: 'primary.main'}}>
            5 Students
        </Typography>  
        </div>
            </Box>
        
      <Paper elevation={0}  sx={{
              p: '24px'
            }} >
      <Button variant="contained" onClick={handleOpen}>Enroll New Student</Button>
      </Paper>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Paid Amount</TableCell>
            <TableCell>Registered By</TableCell>
            {/* <TableCell>Price</TableCell> */}
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
              
              <TableCell sx={{background: row.paidAmount >= 3800 ? '': 'red' }}>{row.paidAmount}</TableCell>
              <TableCell >{row.registeredBy}</TableCell>
              <TableCell>
              {/* <Box  sx={{ display: 'flex', gap: '1rem' }}>
                <Typography>{row.enrolledStudents}</Typography>
         <Link href={`/admin/classes/students`}>See Students</Link>
    </Box> */}
                

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
        </Paper>
      </Grid>
     
    </Grid>
  
  </Container>
      
    </>
  );
}