import { Box, Container, Typography, Grid } from '@mui/material';
import Link from '../Link';
const Hero = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: '75vh',
          width: '100%',
          background:
            'linear-gradient(195deg, rgba(66, 66, 74, 0.5), rgba(25, 25, 25, 0.5)) center center / cover, url(/heroOne.jpg) transparent;',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'grid',
          placeItems: 'center',
        }}
      >
        {/* 
        Wrap this box around the below container to give the background image colored transparent
        <Box sx={{
          // background: 'rgba(243, 48, 13, 0.1)',
          height: '100%',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
        }}> 
        </Box>
        */}

       

        <Container
          sx={{
            position: 'relative',
            pr: '1.5rem',
            pl: '1.5rem',
            ml: 'auto',
            mr: 'auto',
            width: '100%',
            width: 'calc(100% - 48px)',
          }}
        >
          <Grid
            container
            item
            xs={12}
            md={7}
            sx={{
              display: 'flex',
              flexFlow: 'row wrap',
              m: 0,
              flexBasis: '100%',
              maxWidth: '100%',
              flexGrow: '0',
              '@media screen and (min-width: 576px)': {
                flexBasis: '100%',
                maxWidth: '100%',
                flexGrow: '0', textAlign: 'center',
                justifyContent: 'center',
              },
              '@media screen and (min-width: 768px)': {
                flexBasis: '58.3333%',
                maxWidth: '58.3333%',
                flexGrow: '0',
                textAlign: 'left',
                justifyContent: 'start',
              },
              '@media screen and (min-width: 992px)': {
                flexBasis: '58.3333%',
                maxWidth: '58.3333%',
                flexGrow: '0',
              },
            }}
          >
            <Typography
              component='h1'
              sx={{
                color: 'white',
                fontWeight: 'bolder ',
                fontSize: '5rem ',
                fontFamily: 'Ubuntu',
                lineHeight: '1.25',letterSpacing: '-0.125px',
                '@media screen and (max-width: 768px)': {
                  fontSize: '3rem ',
                },
              }}
            >
              Know.Now.
            </Typography>
            <Typography
              component='p'
              sx={{
                m: '8px 0px 0px',
                color: 'white',
                fontWeight: '300 ',
                fontSize: '1.25rem ',
                lineHeight: '1.625',
                // maxWidth: '460px',
                fontFamily: 'Ubuntu',
                letterSpacing: '-0.125px',
                '@media screen and (min-width: 768px)': {
                  pr: 12
                },
                '@media screen and (min-width: 992px)': {
                  pr: 16
                },
                '@media screen and (max-width: 768px)': {
                  fontSize: '1.125rem ',
                },
              }}
            >
              Short term training with immediately applicable skills by working
              professionals who know the subject matter intimately.
            </Typography>

            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                mt: 6,
                mb: 3,

              }}
            >
              <Link sx={{ textDecoration: 'none',background:
                    'linear-gradient(90deg, rgba(254,126,1,1) 17%, rgba(254,126,1,0.9248074229691877) 63%, rgba(254,126,1,0.8211659663865546) 100%)',
                    backgroundSize:'150%', backgroundPositionX: '25%',
                  color: 'white !important',
                  fontWeight: '700 !important',
                  fontSize: '1rem',
                  minWidth: 8,
                  minHeight: '2.5rem',
                  fontSize: '0.75rem',
                  p: '0.625rem 1.5rem',
                  display: 'inline-flex',
                  justifyContent: 'center',
                  alignItems:'center',
                  letterSpacing: '0.02857em',
                  textTransform: 'uppercase',
                  lineHeight: '1.4',
                  textAlign: 'center',
                  borderRadius: '0.5rem',
                  boxShadow:
                    'rgb(254 126 1 / 15%) 0rem 0.1875rem 0.1875rem 0rem, rgb(254 126 1 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(254 126 1 / 15%) 0rem 0.0625rem 0.3125rem 0rem',transition: 'all 150ms ease-in 0s' }} href='#courses'>
                Explore Courses
              </Link>
            </Box>
          </Grid>
        </Container> 
      </Box>
    </>
  );
};

export default Hero;
