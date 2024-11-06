import React, { useEffect, useState } from 'react'
import { MdKeyboardArrowUp } from 'react-icons/md';

import { Box, Stack, styled, Typography, Grid, useMediaQuery } from '@mui/material'
import styles from '../../styles/services/payments.module.css'
import style from '../../styles/services/newtechnologies.module.css';
import AcquiringPayments from './AcquiringPayments';
import ProcessorSolutions from './ProcessorSolutions'
import Ewallets from './Ewallets'
import MobilePayments from './MobilePayments'
import Link from 'next/link'
import BlogCard from '../blogs/BlogCard';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';
import { FiArrowRight } from "react-icons/fi";
import ContactusForm from './ContactusForm';
import ContactusBanner from '../contactusbanner'


const details = [
    {
        heading: 'Mobile Payment Solutions',
        desc: 'As payment landscapes have evolved with mobile phones, accepting credit card payments is a must for businesses.',
        imgBG: 'img1-min'
    },
    {
        heading: 'Terminal Management System',
        desc: 'Our team offers Terminal Management Systems that syncs automatically and updates your terminal swiftly.',
        imgBG: 'img2-min'
    },
    {
        heading: 'Payment Terminal Applications',
        desc: 'Our experts with years of market experience design and develop smart solutions for various payment terminals.',
        imgBG: 'img3-min'
    },
    {
        heading: 'Acquiring Authorization',
        desc: 'BNT’s experienced team has developed a real-time switching and authorization system that support the evolving payment standards for channels, schemes and card products.',
        imgBG: 'img4-min'
    },
    {
        heading: 'FX Solutions',
        desc: 'While foreign exchange can be tricky and complicated, we build global decentralized and over the counter market for exchanging or trading currencies.',
        imgBG: 'img5-min'
    },
    {
        heading: 'Biometric And NFC',
        desc: 'Utilizing latest technology of biometric and NFC ability we enable contactless payments.',
        imgBG: 'img6-min'
    },
    {
        heading: 'Building Open APIs',
        desc: 'We build open API for businesses that allows to share data and functionality with other developers and business',
        imgBG: 'img7-min'
    },
    {
        heading: 'Merchant Management System',
        desc: 'Gives you the freedom to act independently and provide the best experience',
        imgBG: 'img8-min'
    },
]


const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Payments = ({ category }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            if (typeof window !== 'undefined') {
                const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || [];
                const filteredBlogs = allBlogs.filter(blog => blog.category === "Mobile payment" || blog.category === "Wallets" || blog.category === "BaaS" || blog.category === "Digital payments" || blog.featured === true);
                setBlogs(filteredBlogs);
            }
        };

        fetchBlogs();
    }, [category]);



    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));


    return (

        <>
            <Stack className={styles.myBG} direction="row" sx={{ height: { sm: '95vh', xs: 'auto' } }} >
                <Box sx={{ width: { sm: '100%', xs: '100%' }, display: 'flex', alignItems: { sm: 'center', xs: 'center' }, justifyContent: 'center', padding: { sm: 0, xs: '20px' } }}>
                    <Box >
                        <Typography data-aos="fade-down" className={styles.heading} sx={{ fontFamily: 'Helvetica', fontWeight: '600', color: '#fff', fontSize: { sm: '75px', xs: '55px' } }}>
                            Payments
                        </Typography>
                        <Typography data-aos="fade-up" className={styles.headingdesc} sx={{ fontFamily: 'Arial', fontWeight: 700, fontSize: { sm: '22px', xs: '18px' }, color: '#fff', maxWidth: '900px', padding: { sm: 0, xs: '10px' } }}>
                            Fuelled with technology, expertise, and experiences. Our team offers an effective combination of broad fintech service expertise
                            and deep product knowledge to help you deliver a differentiated financial experience.
                        </Typography>
                    </Box>
                </Box>
            </Stack>
            <MobilePayments />
            <Ewallets />
            <ContactusBanner />

            <Box >
                <Typography className={styles.walletHeadmobile} sx={{ fontFamily: 'Alexandria', fontWeight: 380, color: '#141e45', textAlign: 'center', fontSize: { sm: '4vw', xs: '30px' }, marginTop: { sm: '0px', xs: '-10px' }, }}>Acquiring Solutions</Typography>
                <Grid sx={{ padding: { sm: '30px 70px', xs: '20px 20px' } }} container spacing={2} >
                    <Box className={styles.boxWrapper}>
                        {details.map((detail, i) => (
                            <figure key={i} className={`${styles.shapeBox} ${styles.shapeBoxHalf}`}>
                                <img src={`/services/images/acquiringsolutions/${detail.imgBG}.jpg`} alt={detail.heading} />
                                <Box className={`${styles.brkAbsOverlay} ${styles.zIndex0} ${styles.bgBlack} ${styles.opacity60}`}></Box>
                                <figcaption>
                                    <Box className={styles.showCont}>

                                        <Typography className={styles.cardMainTitle}>{detail.heading}</Typography>
                                        <FiArrowRight className={styles.arrowrightcard} />
                                    </Box>
                                    <p className={styles.cardContent}>
                                        {detail.desc}
                                    </p>
                                </figcaption>
                                <span className={styles.after}></span>
                            </figure>
                        ))}
                    </Box>
                </Grid>
            </Box>

            <ProcessorSolutions />

            {blogs.length > 0 && (
                <Box sx={{ margin: { sm: '0px', xs: '20px' } }} >
                    <Typography className={styles.walletHeadmobile} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#141e45', textAlign: 'center', fontSize: { sm: '3vw', xs: '30px' }, marginTop: { sm: '0px', xs: '-20px' }, }}>Related Blogs</Typography>
                    <Carousel
                        responsive={responsive}
                        showDots={true}
                        ssr={true}
                        infinite={true}
                        autoPlay={true}
                        autoPlaySpeed={2000}
                        keyBoardControl={true}
                        customTransition="all .5"
                        transitionDuration={500}
                        containerClass="carousel-container"
                        removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                        dotListClass="custom-dot-list-style"
                        itemClass="carousel-item-padding-40-px"
                    >
                        {blogs.map((blog, index) => (
                            <div key={index} style={{ padding: '10px' }}>
                                <BlogCard
                                    blogIndex={index}
                                    cardDetail={blog}
                                    title={blog.heading}
                                    cardImage={blog.image}
                                    desc={blog.desc}
                                    style={{ height: '100px', width: '100px' }}
                                />
                            </div>
                        ))}
                    </Carousel>
                </Box>
            )}

            <ContactusForm />
            {/* contact us  */}

            <Box sx={{ height: '190px' }}>
                <Box sx={{ width: '100vw', height: '100%', marginTop: '40px', display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '60%', background: 'linear-gradient(90deg, rgba(82,223,160,1) 0%, rgba(98,219,233,1) 0%, rgba(63,94,251,1) 0%, rgba(9,28,96,1) 45%)', clipPath: 'polygon(0% 0%, 55% 0%,80% 45%,80% 65%, 92% 100%, 0% 100%)' }}>
                        {!isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Collaborate with the <br></br> &nbsp;&nbsp;Right Technology Partner  </Typography>}
                        {isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Collaborate  <br></br> with <br></br>the Right <br></br> Technology <br></br>Partner.</Typography>}
                    </Box>
                </Box>
                <Box sx={{ marginTop: '-191px', width: '100vw', height: '100%', display: 'flex', justifyContent: 'end' }}>
                    <Box className={style.joinUs} sx={{ display: 'grid', placeContent: 'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
                        <Link href={'/buildwithus'}>
                            <Box sx={{ cursor: 'pointer', fontFamily: 'Alexandria', display: 'grid', placeContent: 'center', color: 'white', height: { sm: '40px', xs: '33px' }, width: { sm: '158px', xs: '100px' }, background: ' linear-gradient(90deg, rgba(82,223,160,1) 0%, rgba(98,219,233,1) 0%, rgba(63,94,251,1) 0%, rgba(9,28,96,1) 45%)', marginLeft: { sm: 0, xs: '53px' } }}>
                                Contact Us
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>























            {/* <div style={{ height: '300px' }}>

            </div> */}
            {/* <div>
               
                <div style={{ minHeight: '500px', backgroundColor: '#222' }} className={styles.container} >
                    {
                        headings.map((heading, i) => (<AcquiringPayments heading={heading} desc={desc[i]} />))
                    }
                </div>
            </div> */}
        </>
    )
}

export default Payments