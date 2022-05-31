import Image from 'next/image'
import { Box, Container } from "@mui/material"
import logo from '../../images/logo.png'
import Link from "../Link";
const Header = ()=>{
    return (
        <>
        <Container component='header' maxWidth='md' sx={{
            position: 'sticky',
            top: '0px',
            zIndex: '10'
        }}>
            <Box sx={{pt: 1,pb:1,pl:2,pr:2, m: '16px 24px',
        boxShadow: 'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
        borderRadius: '0.75rem',
        position: 'absolute',
        left: 0,
        zIndex: '3',
        width: 'calc(100% - 48px)',
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'saturate(200%) blur(30px)'
        }}>
<Box sx={{
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    background: 'transparent'
}}>
<Box>
  <Link href='/'>
            <Image src={logo} alt='gobeze logo' height={40} width={40} />
  </Link>  
</Box>
<Box sx={{display: 'flex',background: 'transparent', ml: 'auto', mr: 0, gap: '2rem', '&.MuiBox-root a':{
     textDecoration: 'none',color: 'secondary.main', fontWeight: '300', fontSize: '0.875rem'
}}}>
    <Box sx={{}}>
        <Link href='/'>Home</Link>
    </Box>
    <Box sx={{}}>
        <Link href='/'>Who we are</Link>
    </Box>
    <Box sx={{}}>
        <Link href='/'>Courses</Link>
    </Box>
   
</Box>
<Box sx={{
        background: 'transparent',
        ml: '1rem',
        '& a': {
            background: 'linear-gradient(90deg, rgba(254,126,1,1) 17%, rgba(254,126,1,0.9248074229691877) 63%, rgba(254,126,1,0.8211659663865546) 100%)',
            color: 'white !important' ,
            fontWeight: '700 !important',
            fontSize: '.75rem',
            p: '0.375rem 1rem',
            borderRadius: '0.5rem',
            boxShadow: 'rgb(254 126 1 / 15%) 0rem 0.1875rem 0.1875rem 0rem, rgb(254 126 1 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(254 126 1 / 15%) 0rem 0.0625rem 0.3125rem 0rem'
        }
    }}>
        <Link href='/'>Register Now</Link>
    </Box>
</Box>
            </Box>

            </Container>

            <Box sx={{
                minHeight: '75vh',width: '100%',
                background: 'linear-gradient(195deg, rgba(66, 66, 74, 0.5), rgba(25, 25, 25, 0.5)) center center / cover, url(/hero.jpg) transparent;',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}>
            </Box>
        </>
    )
}

export default Header;