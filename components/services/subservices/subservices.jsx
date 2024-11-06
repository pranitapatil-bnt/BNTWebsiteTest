import React, { useEffect, useState } from 'react'
import styles from '../../../styles/services/fintech.module.css'
import style from '../../../styles/services/newtechnologies.module.css';
import { Box, Stack, Typography, styled, Grid, useMediaQuery } from '@mui/material'
import stylesPayment from '../../../styles/services/payments.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { Architecture } from '@mui/icons-material';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import PaymentsIcon from '@mui/icons-material/Payments';
import SupportIcon from '@mui/icons-material/Support';
import CardTravelIcon from '@mui/icons-material/CardTravel';
import Link from 'next/link'
import BlogCard from '../../blogs/BlogCard';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';



const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '20px',
    // marginBottom: '50px'
})

const StyledBoxHeading = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '50px',
    marginBottom: '50px'
})

const StyledBoxHeading2 = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: '80px',
    marginTop: '110px',
    // marginBottom: '30px'
})

const StyledBoxHeadingECommerce = styled(Box)({
    height: '180px',
    display: 'flex',
    justifyContent: 'start',
    paddingRight: '40px',
    position: 'absolute',
    top: 360,
    left: 200
})

// const headings = [
//     'Bi And Analytics',
//     'Web Enabled Applications',
//     'Cloud & Mobile Based Solutions',
//     'Retail Management',
//     'Payment Processing',
//     'MOBILE APPLICATION'
// ]

// const desc = [
//     'Our skills, technologies, practices for continuous iterative exploration and investigation of your business.',
//     "Portals include mashups and intranet 'dashboards' for executives and managers.",
//     'Gives you the freedom to act independently and provide the best experience',
//     'A framework which can easily accommodate and provide solutions for your retail needs',
//     'Processes all payment modes for online and traditional brick and mortar stores',
//     'Built new age mobile applications with our local and global banks and wallet APIs.'
// ]

const customDetails =[
    {
        heading:'BI And Analytics',
        desc : 'Our skills, technologies, practices for continuous iterative exploration and investigation of your business.',
        imgBG : 'img1-min'
    },
    {
        heading:'Web Enabled Applications',
        desc : "Portals include mashups and intranet 'dashboards' for executives and managers.",
        imgBG : 'img2-min'
    },
    {
        heading: 'Cloud & Mobile Based Solutions',
        desc : 'Gives you the freedom to act independently and provide the best experience',
        imgBG : 'img3-min'
    },
    {
        heading: 'Retail Management',
        desc : 'A framework which can easily accommodate and provide solutions for your retail needs',
        imgBG : 'img4-min'
    },
    {
        heading:'Payment Processing',
        desc :  'Processes all payment modes for online and traditional brick and mortar stores',
        imgBG : 'img5-min'
    },
    {
        heading:'Mobile Application',
        desc :  'Built new age mobile applications with our local and global banks and wallet APIs.',
        imgBG : 'img6-min'
    },
   
]

const architectureHeading = [
    'Force.com Application Development',
    'SFDC Integration And Data Management',
    'Mobile Platform Development',
    'Salesforce Services'
]

const architecturDesc = [
    'Follow smart processes and procedures involved in writing software for small, wireless computing systems.',
    'Overall launch point for exploring the various integration options related to Force.com.',
    'Follow smart processes and procedures involved in writing software for small, wireless computing systems.',
    'The purpose is to foster one-to-one marketing relationships with every customer, across multiple channels and on any device.'
]

const reEngineeringDetails = [

    {
        logo: <CardMembershipIcon  className={stylesPayment.actualLogo} />,
        title: 'EMV Certifications',
        desc: 'Special test scripts, certified by the acquirer for every association, have to be executed with the help of the EMV toolkit.'
    },
    {
        logo: <PaymentsIcon  className={stylesPayment.actualLogo} />,
        title: 'Payment Gateway Certifications',
        desc: "Mandatory compliance standard for all payment service providers."
    },
    {
        logo: <SupportIcon  className={stylesPayment.actualLogo} />,
        title: 'PCI Compliance',
        desc: 'Helps you process, handle or stores credit card data on behalf of a merchant.'
    },
    {
        logo: <CardTravelIcon  className={stylesPayment.actualLogo} />,
        title: 'Payment Processor Certifications',
        desc: 'To ensure high class service across all channels.'
    }

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

const Fintechservice = ({ category }) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        
        const fetchBlogs = async () => {
            if (typeof window !== 'undefined') {
                const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || [];
                const filteredBlogs = allBlogs.filter(blog =>  blog.featured === true);
                
                setBlogs(filteredBlogs);
            }
        };

        fetchBlogs();
    }, [category]);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>

            <Stack className={styles.myBG} direction="row" sx={{height: {sm:'90vh',xs:'auto'}}} >
                <Box sx={{ width: {sm:'50%',xs:'100%'},  display: 'flex', alignItems: {sm:'center',xs:'start'}, justifyContent: 'center',padding:{sm:0,xs:'20px'} }}>
                    <Box >
                        <Typography data-aos="fade-down" sx={{ fontFamily: 'Alexandria', fontWeight: '400', color: '#1039a1', fontSize: {sm:'75px',xs:'46px'}, lineHeight: {sm:'74px',xs:'48px'} }}>
                        Custom<br></br> Services
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'22px',xs:'18px'}, color: '#535151', maxWidth: '400px',padding:{sm:0,xs:'10px'},marginTop:{sm:'30px',xs:'5px'} }}>
                        Our award-winning services are the most efficient way to bring your ideas to life.                         </Typography>
                    </Box>
                </Box>
                <Box sx={{width: '50%',display: {sm:'flex',xs:'none'}, alignItems: 'center', justifyContent: 'center' }}>
                    <Box  data-aos="zoom-out" >
                            <img className={styles.floatingImg} style={{ width: '380px' }} src="/services/images/cutom2.png" alt="Img"></img>
                    </Box>
                </Box>
            </Stack>


            <Box sx={{ display: 'flex',justifyContent: 'end', marginTop: '50px',marginBottom: '50px', height: {sm:'180px',xs:'85px'},paddingRight: {sm:'40px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'100px',xs:'28px'}, color: '#e3e3e3',textAlign: 'center' }}>CUSTOM</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'5vw',xs:'35px'}, marginTop: {sm:'-60px',xs:'-26px'} }}>Development</Typography>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Grid sx={{ padding: { sm: '30px 70px', xs: '20px 20px' }, width: {sm:'85%',xs:'100%'} }} container spacing={2} >
                    {customDetails.map((customDetail, i) => (<>
                        <Grid item xs={12} sm={4} md={4} >
                            <Box data-aos="fade-left" data-aos-delay={i <= 3 ? 300 * i : 300 * (i - 4)} className={stylesPayment.card_outer} sx={{ width: { sm: '280px', xs: '100%' }, height: { sm: '230px', xs: '230px' }, marginBottom: '30px' }}>
                                <Box className={stylesPayment.card} style={{    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/services/images/payments/${customDetail.imgBG}.jpg')`}} >
                                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '24px' }} >{customDetail.heading}</Typography>
                                </Box>
                                <Box className={stylesPayment.car_footer} sx={{ backgroundColor: '#2d6beb!important' }}>
                                    <MdKeyboardArrowUp />
                                    <Typography className={stylesPayment.car_footer_readMore} > Read More</Typography>
                                    <p className={stylesPayment.card_desc}>{customDetail.desc}</p>
                                </Box>
                            </Box>
                        </Grid>
                    </>))}
                </Grid>
            </Box>


            <Box id="targetDivSalesforce" sx={{ display: 'flex',justifyContent: 'start', marginTop: '70px',marginBottom: '30px', height: {sm:'180px',xs:'85px'},paddingLeft: {sm:'80px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'100px',xs:'35px'}, color: '#1e8be1' }}>Salesforce</Typography>
                    </Box>
                    {/* <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'left', fontSize: {sm:'5vw',xs:'35px'}, marginTop: {sm:'-60px',xs:'-26px'} }}>Salesforce</Typography>
                    </Box> */}
                </Box>
            </Box>


            <Box sx={{ height: {sm:'auto',xs:'auto'}, border: {sm:'1px solid #dde3ee',xs:'none'}, borderRight: '0px', borderLeft: 'none', display: 'flex', flexDirection:{sm:'row',xs:'column'}, marginBottom: '40px' }}>
                <Box data-aos="fade-right" className={styles.backOfficeBG} sx={{ width: {sm:'40%',xs:'100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center',padding:{sm:0,xs:'30px 20px'} }}>
                    <Typography sx={{ fontFamily: 'Alexandria', paddingLeft: '25px', fontWeight: 300, fontSize: '22px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow' }}>
                    Armed with the flexible engagement model, experience in product development, enterprise and Cloud solutions, BNT caters enterprises with Salesforce enabled services, applications and products.                    </Typography>
                </Box>
                <Box sx={{ width: {sm:'60%',xs:'100%'}, backgroundColor: '#FBFBFB', display: 'flex', flexDirection:{sm:'row',xs:'column'}, }}>
                    {architectureHeading.map((heading, i) => (<>
                        <Box className={styles.processsorElement} sx={{ width: {sm:'25%',xs:'100%'}, padding: '20px', paddingTop: {sm:'40px',xs:'20px'}, borderRight: '1px solid #dde3ee' }}>
                            <Box data-aos="fade-right" data-aos-delay={200 * i} sx={{backgroundColor:{xs:'#f2f5f3',sm:'#FBFBFB'},padding:{xs:'10px',sm:0},borderRadius:{sm:0,xs:'7px'}}}>
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: '#162d82', fontSize: '20px' }}>{heading}</Typography>
                                <p style={{ fontFamily: 'Alexandria', color: '#424242', fontWeight: 300, fontSize: '14px', lineHeight: '21px', }}>{architecturDesc[i]}</p>
                            </Box>
                        </Box>
                    </>))}
                </Box>
            </Box>
       


{/* Mine below */}


{/* 
            <Box sx={{ height: {sm:'1000px',xs:'auto'}, backgroundColor: '#eff0f4', position: 'relative', paddingTop: '100px',display:{sm:'block',xs:'flex'},flexDirection:{xs:'column'},paddingBottom:{sm:0,xs:'80px'}}}>
                <Box sx={{height: '180px',display: 'flex',justifyContent: 'start',paddingRight: '40px',position: 'absolute',top: {sm:360,xs:0},left:{sm: 200,xs:'30px'}}} >
                    <Box  >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{
                                fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'50px',xs:'30px'}, color: '#d4d4d6', color: '#eff0f4',
                                textShadow: '0 13.36px 8.896px #c4b59d,0 -2px 1px #fff'
                            }}>Independent Testing</Typography>
                        </Box>
                        <Box data-aos="fade-right" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography className={stylesPayment.walletHead} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'8vw',xs:'50px'}, marginTop: {sm:'-40px',xs:'-21px'},marginLeft: {sm:'-60px',xs:'-10px'} }}>Services</Typography>
                        </Box>
                    </Box>
                </Box>


                <Box data-aos="zoom-out" sx={{ position: {sm:'absolute',xs:'static'}, top: 50, right: 600,display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'} ,marginTop:{sm:0,xs:'80px'}}}>
                    <Box className={stylesPayment.drop}>
                        <Box className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>01</h2>
                            <h1 >Plan Testing Strategy</h1>
                            <a style={{ backgroundColor: '#2d6beb' }} >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>Defines testing approach to achieve testing objectives. The Test Strategy is normally derived from the Business Requirements.</p>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="zoom-out" data-aos-delay="300" sx={{ position: {sm:'absolute',xs:'static'}, top: 120, right: 250 , display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'},marginTop:{sm:0,xs:'50px'}}}>
                    <Box className={stylesPayment.drop} style={{ borderRadius: '61% 39% 50% 50% / 41% 52% 48% 59% ' }}>
                        <Box className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>02</h2>
                            <h1 >Test Script Preparation</h1>
                            <a style={{ backgroundColor: '#2d6beb' }} >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            Testing a set of instructions on a system under test to verify that the system performs as expected. 
                            </p>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="zoom-out" sx={{ position: {sm:'absolute',xs:'static'}, top: 460, right: 250, display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'},marginTop:{sm:0,xs:'50px'} }}>
                    <Box className={stylesPayment.drop} style={{ borderRadius: '56% 44% 71% 29% / 50% 54% 46% 50% ' }}>
                        <Box className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>03</h2>
                            <h1 >Test Case Documentation</h1>
                            <a style={{ backgroundColor: '#2d6beb' }} >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            Test inputs, execution conditions, and expected results developed for a particular objectives studied and recorded with high accuracy.                            </p>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="zoom-out" sx={{ position: {sm:'absolute',xs:'static'}, top: 650, right: 600 , display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'},marginTop:{sm:0,xs:'50px'} }}>
                    <Box className={stylesPayment.drop} style={{ borderRadius: '55% 45% 33% 67% / 35% 31% 69% 65% ' }}>
                        <Box className={stylesPayment.content}>
                            <h2 style={{ color: '#2d6beb' }}>04</h2>
                            <h1 >Functional Testing</h1>
                            <a style={{ backgroundColor: '#2d6beb' }} >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            Fool proof systematic checks of each and every component of your product to figure out whether it is working for you or not.                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box> */}


            {/* Above mine */}


            <Box id="targetDivCerifications" sx={{ display: 'flex',justifyContent: 'end', marginTop: '50px',marginBottom: '50px', height: {sm:'100px',xs:'85px'},paddingRight: {sm:'40px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'80px',xs:'40px'}, color: '#1e8be1' }}>Certifications</Typography>
                    </Box>
                    {/* <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'5vw',xs:'40px'}, marginTop: {sm:'-70px',xs:'-23px'} }}>Re-Engineering</Typography>
                    </Box> */}
                </Box>
            </Box>


            <Box sx={{ margin: {sm:'100px 0px 100px 0px',xs:'20px'},marginTop:{sm:'100px',xs:'100px'}, display: 'flex',flexDirection:{sm:'row',xs:'column'}, alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {reEngineeringDetails.map(item => (<>
                    <Box data-aos="fade-zoom-in" data-aos-easing="ease-in-back" data-aos-offset="0" data-aos-duration="800">
                        <Box className={stylesPayment.mobile_card} >
                            <Box className={stylesPayment.mobile__card_logo}>{item.logo}</Box>
                            <h3>{item.title}</h3>
                            <p>{item.desc}</p>
                        </Box>
                    </Box>
                </>))}
            </Box>

            {blogs.length > 0 && (
                <Box sx={{ margin: { sm: '100px', xs: '20px' }}}>
                    <Typography className={stylesPayment.blogsTitle} variant="h6">Related Blogs</Typography>
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
                                    // Custom styles for smaller cards
                                    style={{ height: '100px', width: '100px' }}  
                                />
                            </div>
                        ))}
                    </Carousel>
                </Box>
            )}

             {/* contact us  */}

             <Box sx={{ height: '190px' }}>
                <Box sx={{ width: '100vw', height: '100%', marginTop: '100px', display: 'flex' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', width: '60%', backgroundColor: '#7e16f5', clipPath: 'polygon(0% 0%, 55% 0%,80% 45%,80% 65%, 92% 100%, 0% 100%)' }}>
                        {!isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Collaborate with the <br></br> &nbsp;&nbsp;Right Technology Partner  </Typography>}
                        {isMobile && <Typography sx={{ marginLeft: { sm: '200px', xs: '20px' }, lineHeight: '32px', fontFamily: 'Alexandria', color: 'white', fontSize: { sm: '30px', xs: '19px' } }}>Collaborate  <br></br> with <br></br>the Right <br></br> Technology <br></br>Partner.</Typography>}
                    </Box>
                </Box>
                <Box sx={{ marginTop: '-191px', width: '100vw', height: '100%', display: 'flex', justifyContent: 'end' }}>
                    <Box className={style.joinUs} sx={{ display: 'grid', placeContent: 'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
                        <Link href={'/buildwithus'}>
                            <Box sx={{ cursor: 'pointer', fontFamily: 'Alexandria', display: 'grid', placeContent: 'center', color: 'white', height: { sm: '40px', xs: '33px' }, width: { sm: '158px', xs: '100px' }, background: ' linear-gradient(90deg, rgba(126,22,245,1) 0%, rgba(192,144,247,1) 71%)', marginLeft: { sm: 0, xs: '53px' } }}>
                                Contact Us
                            </Box>
                        </Link>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default Fintechservice