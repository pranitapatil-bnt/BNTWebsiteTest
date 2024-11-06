import { Box, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import styles from '../../styles/aboutus/aboutus.module.css'
import { TiSocialLinkedinCircular } from 'react-icons/ti';




const leadersDetail = [
  {
    name: 'Shekhar Khakurdikar',
    desgn: 'CTO & Co-Founder',
    profilePic: 'ShekharSirMinNew.webp',
    linkedinURL: 'https://www.linkedin.com/in/shekharkhakurdikar/'
  },
  {
    name: 'Sachin Gurav',
    desgn: 'CEO & Co-Founder',
    profilePic: 'SachinSirMinNew.webp',
    linkedinURL: 'https://www.linkedin.com/in/sachin-gurav-62b5b4/'
  },
  {
    name: 'Nilesh Varma',
    desgn: 'VP-Payment & Co-Founder',
    profilePic: 'NileshSirMin.webp',
    linkedinURL: 'https://www.linkedin.com/in/nileshvarma/'
  },
  {
    name: 'Gitanjali Mudaliar',
    desgn: 'HR Manager',
    profilePic: 'GitanjaliMam.jpg',
    linkedinURL: 'https://www.linkedin.com/in/gitanjali-mudaliar-15721664/'
  },
  {
    name: 'Girish Shahpurkar',
    desgn: 'CFO',
    profilePic: 'GirishSir.webp',
    linkedinURL: 'https://www.linkedin.com/in/girish-shahapurkar-574a1a8/'
  },
  {
    name: 'Rajagopalan Nelliyodan',
    desgn: 'Operations Head',
    profilePic: 'RajSirNew.jpg',
    linkedinURL: 'https://www.linkedin.com/in/rajagopalan-n-5b952937/'
  },
  {
    name: 'David True',
    desgn: 'Advisory Board',
    profilePic: 'David.webp',
    linkedinURL: 'https://www.linkedin.com/in/dptrue/ '
  },
  {
    name: 'Arcady Lapiro',
    desgn: 'Advisory Board',
    profilePic: 'Arcady.webp',
    linkedinURL: 'https://www.linkedin.com/in/arcadylapiro/'
  }
]

const Leaders = () => {

  const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

  return (
    <>
      <Box sx={{ height: { xs: '100px', sm: '180px' }, marginTop: '50px', display: 'flex', justifyContent: 'center' }} >
        <Box  >
          <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, textAlign: 'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing: '20px', color: '#e3e3e3' }}>OUR</Typography>
          </Box>
          <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '55px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>Professionals</Typography>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: '100vw', display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
        <Box sx={{ width: { xs: '75%', sm: '65%' } }}>
          <Grid container spacing={6} sx={{ height: '100%' }} >
            {leadersDetail.map((leader, index) => (<>
              <Grid

                item xs={12} sm={6} md={4}
              data-aos={
                ((index == 0 || index == 3 || index == 6 ) && "zoom-out-right data-aos-once='true' ") ||
                ((index == 1 || index == 4 || index == 7 ) && "zoom-out data-aos-once='true' ") ||
                ((index == 2 || index == 5 ) && "zoom-out-left data-aos-once='true' ")
              }
              >
                <Box className={styles.leaders} sx={{position:'relative', height: { xs: '340px', sm: '310px', backgroundImage: `url(/aboutus/images/leaders/${leader.profilePic})` } }}>
                  {leader?.linkedinURL &&  <Link href={leader.linkedinURL} target="_blank" ><Box className={styles.linkedinBox} > <TiSocialLinkedinCircular style={{color:'#4287f5',fontSize:'36px'}} /></Box></Link>}
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '35px' }}>
                  <p style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '11px', color: '#6f6675' }}>{leader.desgn}</p>
                  <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important' }}>{leader.name}</Typography>
                </Box>
              </Grid>
            </>))}
          </Grid>
        </Box>

      </Box>

      <Box sx={{ height: '190px' }}>
        <Box sx={{ width: '100vw', height: '100%', marginTop: '150px', display: 'flex' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', width: '60%', backgroundColor: '#7e16f5', clipPath: 'polygon(0% 0%, 55% 0%,80% 45%,80% 65%, 92% 100%, 0% 100%)' }}>
            {!isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Unlock Your Potential<br></br> &nbsp;&nbsp; and Conquer Together!</Typography>}
            {isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Unlock Your <br></br> Potential and <br></br> Conquer <br></br> Together!</Typography> }
          </Box>
        </Box>
        <Box sx={{ marginTop: '-191px', width: '100vw', height: '100%', display: 'flex', justifyContent: 'end' }}>
          <Box className={styles.joinUs} sx={{ display: 'grid', placeContent: 'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
            <Link href={'/whoweare/lifeatBNT'}>
              <Box sx={{ cursor: 'pointer', fontFamily: 'Alexandria', display: 'grid', placeContent: 'center', color: 'white', height: { sm: '40px', xs: '33px' }, width: { sm: '158px', xs: '100px' }, background: ' linear-gradient(90deg, rgba(126,22,245,1) 0%, rgba(192,144,247,1) 71%)', marginLeft: { sm: 0, xs: '53px' } }}>
                Know more
              </Box>
            </Link>
          </Box>
        </Box>
      </Box>



      {/* <Box sx={{ height: '300px' }}></Box> */}
    </>

  )
}

export default Leaders