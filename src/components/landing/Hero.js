import { Box,Container,Typography } from "@mui/material";
import Link from '../Link'
const Hero = ()=> {
    return(
        <>
        <Box sx={{
                minHeight: '75vh',width: '100%',
                background: 'linear-gradient(195deg, rgba(66, 66, 74, 0.5), rgba(25, 25, 25, 0.5)) center center / cover, url(/hero.jpg) transparent;',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>

                <Container sx={{
                    position: 'relative',
                     pr: '1.5rem',
                     pl: '1.5rem',
                     ml: 'auto',
                     mr: 'auto',
                     width: '100%',
                     width: 'calc(100% - 48px)',
                }}>
                    <Box sx={{display: 'flex', flexDirection: 'column', justifyContent:'center', gap: '0.5rem',height: '75vh'}}>
<Typography component='h1' sx={{color: 'white', fontWeight: 'bolder ', fontSize: '5rem ', fontFamily: 'Ubuntu'}}>
Know.Now.
</Typography>
<Typography component='p' sx={{color: 'white', fontWeight: '300 ', fontSize: '1.25rem ', maxWidth: '400px',fontFamily: 'Ubuntu'}}>
Short term training with immediately applicable skills by working professionals who know the subject matter intimately.
</Typography>

<Box
              sx={{
                background: 'transparent',
                mt: '2rem',
                '& a': {
                  background:
                    'linear-gradient(90deg, rgba(254,126,1,1) 17%, rgba(254,126,1,0.9248074229691877) 63%, rgba(254,126,1,0.8211659663865546) 100%)',
                  color: 'white !important',
                  fontWeight: '700 !important',
                  fontSize: '1rem',
                  p: '0.625rem 1.5rem',
                  borderRadius: '0.5rem',
                  boxShadow:
                    'rgb(254 126 1 / 15%) 0rem 0.1875rem 0.1875rem 0rem, rgb(254 126 1 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(254 126 1 / 15%) 0rem 0.0625rem 0.3125rem 0rem',
                },
              }}
            >
              <Link href='/'>Explore Courses</Link>
            </Box>
                    </Box>

                </Container>
            </Box>
        </>
    )
}

export default Hero;