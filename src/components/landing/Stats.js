import { Box, Container, Grid, Typography } from '@mui/material'
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
    pt: 8,pb: 8
}} >
     <Grid container item xs={12} lg={9} sx={{ mx: "auto" }}>
          <Grid item xs={12} md={4}>
            <CounterCard
              count={300}
              title="Classes"
              description="Of “high-performing” level are led by a certified project manager"
            />
          </Grid>
          <Grid item xs={12} md={4} display="flex">
            <CounterCard
              count={1000}
              plus={true}
              title="Students"
              description="That meets quality standards required by our users"
            />
          </Grid>
          <Grid item xs={12} md={4}>
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