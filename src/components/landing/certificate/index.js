import Image from 'next/image';
import { useState } from 'react';
import {
  Box,
  Container,
  IconButton,
  Collapse,
  TextField,
  Paper,
} from '@mui/material';
import logo from '../../../images/logo.png';
import Link from '../../Link';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import CertificateHero from './CertificateHero';

const Certificate = () => {
  const [open, setOpen] = useState(false);
  const [certificateId, setCertificateId] = useState('');
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <>
      <Container
        component='header'
        sx={{
          position: 'sticky',
          top: '0px',
          zIndex: '10',
          pr: '1.5rem',
          pl: '1.5rem',
          ml: 'auto',
          mr: 'auto',
        }}
      >
        <Box
          sx={{
            pt: 1,
            pb: 1,
            pl: 2,
            pr: 2,
            m: '16px 24px',
            boxShadow:
              'rgb(0 0 0 / 10%) 0rem 0.25rem 0.375rem -0.0625rem, rgb(0 0 0 / 6%) 0rem 0.125rem 0.25rem -0.0625rem',
            borderRadius: '0.75rem',
            position: 'absolute',
            left: 0,
            zIndex: '3',
            width: 'calc(100% - 48px)',
            background: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'saturate(200%) blur(30px)',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'transparent',
            }}
          >
            <Box>
              <Link href='/'>
                <Image src={logo} alt='gobeze logo' height={40} width={40} />
              </Link>
            </Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                '@media screen and (max-width: 420px)': {
                  display: 'none',
                },
              }}
            >
              <TextField
                sx={{
                  m: 0,
                  '& label': {
                    top: '-8px',
                  },
                  '& .MuiOutlinedInput-root': {
                    fontSize: '0.875rem ',
                    '& input': {
                      p: '8px 12px',
                    },
                  },
                }}
                margin='normal'
                required
                fullWidth
                id='certificateId'
                label='Certificate Id'
                name='certificateId'
                autoFocus
                onChange={(e) => setCertificateId(e.target.value)}
              />
              <Box
                sx={{
                  background: 'transparent',
                  ml: '1rem',
                  '& a': {
                    background:
                      'linear-gradient(90deg, rgba(254,126,1,1) 17%, rgba(254,126,1,0.9248074229691877) 63%, rgba(254,126,1,0.8211659663865546) 100%)',
                    color: 'white !important',
                    fontWeight: '700 !important',
                    fontSize: '.75rem',
                    p: '0.375rem 1rem',
                    borderRadius: '0.5rem',
                    boxShadow:
                      'rgb(254 126 1 / 15%) 0rem 0.1875rem 0.1875rem 0rem, rgb(254 126 1 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(254 126 1 / 15%) 0rem 0.0625rem 0.3125rem 0rem',
                  },
                  '@media screen and (max-width: 576px)': {
                    ml: 'auto',
                  },
                }}
              >
                <Link
                  sx={{ textDecoration: 'none' }}
                  href={`/certificate/${certificateId}`}
                >
                  Verify
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
      <CertificateHero text />
      <Paper
        sx={{
          ml: 3,
          mr: 3,
          mt: '-64px',
          mb: '32px',
          p: 2,
          transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflowWrap: 'break-word',
          backgroundClip: 'border-box',
          border: '0px solid rgba(0, 0, 0, 0.125)',
          borderRadius: '0.75rem',
          overflow: 'visible',
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'saturate(200%) blur(30px)',
          boxShadow: 'rgb(0 0 0 / 5%) 0rem 1.25rem 1.6875rem 0rem',
          minHeight: '50vh',
        }}
      >
        <Box
          component='section'
          sx={{
            pt: 3,
            pb: 3,
            background: 'transparent',
            color: 'secondary.main',
            m: 'auto',
            width: '100%',
          }}
        >
          <Container sx={{}}>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                gap: '1rem',
                maxWidth: '60%',
                justifyContent: 'center',
                m: 'auto',
              }}
            >
              <TextField
                sx={{
                  m: 0,
                  '& label': {
                    top: '-8px',
                  },
                  '& .MuiOutlinedInput-root': {
                    fontSize: '0.875rem ',
                    '& input': {
                      p: '8px 12px',
                    },
                  },
                }}
                margin='normal'
                required
                fullWidth
                id='certificateId'
                label='Certificate Id'
                name='certificateId'
                autoFocus
                onChange={(e) => setCertificateId(e.target.value)}
              />
              <Box
                sx={{
                  background: 'transparent',
                  ml: '1rem',
                  '& a': {
                    background:
                      'linear-gradient(90deg, rgba(254,126,1,1) 17%, rgba(254,126,1,0.9248074229691877) 63%, rgba(254,126,1,0.8211659663865546) 100%)',
                    color: 'white !important',
                    fontWeight: '700 !important',
                    fontSize: '.75rem',
                    p: '0.375rem 1rem',
                    borderRadius: '0.5rem',
                    boxShadow:
                      'rgb(254 126 1 / 15%) 0rem 0.1875rem 0.1875rem 0rem, rgb(254 126 1 / 20%) 0rem 0.1875rem 0.0625rem -0.125rem, rgb(254 126 1 / 15%) 0rem 0.0625rem 0.3125rem 0rem',
                  },
                  '@media screen and (max-width: 576px)': {
                    ml: 'auto',
                  },
                }}
              >
                <Link
                  sx={{
                    textDecoration: 'none',
                    display: 'block',
                    width: '100%',
                  }}
                  href={`/certificate/${certificateId}`}
                >
                  Verify
                </Link>
              </Box>
            </Box>
          </Container>
        </Box>
      </Paper>
    </>
  );
};

export default Certificate;
