
import { Stack, Box, styled, Typography } from '@mui/material';
import Image from 'next/image'
import styles from '../../styles/home/homepage.module.css';
import stylesWhyus from '../../styles/home/whyus.module.css';
import stylesServices from '../../styles/home/services.module.css'


import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import Link from 'next/link'
import HomeServicesHeading from './HomeServicesHeading'
import Whyus from './Whyus'
import HomeServices from './HomeServices'
import WhyUsHeading from './WhyUsHeading'
import TrustedBestHeading from './TrustedBestHeading'
import TrustedBy from './TrustedBy'
import Footer from '../Footer'


const Homepage = () => {

    useEffect(() => {
        document.querySelector('.moving-image').addEventListener('mousemove', (e, t, a, x, y, s) => {
            s = 50; // This is the speed. Higher means slower
            x = e.pageX;
            y = e.pageY;
            document.querySelector('.moving-image').style.cssText = `
            transition: 300ms;
            top: ${Math.ceil(y / s)}px; left:-${Math.ceil(x / s)}px`
        })

        document.querySelector('.moving-image').addEventListener('mouseout', (e, a, t) => {
            document.querySelector('.moving-image').style.cssText = `
                transition: 500ms;
                top:0px; left:0px`

        })

    }, [])

    const fetchAndStoreBlogs = async () => {
        try {
            const response = await fetch('https://bntblogs.s3.ap-south-1.amazonaws.com/allblogs/all_blogs_json.txt');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            if (typeof window !== 'undefined') {
                localStorage.setItem('allBlogs', JSON.stringify(data.allblogs));
            }

        } catch (error) {
            console.error('Failed to fetch and store blogs data:', error);
        }
    };
    
   
    fetchAndStoreBlogs();


    return (
        <>
            <Stack
                className={styles.myBG}
                direction={{ xs: 'column', sm: 'row' }}
                sx={{ height: { xs: '100vh', sm: '100vh' }}}
            >
                <Box sx={{ position: 'relative', width: { xs: '100%', sm: '50%' }, height: { xs: 'auto', sm: '100%' } }}>
                    <Box sx={{ position: 'absolute', right: '20px', top: {xs:'45px',sm:'120px'},marginLeft:{xs:'30px'}  }}>
                        <Typography data-aos="fade-down" sx={{ color: '#424242', fontFamily: 'Alexandria', fontWeight: '200', fontSize: '35px' }}>
                            Building and Integrating demo
                        </Typography>
                        <Typography className={stylesWhyus.headingH1} data-aos="fade-right" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#1a237e', fontSize: '60px' }}>Next-Gen</Typography>
                        <Typography data-aos="fade-right" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#1a237e', fontSize: '60px', marginTop: '-10px', }}>
                            Payment Solutions
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: '22px', color: '#535151' }}>
                            Fuelled with technology, expertise,<br /> and experiences.
                        </Typography>
                        <Link href={'/aboutus'}>
                            <button className={`${stylesServices.btn} ${stylesServices.fourth}`}>Know more</button>
                        </Link>

                    </Box>
                </Box>
                <Box sx={{ position: 'relative',display:{xs: 'none', sm: 'block' }, width: '50%', height: { xs: 'auto', sm: '100%' }  }}>
                    <Box data-aos="zoom-out" sx={{ position: 'relative', top: '95px' }}>
                        <figure className={`moving-image ${styles.artbox}`}>
                            <img className={`movable-image ${styles.box_image} ${styles.floatingImg}`} style={{ width: '550px' }} src="/home/images/homePayment.png" alt=" "></img>
                        </figure>
                    </Box>

                </Box>
            </Stack>
            <HomeServicesHeading />
            <HomeServices />
            <Box>
                <WhyUsHeading />
                <Whyus />
            </Box>

            <Box sx={{ height: {sm:'500px',xs:'auto'} }} >
                <TrustedBestHeading />
                <TrustedBy />
            </Box>

            {/* <Footer /> */}


            {/* <Box sx={{ height: '400px' }}></Box> */}












            {/* <Typography>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                </Typography> */}
            <style jsx>{
                `.bntLogo{
  background: -webkit-linear-gradient( #2196f3, #380036);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}`}
            </style>
        </>

    )
}

export default Homepage;