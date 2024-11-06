import React, {useState, useEffect} from 'react'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import styles from '../../styles/services/payments.module.css'



const StyledBox = styled(Box)({
    height: '180px',
    // border: '1px solid black',
    display: 'flex',
    justifyContent: 'start',
    paddingLeft: '80px',
    marginTop: '70px',
    marginBottom: '30px'
})


const headings = [
    'Merchant on Boarding',
    'Transaction Switches, Routing',
    'Business Analytics & Reporting',
    'Payment Gateway'
]

// const desc = [
//     'We at BNT offer the most advanced technology base merchant onboarding solutions, providing quick and easy, customizable and exceptional branding experience. We also take care of KYC under writings and provide efficient mechanisms with the setup facility.',
//     'BNT’s exceptional technology-driven team with the latest payment industry know-how is a perfect pick for building all your switch and routing platforms. We design, develop and support standard and innovative transaction requirements keeping with the new electronic market.',
//     'As data is key essential to any business growth, we offer exception skills and utilize best technology practices providing analytics and reporting for enhancing your business growth.',
//     'We develop strong and sound payment gateways, authorizing credit cards or direct payment processing for all types of businesses. Our secure payment gateways enable businesses to provide digital payment processes globally without any glitch.'
// ]
const desc = [
    'Our merchant onboarding process is designed for efficiency and ease. We start by understanding your business needs and guiding you through the required documentation, including KYC to meet regulatory and compliance standards. Our automated tools simplify identity verification and risk assessment, ensuring swift account setup.',
    'Our payment switch enhances transaction success rates by dynamically routing payments between acquirers and providers. It encrypts sensitive data before transmission, integrates multiple payment methods, and connects directly with major card schemes. Our switch supports real-time payment processing and provides essential services such as reconciliation, fraud management, and chargeback handling to ensure secure transactions.',
    'We help you get insights into your payment data through our business analytics and reporting solutions. It helps understand customer trends, identify areas for optimization, and make data-driven decisions to improve your payment processing strategy.',
    'We specialize in developing custom payment gateways tailored to your business requirements. Our gateway supports several payment methods and card schemes, offering robust security features.'
]

const ProcessorSolutions = () => {
    
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return null;

    return (
        <>
            {/* <Box sx={{ height: { sm: '700px', xs: 'auto' }, border: { sm: '1px solid #dde3ee', xs: 'none' }, borderRight: '0px', borderLeft: 'none', display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, marginBottom: '40px' }}>
                <Box className={styles.ProcessorBG} sx={{ width: { sm: '40%', xs: '100%' }, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: { sm: 0, xs: '30px 20px' } }}>
                    <Typography sx={{ fontFamily: 'Arial', paddingLeft: '25px', fontWeight: 500, fontSize: '18px', color: 'white', maxWidth: '400px', borderLeft: '5px solid yellow', marginBottom: '240px' }}>
                        <Typography sx={{ fontFamily: 'Helvetica', fontSize: '40px', fontWeight: 600, color: '#fff' }}>PROCESSOR <br /> Solutions</Typography>
                        Digital payments are convenient and preferred, yet, they demand safety and security in terms of transactions. We at BNT build secure and tech-advanced processor solutions for e-commerce, in-stores or retail, along with, both offline and online solutions for your business goals.
                    </Typography>
                </Box>
                <Box  sx={{ width: { sm: '60%', xs: '100%' }, backgroundColor: '#FFFFF', display: 'flex', flexDirection: { sm: 'row', xs: 'column' }, }}>
                    <Box className={styles.main}>
                        <ul className={styles.list}>
                            {headings.map((heading, i) => (
                                <li key={i} className={`${styles.listItem} ${i === 0 ? styles.firstItem : ''} ${i === headings.length - 1 ? styles.lastItem : ''}`}>
                                    <Box className={`${styles.bullet} ${styles.bulletBig}`}>
                                        <img src="/services/images/payments/bullet-icon-big.svg" alt="Bullet Icon" />
                                    </Box>
                                    <Box>
                                        <Typography  sx={{ fontFamily: 'Helvetica', fontWeight: 600, color: '#292b2c', fontSize: '22px', paddingLeft: '25px' }}>{heading}</Typography>
                                        <Typography style={{ fontFamily: 'Helvetica', color: '#000', fontWeight: 500, fontSize: '16px', lineHeight: '22px', paddingLeft: '25px', marginTop: '15px' }}>{desc[i]}</Typography>
                                    </Box>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            </Box>     */}
            <Box
                sx={{
                    height: { sm: '700px', xs: 'auto' },
                    border: { sm: '1px solid #dde3ee', xs: 'none' },
                    borderRight: '0px',
                    borderLeft: 'none',
                    display: 'flex',
                    flexDirection: { sm: 'row', xs: 'column' },
                    marginBottom: '40px',
                }}
            >
                <Box
                    className={styles.ProcessorBG}
                    sx={{
                        width: { sm: '40%', xs: '100%' },
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        padding: { sm: 0, xs: '30px 20px' },
                    }}
                >
                    <Typography
                        sx={{
                            fontFamily: 'Arial',
                            paddingLeft: '25px',
                            fontWeight: 500,
                            fontSize: { sm: '18px', xs: '16px' },
                            color: 'white',
                            maxWidth: '400px',
                            borderLeft: '5px solid yellow',
                            marginBottom: { sm: '240px', xs: '20px' },
                        }}
                    >
                        <Typography
                            sx={{
                                fontFamily: 'Helvetica',
                                fontSize: { sm: '40px', xs: '28px' },
                                fontWeight: 600,
                                color: '#fff',
                            }}
                        >
                            PROCESSOR <br /> Solutions
                        </Typography>
                        We understand the complexities of payment processing. Our processor solutions including merchant onboarding, transaction switches and routing, business analytics and reporting, and payment gateways - help you optimize your processing infrastructure for efficiency, security, and valuable insights into your payment data.
                    </Typography>
                </Box>

                <Box
                    sx={{
                        width: { sm: '60%', xs: '100%' },
                        backgroundColor: '#FFFFFF',
                        display: 'flex',
                        flexDirection: { sm: 'row', xs: 'column' },
                    }}
                >
                    <Box className={styles.main}>
                        <ul className={styles.list}>
                            {headings.map((heading, i) => (
                                <li
                                    key={i}
                                    className={`${styles.listItem} ${i === 0 ? styles.firstItem : ''} ${i === headings.length - 1 ? styles.lastItem : ''
                                        }`}
                                >
                                    <Box className={`${styles.bullet} ${styles.bulletBig}`}>
                                        <img
                                            src="/services/images/payments/bullet-icon-big.svg"
                                            alt="Bullet Icon"
                                        />
                                    </Box>
                                    <Box>
                                        <Typography
                                            sx={{
                                                fontFamily: 'Helvetica',
                                                fontWeight: 600,
                                                color: '#292b2c',
                                                fontSize: { sm: '22px', xs: '18px' },
                                                paddingLeft: '25px',
                                            }}
                                        >
                                            {heading}
                                        </Typography>
                                        <Typography
                                            style={{
                                                fontFamily: 'Helvetica',
                                                color: '#000',
                                                fontWeight: 500,
                                                fontSize: { sm: '14px', xs: '13px' },
                                                lineHeight: '22px',
                                                paddingLeft: '25px',
                                                marginTop: '5px',
                                            }}
                                        >
                                            {desc[i]}
                                        </Typography>
                                    </Box>
                                </li>
                            ))}
                        </ul>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

export default ProcessorSolutions