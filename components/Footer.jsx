import React from 'react'
import styles from '../styles/footer.module.css';
import { Stack, Box, Typography, List, ListItem } from '@mui/material';
import Link from 'next/link';
import { ImFacebook } from 'react-icons/im';
import { ImTwitter } from 'react-icons/im';
import { ImLinkedin } from 'react-icons/im';
import { FiInstagram } from 'react-icons/fi';



const Footer = () => {
    return (
        <>
            <Box sx={{
                minHeight: '400px',
                background: 'linear-gradient(rgba(0,0,0,0.8),rgba(0,0,0,0.8)), url(/home/images/footerImageMin.webp)',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
            }}>
                <Box sx={{ width: '100%', color: '#cccccc' }} >
                    <Stack
                        className={styles.bb}
                        direction={{ xs: 'column', sm: 'row' }}
                        sx={{ width: '100%', justifyContent: { xs: 'center', sm: 'space-evenly' } }}
                        alignItems='top'
                    >
                        <Box sx={{ maxWidth: { xs: '100%', sm: '300px' }, padding: { xs: '20px', sm: '0' }, color: '#fff' }}>
                            <Typography sx={{textAlign:'justify',marginTop:'10px'}} >
                                We at <span style={{ color: '#bbdefb', fontSize: '20px' }}>BNT- “Bits and Thoughts”</span> have been providing unique and tailored payment solutions for over a decade. We are committed to high-quality performance along with integrity & client satisfaction. Our constant growth and loyal clientele are a testament to our growth and proven market leadership.
                            </Typography>
                            <div style={{ display: 'flex', gap: '30px', marginTop: '20px' }}>
                                <Link href={'https://www.facebook.com/BNTSOFT/'}  target="_blank" ><ImFacebook /></Link>
                                <Link href={'https://twitter.com/bntsoft'}  target="_blank" ><ImTwitter /></Link>
                                <Link href={'https://in.linkedin.com/company/bnt-soft123'}  target="_blank" ><ImLinkedin /></Link>
                                <Link href={'https://www.instagram.com/bntsoft/'}  target="_blank" ><FiInstagram /></Link>
                            </div>
                            <p style={{fontSize:'12px',color:'#9b9e9c'}}>@2023 BNT SOFT</p>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-evenly' } }} >
                            <List>
                                {/* <ListItem sx={{fontSize:'20px!important',color:'#fff'}}>Services</ListItem> */}
                                <Link href={'/'}><ListItem>Home</ListItem></Link>
                                <Link href={'/aboutus'}><ListItem>About Us</ListItem></Link>
                                <Link href={'/whoweare/lifeatBNT'}><ListItem>Life at BNT</ListItem></Link>
                                <Link href={'/blogs'}><ListItem>Blogs</ListItem></Link>
                                <Link href={'/whoweare/career'}><ListItem>Careers</ListItem></Link>
                                <Link href={'/buildwithus'}><ListItem>Build with Us</ListItem></Link>
                                <Link href={'/privacypolicy'}><ListItem>Privacy Policy</ListItem></Link>
                            </List>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-evenly' } }} >
                            <List>
                                <ListItem sx={{ fontSize: '20px!important', color: '#fff' }}>Services</ListItem>
                                <Link href={'/services/payments'}><ListItem>Payments</ListItem></Link>
                                <Link href={'/services/retail'}><ListItem>Retail</ListItem></Link>
                                <Link href={'/services/fintech'}><ListItem>Fintech Startup</ListItem></Link>
                                <Link href={'/services/subservices'}><ListItem>Custom</ListItem></Link>
                                <Link href={'/services/subservices#targetDivSalesforce'}><ListItem>Salesforce</ListItem></Link>
                                <Link href={'/services/subservices#targetDivCerifications  '}><ListItem>Certifications</ListItem></Link>
                            </List>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-evenly' } }}>
                            <List>
                                <ListItem sx={{ fontSize: '20px!important', color: '#fff' }}>Solutions</ListItem>
                                <Link href={'/solutions#targetDivDupesPreventer'}><ListItem>Dupes Preventer</ListItem></Link>
                                <Link href={'/solutions#targetDivConfigPay'}><ListItem>Configpay</ListItem></Link>
                                <Link href={'/solutions#targetDivRemittanceFramework'}><ListItem>Remittance Framework</ListItem></Link>
                                {/* <ListItem sx={{fontSize:'20px!important',color:'#fff',marginTop:'10px'}}>New Technologies</ListItem>
                                <Link href={'/services/newtechnologies#targetDivBlockchain'}><ListItem>BlockChain</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAI'}><ListItem>Artificial Intelligence</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivBigData'}><ListItem>Big Data</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAPIDevelopment'}><ListItem>API Development</ListItem></Link> */}
                            </List>
                        </Box>
                        <Box sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'space-evenly' } }}>
                            <List>
                                <ListItem sx={{ fontSize: '20px!important', color: '#fff' }}>New Technologies</ListItem>
                                <Link href={'/services/newtechnologies#targetDivBlockchain'}><ListItem>BlockChain</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAI'}><ListItem>Artificial Intelligence</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivBigData'}><ListItem>Big Data</ListItem></Link>
                                <Link href={'/services/newtechnologies#targetDivAPIDevelopment'}><ListItem>API Development</ListItem></Link>
                            </List>
                        </Box>

                    </Stack>
                </Box>
            </Box>

            <style jsx>
                {`

           

          `}
            </style>
        </>
    )
}

export default Footer