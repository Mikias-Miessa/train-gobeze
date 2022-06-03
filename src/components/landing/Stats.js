import { Box, Container, Divider, Grid, Typography } from '@mui/material'
import React from 'react'

const style = {
    p:2,textAlign: 'center', lineHeight: '1', opacity: '1', boxShadow: 'none'
}

const textStyle ={
    letterSpacing: '-0.125px',verticalAlign: 'unset'
}

const CounterCard = ({count, title, description, plus}) =>(
    <>
    <Box sx={{
       ...style,

    }}>
<Typography component='h1' variant='h3' sx={{
    fontSize: '3rem', lineHeight: '1.5', fontWeight: '700', backgroundImage:
    'linear-gradient(90deg, rgba(254,126,1,1) 17%, rgba(254,126,1,0.9248074229691877) 63%, rgba(254,126,1,0.8211659663865546) 100%)',display: 'inline-block', backgroundClip: 'text',color: 'rgba(254,126,1)'
}}>
    {count}{plus && '+'}
    </Typography>
    <Typography component='h5'  sx={{...textStyle,
        m: '16px 0px 8px', fontSize: '1.25rem', lineHeight: '1.375', fontWeight: '700',color: 'secondary.main', 
    }}>
    {title}
    </Typography>
    <Typography component='p'  sx={{...textStyle,
        m:0,fontSize: '1rem', fontWeight: '300', lineHeight: '1.6', color: 'secondary.light'
    }}>
    {description}
    </Typography>
    </Box>
    </>
)

const Stats = () => {
  return (
    <>
     <Box component='section' sx={{
         ...style
     }}>
<Container sx={{
    pt: 8,pb: 8,
    width: '100%',
    mx: 'auto',
    boxSizing: 'border-box',
    display: 'block',
    px: 2,
    '@media screen and (min-width: 576px)': {
      px: '1.5rem', mx: 'auto', maxWidth: '540px',
      position: 'relative',
    },
    '@media screen and (min-width: 768px)': {
      px: '1.5rem', mx: 'auto', maxWidth: '720px',
      position: 'relative',
    },
    '@media screen and (min-width: 992px)': {
     maxWidth: '960px',
     position: 'relative',
     px: '1.5rem',
     mx: 'auto'
    },
}} >
     <Grid container item xs={12} lg={9} sx={{ 
       m: "0px auto", width: '100%', boxSizing: 'border-box',display: 'flex', flexFlow: 'row wrap', maxWidth:'100%', flexGrow: '0',
      '@media screen and (min-width: 992px)': {
        flexBasis: '75%',
        maxWidth: '75%',
        flexGrow: '0',
      },
      }}>
          <Grid item xs={12} md={4} sx={{
            m:0,
            flexBasis: '100%',
        maxWidth: '100%',
        flexGrow: '0',
        '@media screen and (min-width: 768px)': {
          flexBasis: '33.3333%',
          maxWidth: '33.3333%',
          flexGrow: '0',
        },
        '@media screen and (min-width: 992px)': {
          flexBasis: '33.3333%',
          maxWidth: '33.3333%',
          flexGrow: '0',
        },
          }}>
            <CounterCard
              count={300}
              title="Classes"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={4} sx={{
            m:0,
            flexBasis: '100%',
        maxWidth: '100%',
        flexGrow: '0',display: 'flex',
        
        '@media screen and (min-width: 768px)': {
          flexBasis: '33.3333%',
          maxWidth: '33.3333%',
          flexGrow: '0',
        },
        '@media screen and (min-width: 992px)': {
          flexBasis: '33.3333%',
          maxWidth: '33.3333%',
          flexGrow: '0',
        },
          }}>
            <Divider orientation='vertical' sx={{
              flexShrink: '0',opacity: '0.25',width: '0.0625rem',borderRight: 'none',borderBottom: 'none',m:0,background: 'rgb(52 71 103 / 25%)',
              '@media screen and (min-width: 0px)': {
                display: 'none'
              },
              '@media screen and (min-width: 768px)': {
             display: 'block'
              },
            }} />
            <CounterCard
              count={1000}
              plus={true}
              title="Students"
              description="That meets quality standards required by our users"
            />
              <Divider orientation='vertical'  sx={{
               flexShrink: '0',opacity: '0.25',width: '0.0625rem',borderRight: 'none',borderBottom: 'none',m:'0px 1rem 0px 0px',background: 'rgb(52 71 103 / 25%)',
               '@media screen and (min-width: 0px)': {
                 display: 'none'
               },
               '@media screen and (min-width: 768px)': {
              display: 'block'
               },
            }}/>
          </Grid>
          <Grid item xs={12} md={4} sx={{
            m:0,
            flexBasis: '100%',
        maxWidth: '100%',
        flexGrow: '0',
        '@media screen and (min-width: 768px)': {
          flexBasis: '33.3333%',
          maxWidth: '33.3333%',
          flexGrow: '0',
        },
        '@media screen and (min-width: 992px)': {
          flexBasis: '33.3333%',
          maxWidth: '33.3333%',
          flexGrow: '0',
        },
          }}>
            <CounterCard
              count={10}
              title="Courses"
              description="Actively engage team members that finishes on time"
            />
          </Grid>
        </Grid><div id='courses'></div>
</Container>

     </Box>
    
    </>
  )
}

export default Stats