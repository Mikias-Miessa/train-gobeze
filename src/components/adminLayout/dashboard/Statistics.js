
import {  Typography, Box, Avatar } from '@mui/material';
import Title from '../../Title';
import PeopleIcon from '@mui/icons-material/People';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import BatchPredictionIcon from '@mui/icons-material/BatchPrediction';

export default function Chart() {

    return (
      <>
        <Title>Statistics</Title>
        <Box sx={{ mt: '2rem', display: 'flex', gap: '1rem',justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar sx={{ bgcolor: 'grey', width: '56px', height: '56px' }}>
              <LibraryBooksIcon fontSize='medium' />
            </Avatar>
            <Box>
              <Typography
                variant='h3'
                sx={{ fontSize: '1.25rem', fontWeight: '600' }}
              >
                5
              </Typography>
              <Typography variant='body' sx={{ fontWeight: '300' }}>
                Courses
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar sx={{ bgcolor: 'grey', width: '56px', height: '56px' }}>
              <BatchPredictionIcon fontSize='medium' />
            </Avatar>
            <Box>
              <Typography
                variant='h3'
                sx={{ fontSize: '1.25rem', fontWeight: '600' }}
              >
                25
              </Typography>
              <Typography variant='body' sx={{ fontWeight: '300' }}>
                Classes
              </Typography>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar sx={{ bgcolor: 'grey', width: '56px', height: '56px' }}>
              <PeopleIcon fontSize='medium' />
            </Avatar>
            <Box>
              <Typography
                variant='h3'
                sx={{ fontSize: '1.25rem', fontWeight: '600' }}
              >
                1K+
              </Typography>
              <Typography variant='body' sx={{ fontWeight: '300' }}>
                Students
              </Typography>
            </Box>
          </Box>

        </Box>
      </>
    );}