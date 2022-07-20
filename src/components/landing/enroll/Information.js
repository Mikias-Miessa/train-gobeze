import React from 'react'
import InfoIcon from '@mui/icons-material/Info';
import { Box, Typography } from '@mui/material';
import Link from '../../Link';
const Information = ({bank,email,name}) => {
  return (
    <Box sx={{p:2}}>
<Box sx={{display:'flex',alignItems: 'center',gap: '1rem'}}>
    <InfoIcon color='primary' />
    <Typography variant='h4' sx={{fontWeight: '500'}}>Gobeze Training</Typography>
    </Box>
   {email ? <>
    <Typography sx={{mt:2, fontWeight: '300'}} variant='body1'>
   {`Dear ${name}, Thanks for registering on Gobeze Training.`}  
    
    </Typography>
   <Typography sx={{mt:2, fontWeight: '300'}} variant='body1'>
   You will be able to make the payment using Mobile/Internet banking or Bank account Transfer.
Our {bank ==='cbe' ? 'CBE' : 'Dashen Bank'} account is <Box component='span'> {bank ==='cbe' ? '1000228828843' : '0146776045011'}</Box> Please deposit and you can confirm by sending your screenshot or photo of bill to <a href="https://t.me/LuwamAddis" style={{
  color: '#FF7E00'
}}>Gobeze Staff</a>.  
    
    </Typography>
    <Typography sx={{mt:2, fontWeight: '300'}} variant='body1'>
   {`You can also confirm by the confirmation link we sent you to your email ( ${email})`}
    
    </Typography>
   </> : <>
   <Typography sx={{mt:2, fontWeight: '300'}} variant='body1'>
   {`Dear ${name}, Thanks for registering on Gobeze Training.`}  
    
    </Typography>
   <Typography sx={{mt:2, fontWeight: '300'}} variant='body1'>
   You will be able to make the payment using Mobile/Internet banking or Bank account Transfer.
Our {bank ==='cbe' ? 'CBE' : 'Dashen Bank'} account is <Box component='span'> {bank ==='cbe' ? '1000228828843' : '0146776045011'}</Box> Please deposit and you can confirm by sending your screenshot or photo of bill to <a href="https://t.me/LuwamAddis" style={{
  color: '#FF7E00'
}}>Gobeze Staff</a>.  
    
    </Typography>
   
   </>}

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