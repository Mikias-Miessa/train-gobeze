import { Box,Container,Grid, Badge, Typography } from "@mui/material"

 const Courses = ()=>{
    return (
        <>
            <Box component='section' sx={{
               pt:3, pb: 3, background: 'transparent', color: 'secondary.main'
            }}>
        <Container sx={{
            
        }}>
 <Grid container item xs={12} lg={6} sx={{ mx: "auto",
 display: 'flex',
 flexFlow: 'column wrap',
 width: '100%',
 margin: '0px auto',
 alignItems: 'center',
 textAlign: 'center',
 '@media screen and (min-width: 576px)': {
    flexBasis:'100%',
    maxWidth: '100%',
    flexGrow: '0'
        }
}}>
    {/* 
    add
    commit
    push
    
    */}

<Badge color="primary" badgeContent='Courses' sx={{mb:1,  fontSize: '1rem', textTransform: 'uppercase', '& span.BaseBadge-badge':{
    height: '24px', p: '0px 12px',color: 'primary.main', backgroundColor: '#ff7e0033'
}}} />
<Typography component='h2' sx={{
    m: '8px 0px', fontSize: '2.25rem', lineHeight: '1.3', fontWeight: '700', 
}}>
    Explore our courses
</Typography>
<Typography component='p' sx={{
    m: 0,
    fontSize: '1rem',fontWeight: '300', lineHeight: '1.6', color:'rgb(123, 128, 154)', letterSpacing: '-0.125px'
}}>
If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality).</Typography>

     </Grid>
        </Container >
            </Box>
        </>
    )
}

export default Courses;