import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Title from '../Title';

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title>Running Courses</Title>
      <Typography component="p" variant="h4">
       3
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        currently running courses
      </Typography>
      <div>
        <Link color="primary" href="#" onClick={preventDefault}>
          View courses
        </Link>
      </div>
    </React.Fragment>
  );
}