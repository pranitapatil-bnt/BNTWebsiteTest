import React from 'react'
import { Stack, Box, styled, Typography } from '@mui/material';
import styles from '../../styles/solutions/dupes.module.css'
import stylesRetail from '../../styles/services/retail.module.css'


const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'end',
    paddingRight: '40px',
    marginTop: '120px',
    // marginBottom: '50px'
})

const Dupes = () => {
    return (
        <>
            {/* <div className={styles.dupesBackground}>
               Hii
               my name is Nitin
            </div> */}


            <Stack className={styles.myBG} direction="row" >
                <Box sx={{ position: 'relative', width: {sm:'50%',xs:'100vw'}, height: {sm:'100vh',xs:'70vh'}, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <Box sx={{ position: 'absolute',margin:{xs:'0 15px 0 15px',sm:'-60px 0px 0 0px'}  }}>
                        {/* <Typography data-aos="fade-right" style={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#1a237e', fontSize: '60px' }}>Next-Gen</Typography> */}
                        <Typography fontSize={{sm:'75px',xs:'55px'}} data-aos="fade-down" style={{ fontFamily: 'Alexandria', fontWeight: '400', color: '#0328a3', marginTop: '-10px' }}>
                            Solutions
                        </Typography>
                        <Typography fontSize={{ sm: '22px', xs: '19px' }} data-aos="fade-up" sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#535151', maxWidth: '400px' }}>
                            Realising how redundant tasks can lead to delayed outputs, our custom-made solutions enable you to transform your business into a digitally-efficient model, accelerating growth and outcome.                         </Typography>
                    </Box>
                </Box>
                {/* <StyledBox sx={{ position: 'relative' }}>
                    <Box data-aos="zoom-out" sx={{ position: 'relative' }}>
                        <figure >
                            <img className={stylesRetail.floatingImg} style={{ width: '500px' }} src="/services/images/retail.png" alt=" "></img>
                        </figure>
                    </Box>
                </StyledBox> */}
            </Stack>


            <Stack id="targetDivDupesPreventer" direction={{sm:"row",xs:'column',height: {sm:'595px',xs:'auto'}}} >
                <Box  sx={{ position: 'relative', width: {sm:'40%',xs:'100%'},  }}>
                    <Box className={styles.dupesblob} data-aos="zoom-out" sx={{ position: 'relative', top: {sm:'95px',xs:'50px'},left:{xs:'-80px',sm:0} }}>
                        <img className={styles.dupesblobImg}   src="/solutions/Dupes/blobdupes.svg" ></img>
                        {/* <img style={{ width: '650px' }} src="/solutions/Dupes/dot-hori.svg" ></img> */}
                        <Box sx={{ marginTop: '-50px', position: 'absolute', top: 165, left: 140 }} >
                            <Box data-aos="fade-right">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 200, fontSize: {sm:'50px',xs:'30px'}, color: '#fff' }}>Dupes</Typography>
                            </Box>
                            <Box data-aos="fade-left">
                                <Typography sx={{ fontFamily: 'Alexandria', marginLeft: '20px', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: {sm:'67px',xs:'44px'}, marginTop: {sm:'-40px',xs:'-24px'} }}>Preventer</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ width: {sm:'60%',xs:'100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center',marginTop:{sm:'0px',xs:'70px'} }}>
                    <Box padding= {{sm:'30px',xs:'15px'}} sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px', width: '95%', height: '80%' }}>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'} }}>
                            <span style={{ fontSize: '30px', color: '#1e8be1' }}>DupesPreventer</span>   is the perfect solution for the problem of duplicity. Designed to detect duplicates of standard objects
                            like accounts, contact, lead, lead to account, lead to contact, and vice versa arising from prospect entries,
                            web-to-lead or integrated systems. With the help of this Application any duplicate entry can be blocked or
                            reported based on your requirement.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767',  marginTop: '20px',fontSize: {sm:'18px',xs:'15px'} }}>
                            It can detect duplicates to Accounts, Contacts, Leads, along with, “Lead to Contact” and “Lead to Account” and VICEVERSA. It’s a two way
                            Duplicate checker which gives the application a distinctive characteristic.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767',  marginTop: '20px',fontSize: {sm:'18px',xs:'15px'} }}>
                            DupesPreventer allows to either block the duplicates completely or just allow the duplicates enter the system
                            and generate warnings for those. Duplicates to Accounts, Contacts and Leads can all be detected with this
                            product and it also allows cross object deduplication like lead to contact and lead to account.
                            This application supports for all standard fields as well as custom fields
                        </Typography>
                    </Box>

                </Box>
            </Stack>



            <Stack id="targetDivConfigPay" direction={{sm:"row",xs:'column-reverse',height: {sm:'695px',xs:'auto'}}} >
                <Box style={{ width: {sm:'60%',xs:'100%'},  display: 'flex', alignItems: 'center', justifyContent: 'center' ,marginTop:{sm:'0px',xs:'70px'}}}>
                    <Box sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px', width: '95%', height: '80%', padding: {sm:'30px',xs:'15px'},marginTop:{sm:0,xs:'70px'} }}>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767',fontSize: {sm:'18px',xs:'15px'}}}>
                            <span style={{ fontSize: '30px', color: '#1e8be1' }}>ConfigPay</span> a SAP Hybris Commerce application is an intelligent payment integration tool. A readymade payment gateway
                            platform, the application is designed for easy and convenient integration with other SAP Hybris Commerce
                            platforms. Our payment system provides payment data localization, payment service provider (PSP)
                            integration, and data sync between SAP and Hybris Ecommerce.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                            <span style={{ fontSize: '20px', color: '#212fb5' }}>Reduced Time</span> : An efficient payment integration application that is custom made and fit for all SAP Hybris Commerce Platform.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                            <span style={{ fontSize: '20px', color: '#212fb5' }}>Cost Effective</span> : A payment gateway is a basic module while developing an ecommerce platform.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                            <span style={{ fontSize: '20px', color: '#212fb5' }}>Zero Coding</span> : ConfigPay can be appropriately configured with any SAP and Hybris ecommerce platform.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                            <span style={{ fontSize: '20px', color: '#212fb5' }}>Configuration Based</span> : For integrating PSP/Payment gateway, read the guided manner carefully and simply add configuration.
                        </Typography>
                    </Box>
                </Box>
                <Box sx={{ position: 'relative', width: {sm:'40%',xs:'100%'} }}>
                    <Box data-aos="zoom-out" className={styles.configpayblob}  sx={{ position: 'relative', top: '95px',left:{xs:'-10%',sm:0} }}>
                        <img className={styles.configpayblobImg}  src="/solutions/Configpay/blobConfigpay.svg" ></img>
                        {/* <img style={{ width: '650px' }} src="/solutions/Dupes/dot-hori.svg" ></img> */}
                        <Box sx={{ marginTop: '30px', position: 'absolute', top: 195, left: 140 }} >
                            <Box data-aos="fade-left">
                                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, marginLeft: {sm:'-10px',xs:'-33px'}, color: '#fff', textAlign: 'center', fontSize: {sm:'67px',xs:'40px'}, marginTop: {sm:'-40px',xs:'-72px'} }}>ConfigPay</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Stack>

            {/* COnfigPay */}

            {/* <Box data-aos="zoom-out" className={styles.configBox} style={{ height: '350px' }}>
                <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '5vw', paddingTop: '50px' }}>CONFIGPAY</Typography>
                <Box sx={{ padding: "0px 160px 0 160px" }} >
                    <Typography data-aos="fade-up" data-aos-once="false" sx={{ textAlign: 'center', fontFamily: 'Alexandria', fontWeight: '300', color: '#fff', fontSize: '20px' }}>
                        ConfigPay, a SAP Hybris Commerce application is an intelligent payment integration tool. A readymade payment gateway
                        platform, the application is designed for easy and convenient integration with other SAP Hybris Commerce
                        platforms. Our payment system provides payment data localization, payment service provider (PSP)
                        integration, and data sync between SAP and Hybris Ecommerce.
                    </Typography>
                </Box>
            </Box> */}


            {/* <Box sx={{ padding: "50px", backgroundColor: '#fafafa' }}>
                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#dcedc8" }}>
                        <Box className={styles.configSubHead}  >
                            Reduced Time
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#388e3c", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#dcedc8", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            An efficient payment integration application that is custom made and fit for all SAP Hybris
                            Commerce Platform. The tailor made solution can be integrated in a few steps without
                            consuming long hours. It reduces your time of coding from scratch and provides ready built-in ecommerce solution.
                        </Box>
                    </Box>
                </Box>

                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#f5f7f6" }}>
                        <Box className={styles.configSubHead} sx={{ backgroundColor: "#004d40!important" }}   >
                            Cost Effective
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#004d40", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#e0f2f1", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            A payment gateway is a basic module while developing an ecommerce platform. As a part of the development process, coding everything from beginning is not only time consuming, but also a costly affair.
                        </Box>
                    </Box>
                </Box>

                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#f5f7f6" }}>
                        <Box className={styles.configSubHead} sx={{ backgroundColor: "#702b4b!important" }}   >
                            Zero Coding
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#702b4b", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#fae8f0", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            ConfigPay can be appropriately configured with any SAP and Hybris ecommerce platform. Built with the latest technology, the application does not require any extra code. It eliminates all coding hassles.                            </Box>
                    </Box>
                </Box>

                <Box data-aos="flip-down" sx={{ height: '100px', display: 'flex', marginTop: "10px" }}>
                    <Box sx={{ width: "25%", height: '100%', backgroundColor: "#e0f7fa" }}>
                        <Box className={styles.configSubHead} sx={{ backgroundColor: "#00838f!important" }}   >
                            Configuration Based
                        </Box>
                    </Box>
                    <Box sx={{ width: "75%", height: '100%', backgroundColor: "#00838f", display: 'flex', alignItems: 'center' }}>
                        <Box sx={{ width: "100%", borderTopLeftRadius: '15px', height: '100%', padding: '10px', display: 'flex', alignItems: 'center', backgroundColor: "#e0f7fa", fontFamily: 'Alexandria', fontWeight: '400', color: '#434544', fontSize: '16px' }}>
                            Configpay is an easy configuration based solution. For integrating PSP/Payment gateway, read the guided manner carefully and simply add configuration. No coding is required.                    </Box>
                    </Box>
                </Box>
            </Box> */}


            {/* REMITTANCE FRAMEWORK */}


            {/* <Box data-aos="fade-down-left" className={styles.remitanceBox} style={{ height: '400px', width: '75%', marginLeft: '150px', marginTop: '250px', position: 'relative', padding: '30px', borderRadius: '10px' }}>
                <Box data-aos="zoom-out">
                    <img data-aos="zoom-out" style={{ width: '950px', position: 'absolute', right: '-360px', top: '-270px', transform: 'skew(17deg)' }} src="/solutions/Dupes/blobremi.svg" ></img>
                </Box>
                <Box sx={{ marginTop: '-50px', position: 'absolute', top: 0, right: -70, transform: 'skew(17deg)' }} >
                    <Box data-aos="fade-right">
                        <Typography sx={{ fontFamily: 'Alexandria', fontWeight: 200, fontSize: '50px', color: '#fff' }}>Remittance</Typography>
                    </Box>
                    <Box data-aos="fade-left">
                        <Typography sx={{ fontFamily: 'Alexandria', marginLeft: '20px', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: '5vw', marginTop: '-40px' }}>Framework</Typography>
                    </Box>
                </Box>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="500" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important', paddingRight: '290px' }}>
                    Remittance Framework is a multi-threaded robust platform, that exposes API’s to create/modify alerts.
                </Typography>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="500" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important', paddingRight: '300px', marginTop: '20px' }}>
                    The platform Notifx is a BNT developed application that supports real-time monitoring and notifications.
                </Typography>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="1000" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important', paddingRight: '200px', marginTop: '20px' }}>
                    How the notifications are crucial? They can be consumed to create deals and configure emails/sms content.
                </Typography>
                <Typography data-aos="fade-left" data-aos-once="false" data-aos-delay="1000" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: '20px', transform: 'skew(17deg)!important', marginTop: '20px' }}>
                    The preserved data can be used for analytics. It supports frameworks- Quote Agent, Dyna Price and Com (TP Integrator).
                </Typography>
            </Box> */}


            <Stack id="targetDivRemittanceFramework" direction={{sm:"row",xs:'column',height: {sm:'595px',xs:'auto'}}} >
                <Box sx={{ position: 'relative', width: {sm:'40%',xs:'100%'} }}>
                    <Box data-aos="zoom-out" className={styles.remitanceblob} sx={{ position: 'relative', top: '22px',left:'-100px' }}>
                        <img className={styles.remitanceblobImg}  src="/solutions/Configpay/blobRemitance.svg" ></img>
                        {/* <img style={{ width: '650px' }} src="/solutions/Dupes/dot-hori.svg" ></img> */}
                        <Box sx={{ marginTop: '-50px', position: 'absolute', top: 230, left: 220 }} >
                            <Box data-aos="fade-right">
                                <Typography sx={{ fontFamily: 'Alexandria',marginLeft:{sm:'-40px',xs:'-52px'}, fontWeight: 200, fontSize: {sm:'45px',xs:'28px'}, color: '#fff',marginTop:{sm:0,xs:'-18px'} }}>Remittance</Typography>
                            </Box>
                            <Box data-aos="fade-left">
                                <Typography sx={{ fontFamily: 'Alexandria', marginLeft:'-10px', fontWeight: 300, color: '#fff', textAlign: 'center', fontSize: {sm:'60px',xs:'34px'}, marginTop: {sm:'-40px',xs:'-18px'} }}>Framework</Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ width: {sm:'60%',xs:'100%'}, display: 'flex', alignItems: 'center', justifyContent: 'center',marginBottom:{sm:0,xs:'70px'} }}>
                    <Box sx={{ backgroundColor: '#fcfcfc', borderRadius: '10px', width: '95%', height: '80%', padding: {sm:'30px',xs:'15px'}}}>
                        <Typography data-aos="fade-left" data-aos-once="false" sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'} }}>
                            <span style={{ fontSize: '30px', color: '#1e8be1' }}>Remittance Framework </span>is a multi-threaded robust platform, that exposes API’s to create/modify alerts.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                        The platform Notifx is a BNT developed application that supports real-time monitoring and notifications.
                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                        How the notifications are crucial? They can be consumed to create deals and configure emails/sms content.

                        </Typography>
                        <Typography data-aos="fade-left" data-aos-once="false"  sx={{ fontFamily: 'Alexandria', fontWeight: '300', color: '#676767', fontSize: {sm:'18px',xs:'15px'}, marginTop: '20px' }}>
                        The preserved data can be used for analytics. It supports frameworks- Quote Agent, Dyna Price and Com (TP Integrator).

                        </Typography>
                    </Box>

                </Box>
            </Stack>
        </>
    )
}

export default Dupes