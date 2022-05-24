import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HeadLayout from '../src/components/HeadLayout'
import Link from '../src/components/Link';
import Copyright from '../src/components/Copyright';

export default function Index() {
  return (
    <HeadLayout >
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Gobeze Website
        </Typography>
        <Link href="/admin/dashboard" color="secondary">
          Go to admin Dashboard
        </Link>
        <Copyright />
      </Box>
    </Container></HeadLayout>
  );
}
