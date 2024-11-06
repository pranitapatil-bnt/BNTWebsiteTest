import React, { useEffect, useState } from 'react'
import styles from '../../styles/services/payments.module.css'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import "react-multi-carousel/lib/styles.css";
import Image from 'next/image';



// const StyledBox = styled(Box)({
//     height: '180px',
//     // border: '1px solid black',
//     // flex : 1,
//     display: 'flex',
//     justifyContent: 'end',
// })

const mobilePaymentDetails = [
    {
        logo: '/services/images/payments/wallets.png',
        title: 'Mobile Wallet',
        desc: 'Utilizing cutting-edge technology and extensive expertise, our mobile wallet solutions provide a secure, user-friendly financial experience for customers. Our team ensures seamless integration and solid security that enhance digital payment offerings.'
    },
    {
        logo: '/services/images/payments/bank.png',
        title: 'Mobile Banking',
        desc: 'Our mobile banking solutions enable financial institutions to offer comprehensive banking services through user-friendly mobile apps. Through easy navigation and credible security, we ensure higher customer engagement and satisfaction.'
    },
    {
        logo: '/services/images/payments/mobilepaymentt.png',
        title: 'Mobile Payment Systems',
        desc: 'Utilizing our broad fintech service expertise and in-depth product knowledge, we integrate existing payment solutions with Apple Pay, Google Pay, and Samsung Pay. Our solutions ensure secure, seamless, and efficient payment experiences, setting your services apart.'
    },
    {
        logo: '/services/images/payments/ecommerce.png',
        title: 'Mobile E-commerce',
        desc: 'With a strong foundation in fintech technology and extensive experience, our mobile e-commerce solutions offer secure, intuitive, and efficient transaction processes. We help businesses deliver exceptional online shopping experiences.'
    },
    {
        logo: '/services/images/payments/qrcode.png',
        title: 'QR Code',
        desc: 'Harnessing advanced technology and deep expertise, our QR code solutions provide fast, secure, and convenient payment options. Our team ensures efficient processing and increases user convenience, offering a superior financial experience.'
    }
]

const MobilePayments = ({ }) => {

    return (
        <>
            <Box sx={{ flexGrow: 1, padding: '2rem', backgroundColor: '#ffffff' }}>
                <Box>
                    <Box>
                        <Typography
                            className={styles.walletHeadmobile}
                            sx={{
                                fontFamily: 'Alexandria',
                                fontWeight: 300,
                                color: '#141e45',
                                textAlign: 'center',
                                fontSize: { sm: '4vw', xs: '30px' },
                                marginTop: { sm: '0px', xs: '-10px' },
                                marginBottom: { sm: '15px', xs: '10px' }
                            }}
                        >
                            Mobile Payments
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={3} justifyContent="center">
                    {mobilePaymentDetails.map((item, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box
                                sx={{
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    height: '100%',
                                    border: '1px solid #e0e0e0',
                                    borderRadius: '10px',
                                    padding: '20px',
                                    backgroundColor: '#fff',
                                    textAlign: 'center',
                                    boxShadow: '0 30px 30px rgba(0, 0, 0, 0.1)',
                                    overflow: 'hidden',
                                    position: 'relative',
                                    transition: 'color 0.5s',
                                    '&:hover': {
                                        color: '#fff',
                                    },
                                    '&:hover::before': {
                                        width: '100%',
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        height: '100%',
                                        width: '0%',
                                        background: 'linear-gradient(90deg, rgba(82,223,160,1) 0%, rgba(98,219,233,1) 0%, rgba(63,94,251,1) 0%, rgba(9,28,96,1) 45%);',
                                        transition: 'width 1s ease',
                                        zIndex: 0,
                                    },
                                    '& h6, & p': {
                                        position: 'relative',
                                        zIndex: 1,
                                        color: '#141e45',
                                        transition: 'color 0.5s',
                                    },
                                    '&:hover h6, &:hover p': {
                                        color: '#fff',
                                    },
                                    '& img': {
                                        transition: 'filter 0.5s',
                                        zIndex: 1,
                                    },
                                    '&:hover img': {
                                        filter: 'brightness(0) invert(1)',
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '100px',
                                        height: '100px',
                                        borderRadius: '50%',
                                        border: `3px solid ${item.iconColor || '#052d7a'}`,
                                        margin: '0 auto 20px',
                                        backgroundColor: '#fff',
                                    }}
                                >
                                    <Image
                                        src={item.logo}
                                        alt={item.title}
                                        width={70}
                                        height={70}
                                        style={{ marginBottom: '20px' }}
                                    /></Box>
                                <Typography
                                    variant="h6"
                                    gutterBottom
                                    sx={{
                                        fontFamily: 'Montserrat',
                                        fontWeight: '800',
                                        fontSize: '22px',
                                        marginBottom: '10px',
                                    }}
                                >
                                    {item.title}
                                </Typography>
                                <Typography
                                    variant="body2"
                                    color="textSecondary"
                                    sx={{
                                        fontFamily: 'Alexandria',
                                        fontSize: '14px',
                                        lineHeight: '1.6',
                                    }}
                                >
                                    {item.desc}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    )
}

export default MobilePayments