import * as React from 'react';
import Container from '@mui/material/Container';
import HeadLayout from '../src/components/HeadLayout'
import Copyright from '../src/components/landing/Copyright';
import LandingPage from '../src/components/landing'
export default function Index() {
  return (
    <HeadLayout >
   
      <LandingPage />
    
    </HeadLayout>
  );
}
