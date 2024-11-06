import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import styles from '../../styles/aboutus/aboutus.module.css'


const Ourmission = () => {


    const [tabOn, setTabOn] = useState('1')


    return (
        <>
            <Box sx={{ width: '100vw', height: {sm:'464px',xs:'auto'}, display: 'flex',}}>
                <Box data-aos="fade-right" className={styles.OurmissionLeftSection} sx={{ width: {sm:'50%',xs:'100%'}, padding: {sm:'20px',xs:0}, boxSizing: 'border-box'  }}>
                    <Box sx={{ marginLeft: {sm:'250px',xs:'20px'}, marginTop: '60px' }}>
                        {/* <p style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '11px', color: '#6f6675' }}>Top level company</p> */}
                        <Typography sx={{ fontFamily: 'Alexandria', padding: 0, margin: '0!important', color: 'white', fontSize: '30px' }}>Providing Innovative<br></br> Web Solutions for Future</Typography>
                        <Box data-aos="zoom-out-up" sx={{ height: '45px', marginTop: '30px', width: {sm:'100%',xs:'93%'}, display: 'flex', alignItems: 'center' }}>
                            <Box onClick={() => { setTabOn('1') }} sx={{ fontFamily: 'Alexandria', fontSize: '13px', cursor: 'pointer', flex: 1, backgroundColor: tabOn == '1' ? '#fff' : '#7e16f5', color: tabOn == '1' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(0% 0%, 100% 0%, 92% 100%, 0% 100%)' }}>Our Mission</Box>
                            <Box onClick={() => { setTabOn('2') }} sx={{ fontFamily: 'Alexandria', fontSize: '13px', cursor: 'pointer', flex: 1, backgroundColor: tabOn == '2' ? '#fff' : '#7e16f5', color: tabOn == '2' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}>Our Vision</Box>
                            <Box onClick={() => { setTabOn('3') }} sx={{ fontFamily: 'Alexandria', fontSize: '13px', cursor: 'pointer', flex: 1, backgroundColor: tabOn == '3' ? '#fff' : '#7e16f5', color: tabOn == '3' ? 'black' : '#fff', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)' }}>Our History</Box>
                        </Box>
                        <Box data-aos="zoom-out-up" sx={{ height: { sm: '170px', xs: '400px' }, backgroundColor: 'white', width: { sm: '750px', xs: '93%' }, position: 'relative', zIndex: 1, marginBottom: { sm: 0, xs: '20px' }, padding: '20px' }}>
                           
                            <Box sx={{display:'flex',height:'100%',flexDirection:{sm:'row',xs:'column-reverse'}}}>
                               
                            <Typography sx={{ fontFamily: 'Alexandria', paddingRight: {sm:'10px',xs:0}, margin: '0!important', fontSize: '15px', color: '#6f6675',width:{sm:'70%',xs:'100%'},fontWeight:300,height:{sm:'100%',xs:'65%'},paddingTop:{sm:0,xs:'10px'} }}>
                                {tabOn == '1' && 'We envision revolutionizing the payment solutions industry by delivering customized solutions that meet the unique needs of businesses worldwide. We strive to be the leading provider of tailored payment solutions, offering exceptional customer service and expertise to our clients.'}
                                {tabOn == '2' && 'We believe in fostering strong partnerships with our clients as technology and product agnostics. Our goal is to make payment processing simple and easy, so that businesses can focus on what they do best - growing their businesses.'}
                                {tabOn == '3' && 'Established in 2010, starting from one garage room and a team of 5 people, we have been passionate about providing businesses with efficient and exceptional solutions. Driving innovation, commitment, and value for more than a decade, we are now a team of more than 150+ professionals, keeping our clients at the center.'}
                            </Typography>
                             <Box  className={styles.ourMission} sx={{width:{sm:'30%',xs:'100%'},padding:'10px!important',height:{sm:'100%',xs:'35%'},backgroundImage: tabOn == '1'? 'url(/aboutus/images/ourmission/ourmissionNewMin2.png)':(tabOn == '2' ? 'url(/aboutus/images/ourmission/ourvisonMinNew.webp)':'url(/aboutus/images/ourmission/ourhistoryMin.webp)')}}></Box>
                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box data-aos="fade-left" className={styles.OurmissionRightSection} sx={{zIndex:'-1', width: '50%',display:{sm:'block',xs:'none'} }}></Box>
            </Box>


            <Box sx={{ marginTop: '30px', width: '100vw', height: '461px', display: 'flex' }}>
                <Box sx={{ width: '53%', display: {sm:'flex',xs:'none'}, alignItems: 'center', justifyContent: 'end' }}>
                    <Box className={styles.aboutBnt} sx={{ height: '80%', width: '80%' }}></Box>
                </Box>
                <Box sx={{ width: {sm:'47%',xs:'100%'}, display: 'flex', alignItems: 'center', paddingLeft: {sm:'70px',xs:'20px'}, paddingRight: {sm:'180px',xs:'30px'} }}>
                    <Box >
                        <p data-aos="fade-right" style={{ margin: 0, padding: 0, fontFamily: 'Alexandria', fontSize: '13px', color: '#6f6675', letterSpacing: '10px' }}>WHO WE ARE</p>
                        <Typography data-aos="fade-right" sx={{ fontFamily: 'Alexandria', padding: 0, marginTop: '10px', color: 'black', fontSize: '45px', lineHeight: '52px' }}>Technology<br style={{ width: '5px' }}></br>& Product<br></br>Partner</Typography>
                        <Typography data-aos="fade-right" sx={{ marginTop: '20px' }}>
                           For over a decade, BNT has been passionate about everything in the payment and technology segment. 
                           Inspired by innovative goals, we envision providing custom payment solutions which are both digitally
                           advanced and sustainable. Our dedicated team of tech and domain experts is committed to delivering high-quality
                           performance solutions that augment business growth.
                        </Typography>
                    </Box>
                </Box>
            </Box>

          
            {/* <Box sx={{ height: '300px' }}></Box> */}
        </>
    )
}

export default Ourmission