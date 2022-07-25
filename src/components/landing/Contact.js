import Image from 'next/image';
import Link from '../Link';
import contact from '../../images/contact.svg';
import {Box,Paper,Typography,Grid} from '@mui/material'
import Footer from "./Footer"
import Header from "./Header"
import Hero from './training/ClassHero'
function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const Contact = () =>{

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
              p: 2,
              transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflowWrap: 'break-word',
              backgroundClip: 'border-box',
              border: '0px solid rgba(0, 0, 0, 0.125)',
              borderRadius: '0.75rem',
              overflow: 'visible',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              backdropFilter: 'saturate(200%) blur(30px)',
              boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
             
            }}
            
          >
            <Grid container component="main" sx={{ height: '100vh' }}>
      
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center'
          }}
        >
           <Image src={contact} alt='graphic Design'
                  //  layout='raw'
                   />
          <Typography component="h1" variant="h5" sx={{fontWeight: '600',fontSize: '2rem',color: 'secondary.main'}}>
            Contact Us
          </Typography>
          <Typography component="h1" variant="h5" sx={{fontWeight: '200',fontSize: '1rem',color: 'secondary.main'}}>
            Any question or remarks?
          </Typography>
          <Box sx={{
            my:2,
            '& a':{
              display: 'block',
              mt: 0.5
            }
          }}>

          <Typography component="h1" variant="h5">
            Our mailing address is
          </Typography>
          <Link href='mailto:traingobeze@gmail.com'>
            traingobeze@gmail.com
          </Link>
          
          </Box>

          <Box sx={{my:2,
          '& a':{
            display: 'block',
            mt: 0.5
          }
          }}>

<Typography component="h1" variant="h5">
Or, Give us a call at these numbers
</Typography>
<Link href='tel:+251118633128'>
+251118633128
</Link>
<Link href='tel:+251920956048'>
+251920956048
</Link>
</Box>
          
        </Box>
      </Grid>
    </Grid>
               
          </Paper>
        </main>
        <Footer />
      </>
    );
}

export default Contact;


