import { Box, Stack, Typography, styled, Grid, useMediaQuery } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from '../../../styles/services/retail.module.css'
import styleNewtechnologies from '../../../styles/services/newtechnologies.module.css';
import stylesPayment from '../../../styles/services/payments.module.css'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { MdMobileScreenShare } from 'react-icons/md';
import { BiWallet } from 'react-icons/bi';
import { MdKeyboardArrowLeft } from 'react-icons/md';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import SensorOccupiedIcon from '@mui/icons-material/SensorOccupied';
import CategoryIcon from '@mui/icons-material/Category';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import BlogCard from '../../blogs/BlogCard';
import "react-multi-carousel/lib/styles.css";
import Carousel from 'react-multi-carousel';


const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '120px',
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
//     'Pos And Payment Peripherals',
//     'Kiosk And Self Checkout',
//     'Mobile/ Tablet Applications',
//     'Gift & Loyalty Application',
//     'Credit/ Debit Card Applications',
// ]

// const desc = [
//     'Integrate with Pin Pads, Barcode readers, ECRs, Bluetooth Printers, Biometric readers under one platform for flawless operation facility.',
//     'Automating retail experience with DIY ability and enabling users to scan goods and pay through your own choice of digital medium.',
//     'Building responsive applications across all digital mediums, appropriate for mobiles and tablets.',
//     'Offering rewards from all major brands, it works across a number of retailers.',
//     'Accepts all credit and debit cards across all banks.'
// ]

const POSSolutionDetails =[
    {
        heading:'POS and Payment Peripherals',
        desc : 'Integrate with Pin Pads, Barcode readers, ECRs, Bluetooth Printers, Biometric readers under one platform for flawless operation facility.',
        imgBG : 'img1-min'
    },
    {
        heading:'Kiosk and Self Checkout',
        desc : 'Automating retail experience with DIY ability and enabling users to scan goods and pay through your own choice of digital medium.',
        imgBG : 'img2-min'
    },
    {
        heading: 'Mobile/ Tablet Applications',
        desc : 'Building responsive applications across all digital mediums, appropriate for mobiles and tablets.',
        imgBG : 'img3-min'
    },
    {
        heading: 'Gift & Loyalty Application',
        desc : 'Offering rewards from all major brands, it works across a number of retailers.',
        imgBG : 'img4-min'
    },
    {
        heading:'Credit/ Debit Card Applications',
        desc :  'Accepts all credit and debit cards across all banks.',
        imgBG : 'img5-min'
    },
   
]

const headingsBackOffice = [
    'Workforce Management',
    'Customer Management',
    'Inventory Management',
    'BI And Analytics'
]

const descBackOffice = [
    'With large retail facilities spread across geographies, workforce management is crucial. Training and engaging the workforce at regular intervals and directing with the right information can be processed with our exception dashboards. We offer an Integrated set of processes that enables optimization of your workforce.',
    'As retailers, developing and maintaining client relationships is significant. While CRM’s are old and known, customer management platform is integral to increase overall experience between a company and client. Our data-drive analytical process also offers key insights and customer details that can be advantageous for business success.',
    'Stocking goods for future use, Organizations can now master the discipline of storing and managing stock inputs, along with, tracking and maintain stock reports. We design and develop seamless inventory management solutions that are simple, suitable, efficient and effective for all small and large size companies.',
    'Offering a competitive edge and radical solutions to your business concerns, our business intelligence, and analytics platform is built with the latest and cutting-edge technology. Our proven expert data-driven tool provides faster and realistic decision-making ability across all industries and verticals.'
]


const StyledBoxHeadingENTERPRISE = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    // flex : 1,
    display: 'flex',
    justifyContent: 'end',
})

const enterpriseSolutionsDetails = [
    {
        logo: <MobileFriendlyIcon  className={stylesPayment.actualLogo} />,
        title: 'Enterprise Mobility Solution',
        desc: 'Smart world demand business presence in smart devices. As applications are accessed through different mediums.'
    },
    {
        logo: <PrecisionManufacturingIcon  className={stylesPayment.actualLogo} />,
        title: 'Supply Chain Management',
        desc: 'While maximizing customer value is imperative, it is also essential to hold a competitive advantage at all hours.'
    },
    {
        logo: <SensorOccupiedIcon  className={stylesPayment.actualLogo} />,
        title: 'ERP And CRM',
        desc: 'Business success depends on engaging and managing various interactions. As customers are of prime significance.'
    },
    {
        logo: <CategoryIcon  className={stylesPayment.actualLogo} />,
        title: 'Merchandising   ',
        desc: 'While all products might be customer centric, not all customers are all product centric. Hence, it is crucial to rightly promote products that will attract customers and also increase sales.'
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

const Serviceretail = ({category}) => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        
        const fetchBlogs = async () => {
            if (typeof window !== 'undefined') {
                const allBlogs = JSON.parse(localStorage.getItem('allBlogs')) || [];
                const filteredBlogs = allBlogs.filter(blog => blog.featured === true);
                
                setBlogs(filteredBlogs);
            }
        };

        fetchBlogs();
    }, [category]);

    const isMobile = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <>
          
            <Stack className={styles.myBG} direction="row" sx={{ height: { sm: '90vh', xs: 'auto' } }} >
                <Box sx={{ width: { sm: '50%', xs: '100%' }, display: 'flex', alignItems: { sm: 'center', xs: 'start' }, justifyContent: 'center', padding: { sm: 0, xs: '20px' } }}>
                    <Box >
                        <Typography data-aos="fade-down" sx={{ fontFamily: 'Alexandria', fontWeight: '400', color: '#0d47a1', fontSize: { sm: '75px', xs: '55px' } }}>
                            Retail
                        </Typography>
                        <Typography data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: { sm: '22px', xs: '18px' }, color: '#535151', maxWidth: '400px', padding: { sm: 0, xs: '10px' } }}>
                            With an increasing focus on customer experience, it is imperative to offer an elevated and competitive shopping experience for consumers. Thus, it is optimum to strengthen your retail in-store operations.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ width: '50%', display: { sm: 'flex', xs: 'none' }, alignItems: 'center', justifyContent: 'center' }}>
                    <Box data-aos="zoom-out" >
                        <img className={styles.floatingImg} style={{ width: '500px' }} src="/services/images/retail2.png" alt=" "></img>
                    </Box>
                </Box>
            </Stack>




            
            <Box sx={{ display: 'flex',justifyContent: 'end', marginTop: '50px',marginBottom: '50px', height: {sm:'180px',xs:'85px'},paddingRight: {sm:'40px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'64px',xs:'28px'}, color: '#e3e3e3' }}>IN-STORE OPERATIONS</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'5vw',xs:'35px'}, marginTop: {sm:'-60px',xs:'-26px'} }}>POS Solutions</Typography>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                <Grid sx={{ padding: { sm: '30px 70px', xs: '20px 20px' }, width: {sm:'80%',xs:'100%'} }} container spacing={2} >
                    {POSSolutionDetails.map((POSSolutionDetail, i) => (<>
                        <Grid item xs={12} sm={4} md={4} >
                            <Box data-aos="fade-left" data-aos-delay={i <= 3 ? 300 * i : 300 * (i - 4)} className={stylesPayment.card_outer} sx={{ width: { sm: '280px', xs: '100%' }, height: { sm: '230px', xs: '230px' }, marginBottom: '30px' }}>
                                <Box className={stylesPayment.card} style={{    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/services/images/payments/${POSSolutionDetail.imgBG}.jpg')`}} >
                                    <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, fontSize: '24px' }} >{POSSolutionDetail.heading}</Typography>
                                </Box>
                                <Box className={stylesPayment.car_footer} sx={{ backgroundColor: '#1e88e5!important' }}>
                                    <MdKeyboardArrowUp />
                                    <Typography className={stylesPayment.car_footer_readMore} > Read More</Typography>
                                    <p className={stylesPayment.card_desc}>{POSSolutionDetail.desc}</p>
                                </Box>
                            </Box>
                        </Grid>
                    </>))}
                </Grid>
            </Box>


            <Box sx={{ display: 'flex',justifyContent: 'start', marginTop: '110px',marginBottom: '50px', height: {sm:'180px',xs:'85px'},paddingLeft: {sm:'80px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'64px',xs:'28px'}, color: '#e3e3e3' }}>IN-STORE OPERATIONS</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'5vw',xs:'35px'}, marginTop: {sm:'-60px',xs:'-26px'} }}>Back Office</Typography>
                    </Box>
                </Box>
            </Box>

{/* Back Office */}

            <Box sx={{ height: {sm:'auto',xs:'auto'}, border: {sm:'1px solid #dde3ee',xs:'none'}, borderRight: '0px', borderLeft: 'none', display: 'flex', flexDirection:{sm:'row',xs:'column'}, marginBottom: '40px' }}>
                <Box data-aos="fade-right" className={styles.backOfficeBG} sx={{ width: {sm:'40%',xs:'100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center',padding:{sm:0,xs:'30px 20px'} }}>
                    <Typography sx={{ fontFamily: 'Alexandria', paddingLeft: '25px', fontWeight: 300, fontSize: '22px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow' }}>
                    With an increasing focus on customer experience, it is imperative to offer an elevated and competitive shopping experience for consumers. Thus, it is optimum to strengthen your retail in-store operations.</Typography>
                </Box>
                <Box sx={{ width: {sm:'60%',xs:'100%'}, backgroundColor: '#FBFBFB', display: 'flex', flexDirection:{sm:'row',xs:'column'}, }}>
                    {headingsBackOffice.map((heading, i) => (<>
                        <Box className={styles.processsorElement} sx={{ width: {sm:'25%',xs:'100%'}, padding: '20px', paddingTop: {sm:'40px',xs:'20px'}, borderRight: '1px solid #dde3ee' }}>
                            <Box data-aos="fade-right" data-aos-delay={200 * i} sx={{backgroundColor:{xs:'#f2f5f3',sm:'#FBFBFB'},padding:{xs:'10px',sm:0},borderRadius:{sm:0,xs:'7px'}}}>
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 400, color: '#0d47a1', fontSize: '20px' }}>{heading}</Typography>
                                <p style={{ fontFamily: 'Alexandria', color: '#424242', fontWeight: 300, fontSize: '14px', lineHeight: '21px', }}>{descBackOffice[i]}</p>
                            </Box>
                        </Box>
                    </>))}
                </Box>
            </Box>

            {/* E-Commerce Solution> */}

            <Box sx={{ height: {sm:'1000px',xs:'auto'}, backgroundColor: '#eff0f4', position: 'relative', paddingTop: '100px',display:{sm:'block',xs:'flex'},flexDirection:{xs:'column'},paddingBottom:{sm:0,xs:'80px'}}}>
                <Box sx={{height: '180px',display: 'flex',justifyContent: 'start',paddingRight: '40px',position: 'absolute',top: {sm:360,xs:0},left:{sm: 200,xs:'30px'}}} >
                    <Box  >
                        <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                            <Typography sx={{
                                fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'110px',xs:'70px'}, color: '#89c3f0',
                                textShadow: '0 13.36px 8.896px #c4b59d,0 -2px 1px #fff'
                            }}>E</Typography>
                        </Box>
                        <Box data-aos="fade-right" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                            <Typography className={stylesPayment.walletHead} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'8vw',xs:'50px'}, marginTop: {sm:'-60px',xs:'-54px'},marginLeft: {sm:'-80px',xs:'-10px'} }}>Commerce</Typography>
                        </Box>
                    </Box>
                </Box>


                <Box data-aos="zoom-out" sx={{ position: {sm:'absolute',xs:'static'}, top: 50, right: 600,display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'} ,marginTop:{sm:0,xs:'80px'}}}>
                    <Box className={stylesPayment.drop}>
                        <Box className={stylesPayment.content}>
                            {/* <h2 >01</h2> */}
                            <h1 >Quick Online Checkout</h1>
                            <a  >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            Increasing market visibility and traction, social media is an effective and powerful medium to engage and redirect audience to online store.
                            </p>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="zoom-out" data-aos-delay="300" sx={{ position: {sm:'absolute',xs:'static'}, top: 120, right: 250 , display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'},marginTop:{sm:0,xs:'50px'}}}>
                    <Box className={stylesPayment.drop} style={{ borderRadius: '61% 39% 50% 50% / 41% 52% 48% 59% ' }}>
                        <Box className={stylesPayment.content}>
                            {/* <h2 >02</h2> */}
                            <h1 >Social Media Commerce</h1>
                            <a  >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            We leverage social media platforms helping companies develop optimum and strong online presence with higher sales and visibility value.
                            </p>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="zoom-out" sx={{ position: {sm:'absolute',xs:'static'}, top: 460, right: 250, display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'},marginTop:{sm:0,xs:'50px'} }}>
                    <Box className={stylesPayment.drop} style={{ borderRadius: '56% 44% 71% 29% / 50% 54% 46% 50% ' }}>
                        <Box className={stylesPayment.content}>
                            {/* <h2 >03</h2> */}
                            <h1 >SAAS Solutions</h1>
                            <a  >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            Utilizing advanced and latest technology, we develop and provide latest SaaS ecommerce solutions. Providing cloud based hosting systems, they can be accessed by any web user on the internet.
                            </p>
                        </Box>
                    </Box>
                </Box>
                <Box data-aos="zoom-out" sx={{ position: {sm:'absolute',xs:'static'}, top: 650, right: 600 , display:{sm:'block',xs:'flex'},justifyContent:{xs:'center'},marginTop:{sm:0,xs:'50px'} }}>
                    <Box className={stylesPayment.drop} style={{ borderRadius: '55% 45% 33% 67% / 35% 31% 69% 65% ' }}>
                        <Box className={stylesPayment.content}>
                            {/* <h2 >04</h2> */}
                            <h1 >Web Design And Development</h1>
                            <a  >Read more</a>
                        </Box>
                        <Box className={stylesPayment.contentDesc}>
                            <p style={{ textAlign: 'center' }}>
                            Variants of portals include mashups and intranet ``dashboards`` for executives and managers.
                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box>

            {/* ENTERPRISE SOLUTIONS */}


            <Box sx={{ display: 'flex',justifyContent: 'end', marginTop: '50px',marginBottom: '50px', height: {sm:'180px',xs:'85px'},paddingRight: {sm:'40px',xs:'20px'},}} >
                <Box  >
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1100" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, fontSize: {sm:'100px',xs:'50px'}, color: '#e3e3e3' }}>ENTERPRISE</Typography>
                    </Box>
                    <Box data-aos="fade-up" data-aos-once="false" data-aos-duration="1500" data-aos-offset="100">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#1e8be1', textAlign: 'center', fontSize: {sm:'6vw',xs:'40px'}, marginTop: {sm:'-90px',xs:'-45px'} }}>Solutions</Typography>
                    </Box>
                </Box>
            </Box>


            <Box sx={{ margin: {sm:'100px 0px 100px 0px',xs:'20px'}, display: 'flex',flexDirection:{sm:'row',xs:'column'}, alignItems: 'center', justifyContent: 'center', gap: '30px' }}>
                {enterpriseSolutionsDetails.map(item => (<>
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
                <Box sx={{ margin: { sm: '100px', xs: '20px' }}} >
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
                    <Box className={styleNewtechnologies.joinUs} sx={{ display: 'grid', placeContent: 'center', width: '63%', clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%,33% 100%,20% 62%,20% 39%)' }}>
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

export default Serviceretail