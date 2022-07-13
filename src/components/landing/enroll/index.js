import {useState,useEffect} from 'react';
import { useSelector,useDispatch} from 'react-redux'
import {Box,Paper,Grid, TextField, Button, Select, InputLabel, MenuItem, FormHelperText, Typography,Backdrop,CircularProgress, Modal} from '@mui/material';
import { useRouter } from 'next/router'
import Footer from "../Footer"
import Header from "../training/Header"
import Hero from '../training/ClassHero'
import graphics from '../../../images/graphics.avif';
import Image from 'next/image';
import ArrowForwardSharpIcon from '@mui/icons-material/ArrowForwardSharp';
import {getClass} from '../../../../store/classSlice'
import {addStudent,reset} from '../../../../store/studentSlice'
import Information from './Information';

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

const TrainingsPage = () =>{
  const {singleClass, loading} = useSelector((state)=> state.classroom)
  const {newStudentAdded} = useSelector((state)=> state.student)

const router = useRouter();
const dispatch = useDispatch();
const {query} = router;
// console.log(query)
  const [values, setValues] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    bank: 'cbe'
  });
  const [backdrop, setBackdrop] = useState(false);
  const [info, setInfo] = useState(false);

  useEffect(() => {
    if(singleClass){
      setValues({
        ...values,
        course: singleClass._id
      })
    }
     
   }, [singleClass])

   useEffect(() => {

    if(newStudentAdded==='pending'){
      setBackdrop(true)
    }
    if(newStudentAdded === 'success'){
      // toast.success('New course added successfully!');
      setValues({
        name: '',
        email: '',
        phone: '',
        course: '',
        bank: 'cbe'
      })
      setInfo(true);
      setBackdrop(false)
      dispatch(reset())
    }
  }, [newStudentAdded])

  useEffect(() => {
console.log(query)
    query &&  dispatch(getClass(query.slug));
  }, [query])

  const handleInputChange = (e)=>{
const {name, value} = e.target;

setValues({
  ...values,
  [name]:value
})
  }

  const handleClose = () => {
    setInfo(false);
  };
  const handleSubmit =(e)=>{
    e.preventDefault();
    // console.log(values)
    dispatch(addStudent(values))
  }
    return (
      <>
        <Header />
        <main>
        <Hero />
          <Paper
            sx={{
              ml: 3,
              mr: 3,
              mt: '-64px',
              mb: '32px',
              px: 2,
              py:6,
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              display: 'flex',
              // flexDirection: 'column',
              position: 'relative',
              overflowWrap: 'break-word',
              backgroundClip: 'border-box',
              border: '0px solid rgba(0, 0, 0, 0.125)',
              borderRadius: '0.75rem',
              overflow: 'visible',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'saturate(200%) blur(30px)',
              boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
              '@media screen and (max-width: 784px)': {
                flexDirection: 'column'
              },
            }}
            
          >
            {loading ?  <CircularProgress color='primary' sx={{m:'auto'}} /> : <>
            <Box sx={{width: '50%', p:2,
          '@media screen and (max-width: 784px)': {
            width: '100%'
          },
          }}>
             <form action="" onSubmit={handleSubmit}>
             <Grid container spacing={3}>
    <Grid item xs={12} >
          <TextField
            required
            id="name"
            name="name"
            label="Full Name"
            fullWidth
            variant="outlined"
            value={values.name}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            fullWidth
            variant="outlined"
            type='email'
            onChange={handleInputChange}
value={values.email}
          />
        </Grid>
    <Grid item xs={12}>
          <TextField
            required
            name="phone"
            label="Phone number"
            fullWidth
            value={values.phone}
            // variant="standard"
            onChange={handleInputChange}
          />
               <Grid item xs={12}>
      <InputLabel id="bank">Bank of Choice</InputLabel>
  <Select
    labelId="bank"
    value={values.bank}
    label="Bank of Choice *"
    fullWidth
    name='bank'
    onChange={handleInputChange}
  >
    <MenuItem value='cbe'>CBE</MenuItem>
    <MenuItem value='dashen'>DASHEN BANK</MenuItem>
  </Select>
  <FormHelperText>Required</FormHelperText>
      </Grid>
        </Grid></Grid>
             
          
         <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                 
                    {/* <Button onClick={()=>{
                      setOpen(false)
                    }} sx={{ mt: 3, ml: 1 }}>
                      Cancel
                    </Button> */}
                 

                  <Button
                    variant="contained"
                    type='submit'
                    fullWidth
                    // onClick={handleSubmit}
                    sx={{ mt: 3,color: 'white',fontWeight: '600',fontSize: '1rem',
                    ':hover':{
                      backgroundColor: 'primary.main'
                    },
                    ':hover span svg':{
                      width: '4em',
                      trasition: 'width 2s'
                    }
                  }}
                    endIcon={<ArrowForwardSharpIcon fontSize='large' sx={{
                      textAlign: 'right', trasition: 'width 2s'
                    }} />}
                  >
                   Proceed Enrollment
                  </Button>
                </Box>
                </form>
           </Box>
           <Box sx={{width: '50%',p:2,
          '@media screen and (max-width: 784px)': {
            width: '100%'
          },
          }}>
           <Grid item xs={12} sx={{
             display: 'flex',flexDirection: 'column'
           }}>
             <Grid item xs={12}
                  
                  sx={{
                    '& img': {
                      width: '100%',
                      // maxWidth: '300px',
                      // mt: -12,
                      background: 'transparent',
                      borderRadius: '0.375rem',
                      boxShadow: 'none',
                      height: 'auto',
                    },
                  }}
                >
                  <Image src={graphics} alt='graphic Design' 
                  // layout='raw'
                   />
                </Grid>
             <Box sx={{display: 'flex',}}>
               <Typography variant='body1' sx={{fontWeight: '200',lineHeight: '1.6',width: '150px' }}>Course Name : {' '}</Typography>
               <Typography variant='h4' sx={{fontWeight: '400', fontSize: '0.875rem',lineHeight: '1.6',width: '100%'}}> {singleClass?.course.courseName} </Typography>             
             </Box>
             <Box sx={{display: 'flex',}}>
               <Typography variant='body1' sx={{fontWeight: '200',lineHeight: '1.6',width: '150px'}}>Description : {' '}</Typography>
               <Typography variant='h4' sx={{fontWeight: '400',fontSize: '0.875rem',lineHeight: '1.6',width: '100%'}}>{singleClass?.description}</Typography>             
             </Box>
             <Box sx={{display: 'flex',}}>
               <Typography variant='body1' sx={{fontWeight: '200',lineHeight: '1.6',width: '150px' }}>Price : {' '}</Typography>
               <Typography variant='h4' sx={{fontWeight: '400',fontSize: '0.875rem',lineHeight: '1.6',width: '100%'}}>{singleClass?.course.price} ETB</Typography>             
             </Box>
             </Grid>

</Box>
        
            </>}
           
          </Paper>
        </main>
        <Footer />

        <Modal
  open={info}
  onClose={handleClose}
>
  <Box sx={{ ...modalStyle, width: '80%' }}>
   
    <Information setOpen={setInfo} />
  </Box>
</Modal>
        <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={backdrop}
      
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      </>
    );
}

export default TrainingsPage;