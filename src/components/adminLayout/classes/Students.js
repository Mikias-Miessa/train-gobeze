import { useRouter } from 'next/router'
import {useState, useEffect} from 'react';
import Link from '@mui/material/Link';
import Moment from 'moment';
import {useSelector,useDispatch} from 'react-redux'
import {Grid, Container,Table,TableBody,TableCell, TableHead,TableRow,Button, Paper, Box, Modal, Typography, Divider, CircularProgress} from '@mui/material';
import { getClass } from '../../../../store/classSlice';

import Title from '../../Title';
import NewStudent from './NewStudent'

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
  const dispatch = useDispatch();
const router = useRouter();
const {query} = router;
  const {singleClass, loading} = useSelector((state)=> state.classroom)

  const [open, setOpen] = useState(false);
console.log(singleClass)
  useEffect(() => {
    // console.log(query)
        query &&  dispatch(getClass(query.id));
      }, [query])

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
    {loading ? <CircularProgress color='primary' sx={{m:'auto'}} />: singleClass && <>
     <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ p: 2, display: 'flex', alignItems: 'center', gap: '2rem'}}>
                <div>
                <Title>{singleClass.course?.courseName}</Title>
        <Typography variant='body1'>
        {singleClass.course?.courseCode}
        </Typography>    
                </div>
               

        <Divider orientation='vertical' flexItem/>
        <div>

        <Typography variant='h2' sx={{fontSize: '1rem',color: 'primary.main'}}>
           Start Date :  {singleClass.start_date && Moment(singleClass.start_date).format(
            'MMM DD YYYY '
          )}
        </Typography>   
        <Typography variant='h2' sx={{fontSize: '1rem', mt: '1rem', }}>
            {singleClass.students.length} Students
        </Typography>  
        </div>
        <Divider orientation='vertical' flexItem/>

        <div>
      <Button variant="contained" sx={{fontSize: '0.75rem',p: '4px 12px'}} onClick={handleOpen}>Enroll New Student</Button>

        </div>
            </Box>
        
      <Paper elevation={0}  sx={{
              p: 2
            }} >
              <Typography component='h4' sx={{fontSize: '1.125rem',fontWeight: '500'}}>List of Enrolled Students</Typography>
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
          {singleClass.students.filter(student=> student.status ==='enrolled').length > 0 ? singleClass.students.filter(student=> student.status ==='enrolled').map((row,index) => row && (
            <TableRow key={index}>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.phone}</TableCell>
              <TableCell>{row.email}</TableCell>
               
              <TableCell sx={{background: row.payment?.amount < row.course?.course?.price ? 'red': '' }}>{row.payment?.amount}</TableCell>
              <TableCell >{row.registered_online ? 'Online' : row.registeredBy}</TableCell>
              <TableCell>
              {/* <Box  sx={{ display: 'flex', gap: '1rem' }}>
                <Typography>{row.enrolledStudents}</Typography>
         <Link href={`/admin/classes/students`}>See Students</Link>
    </Box> */}
                

              </TableCell>
              {/* <TableCell>{row.price}</TableCell> */}
              {/* <TableCell align="right">{`$${row.amount}`}</TableCell> */}
            </TableRow>
          )): <> <TableRow > <TableCell sx={{textAlign:'center',color:'gray'}} colSpan={5}> No Students enrolled in this course</TableCell></TableRow></>}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        See more 
      </Link>
     
        </Paper>
      </Grid>
    </>}
     
     
    </Grid>
  
  </Container>
  <Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="parent-modal-title"
  aria-describedby="parent-modal-description"
>
  <Box sx={{ ...modalStyle, width: 500 }}>
    <h2 id="parent-modal-title">Enroll new Student in <Box component='span' sx={{fontWeight: '300',color: 'primary.main'}} >{singleClass?.course?.courseName} </Box> </h2>
    <p id="parent-modal-description">
      Add a student who has made payment.
    </p>
    <NewStudent setOpen={setOpen} course={singleClass?._id} price={singleClass?.course?.price} />
  </Box>
</Modal>
    </>
  );
}