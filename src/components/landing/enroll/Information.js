import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import Link from '../../Link';
const Information = () => {
  return (
    <Box sx={{p:2}}>
<Box sx={{display:'flex',alignItems: 'center',gap: '1rem'}}>
    <InfoIcon color='primary' />
    <Typography variant='h4' sx={{fontWeight: '500'}}>Gobeze Training</Typography>
    </Box>
<Typography sx={{mt:2, fontWeight: '300'}} variant='body1'>
Our Bank account Will be emailed to you once you place the order. You will be able to make the payment using Mobile/Internet banking or Bank account Transfer.
    </Typography>
    <Box sx={{
        mt:2,
        textAlign: 'right',
        '& a':{
            textDecoration:'none',
            backgroundColor: 'primary.main',
            p: '8px 16px',
            fontWeight: '400',
            color: 'white',
            borderRadius: '4px',
        }
    }}>
    <Link href='/'>Confirm</Link>
         </Box>
    </Box>
  )
}

export default Information