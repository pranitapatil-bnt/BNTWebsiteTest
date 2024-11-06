import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React, { useEffect } from 'react'
import styles from '../../styles/home/homeservices.module.css'


// const StyledBox = styled(Box)({
//     height: '180px',
//     display: 'flex',
//     justifyContent: 'right',
//     marginRight:'50px'
// })

const WhyUsHeading = () => {


    return (
        <>
            <Box sx={{height: '180px',display: 'flex',justifyContent: 'right',marginRight:{sm:'50px',xs:'10px'}}} data-aos-once="true" >
                <Box data-aos="fade-left" data-aos-once="false" sx={{
                    width: {sm:'500px',xs:'80vw'}, height: {sm:'180px',xs:'150px'}, display: 'flex', 
                    justifyContent: 'center', marginTop: {sm:'-50px',xs:'-10px'}, backgroundColor: '#1e8be1'    
                }} >
                    <Box >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 100, fontSize: {sm:'110px',xs:'90px'}, color: '#e8e8e8' }}>WHY</Typography>
                        </Box>
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: 'white', textAlign: 'center', fontSize: {sm:'72px',xs:'60px'}, marginTop: {sm:'-90px',xs:'-68px'} }}>Us</Typography>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default WhyUsHeading