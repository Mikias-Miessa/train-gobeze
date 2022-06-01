import { Box } from "@mui/material";

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
            </Box>
        </>
    )
}

export default Hero;