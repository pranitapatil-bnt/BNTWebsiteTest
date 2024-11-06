import React from 'react'
import { Box, styled } from '@mui/system'
// import  CDlogo  from '../public/images/TrustedBy/CDlogo.png';
import { Stack } from '@mui/material';
import SwiperApp from './SwiperApp'




const TrustedBy = () => {
    return (
        <>
            <Box sx={{ display: 'flex',flexDirection:{sm:'row',xs:'column'}, transform:{xs:'scale(0.8)',sm:'scale(1)'},margin:{xs:'-70px 0 0 -20px',sm:0} }}>
                <Box data-aos="zoom-in-up"
                sx={{ height: '250px', width: {sm:'600px',xs:'100vw'},margin:{xs:'15px'}, boxShadow: 3, backgroundColor: '#fff', marginLeft: {sm:'150px'}, zIndex: 2 }}>
                    <Stack direction="row" justifyContent="space-around">
                        <img src='/home/images/TrustedBy/onTab3logo.png' style={{ width: '130px' }} />
                        <img src='/home/images/TrustedBy/CDlogo.png' style={{ width: '130px' }} />
                        <img src='/home/images/TrustedBy/AtosLogo.png' style={{ width: '130px' }} />
                    </Stack>
                    <Stack direction="row" justifyContent="space-around" sx={{ marginTop: '-30px', padding: '0px 80px 0 80px' }}>
                        <img src='/home/images/TrustedBy/poyntLogo2.png' style={{ width: '70px', height: '90px', marginTop: '20px' }} />
                        <img src='/home/images/TrustedBy/agoraLogo.png' style={{ width: '130px' }} />
                    </Stack>
                </Box>
                <Box   data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800"
                    sx={{ width: {sm:'600px',xs:'100%'}, marginTop: {sm:'-70px',xs:'60px'},marginBottom: {xs:'60px'}, marginLeft: {sm:'-50px',xs:0 } ,display:'flex',justifyContent:'center' }}>
                    <SwiperApp />
                </Box>
            </Box>
        </>
    )
}

export default TrustedBy