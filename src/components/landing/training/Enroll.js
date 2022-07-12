import React from 'react';
import { Typography, Box, Container } from '@mui/material';
import Link from '../../Link';
import LaptopIcon from '@mui/icons-material/Laptop';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
const Enroll = ({ training }) => {
  console.log(training);
  return (
    <Container
      sx={{ mt: -10, pb: 6, textAlign: 'center', mx: 'auto', zIndex: '10' }}
    >
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: '2rem',
        }}
      >
        <Box
          sx={{
            maxWidth: '350px',
            textAlign: 'center',
            boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
            p: '32px 16px ',
            borderRadius: '0.5rem',
            background: 'white',
          }}
        >
          <PeopleAltIcon color='secondary' fontSize='large' />
          <Typography
            component='h3'
            sx={{
              fontSize: '1.5rem',
              fontWeight: '300',
              opacity: '0.8',
              color: 'secondary.main',
            }}
          >
            Inperson
          </Typography>
          <Typography
            component='p'
            sx={{
              width: '293px',
              fontSize: '1rem',
              fontWeight: '300',
              opacity: '0.8',
              my: 2,
              height: '80px',
              color: 'secondary.main',
            }}
          >
            Do you want to have in person learning experience? You can register
            for the inperson course
          </Typography>
          {/* <Typography component='p' sx={{my:2, fontSize: '1.675rem', fontWeight: '200', opacity: '0.8',color: 'secondary.main'}}>3800 ETB</Typography> */}
          <Box>
            <Link
              sx={{
                textDecoration: 'none',
                p: '8px 64px',
                background: '#FF7E00',
                color: 'white',
                borderRadius: '0.5rem',
                fontWeight: '500',
              }}
              href={`/enroll/${training.slug && training.slug}`}
            >
              Register
            </Link>
          </Box>
        </Box>

       {training?.course?.online_url && (
            <Box
            sx={{
              maxWidth: '350px',
              textAlign: 'center',
              boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
              p: '32px 16px ',
              borderRadius: '0.5rem',
              background: 'white',
            }}
          >
            <LaptopIcon color='secondary' fontSize='large' />
            <Typography
              component='h3'
              sx={{
                fontSize: '1.5rem',
                fontWeight: '300',
                opacity: '0.8',
                color: 'secondary.main',
              }}
            >
              Online
            </Typography>
            <Typography
              component='p'
              sx={{
                width: '293px',
                fontSize: '1rem',
                fontWeight: '300',
                opacity: '0.8',
                my: 2,
                height: '80px',
                color: 'secondary.main',
              }}
            >
              Register in our online course and get the course from the confort of
              your home.
            </Typography>
            {/* <Typography component='p' sx={{my:2, fontSize: '1.675rem', fontWeight: '200', opacity: '0.8',color: 'secondary.main'}}>3800 ETB</Typography> */}
            <Box>
              <Link
                sx={{
                  textDecoration: 'none',
                  p: '8px 64px',
                  background: '#FF7E00',
                  color: 'white',
                  borderRadius: '0.5rem',
                  fontWeight: '500',
                }}
                href={training?.course?.online_url}
                target='_blank'
              >
                Register
              </Link>
            </Box>
          </Box>
       )}
      </Box>
    </Container>
  );
};

export default Enroll;
