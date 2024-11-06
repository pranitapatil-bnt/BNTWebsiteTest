import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useEffect } from 'react'
import styles from '../../styles/home/homeservices.module.css'
import ScrollReveal from 'scrollreveal';




const HomeServicesHeading = () => {

    useEffect(() => {
        const sr = ScrollReveal();
    
        sr.reveal('.my-element', {
          duration: 1000,
          distance: '90px',
          easing: 'ease-in-out',
          origin: 'bottom',
          reset: true
        });
      }, []);



    return (
        <><Box sx={{position:'relative',marginTop:{xs:'40px'} }}>
            <img className={styles.rotatePoly} src="/home/images/svgani/poligon11.svg" style={{ width: '160px',position:'absolute',zIndex:1,top:'60px'  }} />
            <img  src="/home/images/svgani/poligon3.svg" style={{ width: '370px',position:'absolute',left:'20px'  }} />
            <Box sx={{ height: {xs:'100px',sm:'180px'}, display: 'flex',justifyContent: 'center'}} >
                <Box  >
                    <Box className="my-element">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300,textAlign:'center', fontSize: { xs: '32px', sm: '110px' }, letterSpacing:{xs:'9px'} , color: '#e3e3e3' }}>SERVICES</Typography>
                    </Box>
                    <Box className="my-element" >
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: { xs: '41px', sm: '55px' }, marginTop: { xs: '-33px', sm: '-80px' } }}>What we do?</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{padding:{xs:'0 20px 30px 20px',sm:"0 160px 50px 160px"}}} >
                <Typography className="my-element" sx={{textAlign: 'center', fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '18px' }}>
                    We at BNT provide the latest technology solutions and evolved technology know-how, building remarkable payment
                    experiences. Offering dynamic and rigorous payment solutions, we cater to developing a
                    secure and reliable payment solution. 
                </Typography>
            </Box>
            </Box>
        </>
    )
}

export default HomeServicesHeading