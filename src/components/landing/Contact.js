import Image from 'next/image';
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '../Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import contact from '../../images/contact.svg'
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



export default function SignInSide() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
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
<Link href='tel:+25129336352'>
  +251929336352
</Link>
<Link href='tel:+25129336352'>
  +251929336352
</Link>
</Box>
            
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}