import { Box, Container, Typography, Grid } from '@mui/material';
import Link from '../../Link';



const ClassesHero = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: '20vh',
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
       */}
        <Box sx={{
          // background: 'rgba(243, 48, 13, 0.4)',
          height: '100%',
          width: '100%',
          display: 'grid',
          placeItems: 'center',
        }}> 
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
              m: '0 auto',
              flexBasis: '100%',
              maxWidth: '100%',
              flexGrow: '0',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center'
            }}
          >
            
            <Typography
              component='p'
              sx={{
                m: '8px 0px 0px',
                color: 'white',
                fontWeight: '300 ',
                fontSize: '1.5rem ',
                lineHeight: '1.625',
                // maxWidth: '460px',
                fontFamily: 'Ubuntu',
                letterSpacing: '-0.125px',
                '@media screen and (max-width: 768px)': {
                  fontSize: '1.125rem ',
                },
              }}
            >
        
            </Typography>

            
          </Grid>
        </Container> 

        </Box>
        

       
      </Box>
    </>
  );
};

export default ClassesHero;
