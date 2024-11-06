
import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'


const StyledBox = styled(Box)({
    height: '130px',
    // border: '1px solid black',
    display: 'flex',
    flexStart: 'left',
    marginLeft:'50px',
    
})

const TrustedBestHeading = () => {


    return (
        <>
            <StyledBox >
                <Box sx={{marginTop:{sm:'-50px'}}} >
                    <Box  data-aos="fade-right">
                        <Typography  sx={{ fontFamily: 'Alexandria', fontWeight: 100, fontSize: {sm:'65px',xs:'50px'}, color: '#bdbdbd' }}>Trusted By</Typography>
                    </Box>
                    <Box data-aos="fade-left">
                        <Typography sx={{ fontFamily: 'Alexandria',marginLeft:'40px', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'105px',xs:'60px'}, marginTop: {sm:'-60px',xs:'-40px'} }}>The Best</Typography>
                    </Box>
                </Box>
            </StyledBox>
        </>
    )
}

export default TrustedBestHeading






