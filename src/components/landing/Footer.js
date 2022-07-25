import { Box, Container, Grid, Typography } from "@mui/material"
import Image from "next/image";
import Link from "../Link";
import logo from '../../images/logo.png'

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const commonStyle = {
    boxShadow: 'none', background:'transparent', opacity: '1', color: 'secondary.main'
}

const footerSections = [
    {
      title: 'Gobeze',
      lists: [
          {
              name: 'About Us',
              url: '/#!'
          },
          {
            name: 'Blog',
            url: '/#!'
        },{
            name: 'Careers',
            url: '/#!'
        },{
            name: 'Events',
            url: '/#!'
        },
      ]
    },
    {
        title: 'Legal',
        lists: [
            {
                name: 'Terms & Conditions',
                url: '/#!'
            },
            {
                name: 'Privacy Policy',
                url: '/#!'
            }
        ]
      },
      {
        title: 'Help & Support',
        lists: [
            {
                name: 'Contact Us',
                url: '/contact'
            },
            {
                name: 'Knowledge Center',
                url: '/#!'
            },
            {
                name: 'Manage',
                url: '/login'
            }
        ]
      },

]

const Footer = ()=>{
    return (
        <>      
        
        <Box component='footer' sx={{...commonStyle,
            pt: 6, px:1, mt:6, 
        }}>
        {/* <Box component='footer' sx={{...commonStyle,
            
        }} >
        </Box> */}
        <Container >
            <Grid container spacing={3} sx={{
                boxSizing: 'border-box', display: 'flex', flexFlow: 'row wrap', mt: '-24px', width: 'calc(100% + 24px)', ml: '-24px', '& .MuiGrid-item':{
                    pl: 3, pt:3
                }
            }}>
                <Grid item xs={12} md={3} sx={{
                    m: '0px 0px 24px auto', flexDirection: 'row',flexBasis: '100%', flexGrow:'0', maxWidth: '100%',
'@media screen and (min-width: 576px)': {
    flexBasis: '100%',
    maxWidth: '100%',
  },
  '@media screen and (min-width: 768px)': {
    flexBasis: '25%',
    maxWidth: '25%',
  },
  '@media screen and (min-width: 992px)': {
    flexBasis: '25%',
    maxWidth: '25%',
  },
                }}>
                    <Box sx={{
                        '& a img':{
                            mb: 2
                        }
                    }}>
                        <Link href='/'>
                        <Image src={logo} alt='gobeze logo' height={60} width={60}
                        //  layout='raw'
                         /> 
                            </Link>

                            
                        </Box>
                        <Box sx={{mt:3, display: 'flex', alignItems: 'center' }}>
                        <Link sx={{
                            m: '0px 20px 0px 0px', fontSize: '1.25rem', lineHeight: '1.375'
                        }} href='https://facebook.com/traingobeze'>
                     <FacebookIcon color='secondary' /> 
                            </Link>
                            <Link sx={{
                            m: '0px 20px 0px 0px', fontSize: '1.25rem', lineHeight: '1.375'
                        }}  href='https://twitter.com/traingobeze'>
                     <TwitterIcon color='secondary' /> 
                            </Link>
                            <Link sx={{
                            m: '0px 20px 0px 0px', fontSize: '1.25rem', lineHeight: '1.375'
                        }}  href='https://instagram.com/traingobeze'>
                     <InstagramIcon color='secondary' /> 
                            </Link>
                            <Link sx={{
                            m: '0px 20px 0px 0px', fontSize: '1.25rem', lineHeight: '1.375'
                        }}  href='https://linkedin.com/traingobeze'>
                     <LinkedInIcon color='secondary' /> 
                            </Link>
                            </Box>
                    </Grid>

                    {footerSections.map((footerSection, index)=>(
                     <Grid key={index} item xs={6} md={2} sx={{
                         m: '0px 0px 24px auto', flexDirection: 'row',flexBasis: '50%', flexGrow:'0', maxWidth: '50%',
                       '@media screen and (min-width: 576px)': {
                        flexBasis: '50%',
                        maxWidth: '50%',
                      },
                      '@media screen and (min-width: 768px)': {
                        flexBasis: '16.6667%',
                        maxWidth: '16.6667%',
                      },
                      '@media screen and (min-width: 992px)': {
                        flexBasis: '16.6667%',
                        maxWidth: '16.6667%',
                      },
                    }}>
                        <Typography component='span' sx={{
                            m: '0px 0px 8px', fontSize: '0.875rem', lineHeight: '1.5', display: 'block', color: 'secondary.main', textTransform: 'capitalize', fontWeight: '700', letterSpacing:'-0.125px'
                        }}>
                            {footerSection.title}
                            </Typography>
                            {footerSection.lists.map((list, index)=>(
                            <Box key={index} component='ul' sx={{...commonStyle,
                                p:0,m:0, listStyle: 'none'
                            }}>
                                <Box component='li' sx={{...commonStyle,
                                    p:0,m:0, lineHeight: '1.25'
                                }}>
                                    <Link sx={{
                                        fontSize: '0.875rem', lineHeight: '1.5', textTransform: 'capitalize', color: 'secondary.light',fontWeight: '400', letterSpacing: '-0.125px', textDecoration:'none'
                                    }} href={list.url}>{list.name}</Link>
                                    </Box>
                                </Box>    
                            ))}
                          
                        </Grid>   
                    ))}
                      <Grid item sx={{
                          boxSizing: 'border-box',
                          m: '24px 0px',
                          flexDirection: 'row',
                          flexBasis: '100%',
                          flexGrow: '0',maxWidth: '100%',textAlign: 'center'
                      }} >
                              <Typography component='span' sx={{
                                  m:0, fontSize: '0.875rem', lineHeight: '1.5', color: 'secondary.light', fontWeight: '400', letterSpacing: '-0.125px'
                              }}>
                              All rights reserved. Copyright © 2022 Gobeze Consult.
                                  </Typography>  
                                </Grid>
                </Grid>
        </Container>
      
            </Box>
        </>
    )
}

export default Footer;