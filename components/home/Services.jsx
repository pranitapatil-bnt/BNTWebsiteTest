import { Box, Typography,Button } from '@mui/material'
import React,{useEffect} from 'react'
import styles from '../../styles/home/services.module.css'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import Link from 'next/link'
import ScrollReveal from 'scrollreveal';



const Services = ({section, title, linkRoute, desc}) => {

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
        <>
            <Box className={`${styles.box} ${styles[section]}`}>
                <Box sx={{ display: 'flex', alignItems: 'center', height: '100%',float:{sm:(section==='section2' || section==='section4')?'left':'right', xs:'left'} }}  >
                    <Box className="my-element"  sx={{width:{sm:'700px',xs:'auto'}, paddingLeft:{sm:(section==='section2' || section==='section4')?'80px':'', xs:'40px'}}} >
                        <Typography fontSize= {{sm:'40px',xs:'35px'}} sx={{ fontFamily: 'Alexandria', fontWeight: '500', color:(section==='section3' || section==='section4')?'#fff':'#424242', ...(section==='section1' &&  {color:{xs:'#fff',sm:'#424242'}})}}>{title}</Typography>
                        <Typography fontSize= {{sm:'22px',xs:'18px'}} sx={{ fontFamily: 'Alexandria', fontWeight: '300', color:(section==='section3' || section==='section4')?'#fff':'#212121',...(section==='section1' &&  {color:{xs:'#fff',sm:'#424242'}})  , borderLeft: '3px solid #1e8be1', paddingLeft: '20px',paddingRight: '20px' }}>{desc}</Typography>
                        {/* <button className={`${styles.btn} ${styles.fourth}`}>Know more &nbsp; {  <KeyboardDoubleArrowRightIcon sx={{ fontSize: '16px' }} />}</button> */}
                        <Link  href={linkRoute}>
                        <Button  sx={{ textTransform: 'none', fontFamily: 'Alexandria', fontWeight: 400,marginLeft:'20px' ,fontSize: '16px',color:( section==='section2' || section==='section4'?'#fff':'') }}>Know more&nbsp; <KeyboardDoubleArrowRightIcon sx={{ fontSize: '20px' }} /> </Button>

                         </Link>

                    </Box>
                </Box>
            </Box>                                                              
        </>
    )
}

export default Services