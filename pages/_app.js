import '../styles/roots.css';
import '../styles/globals.css';
import '../styles/styles.css';
import '../styles/blogs/blogdetails.css';
import '../styles/privacypolicy.css';

import Navbar from '../components/Navbar'
import Navbar2 from '../components/Navbar2'
import Footer from '../components/Footer'

import Head from 'next/head';
import dynamic from 'next/dynamic'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { createTheme, colors, ThemeProvider, Stack, Box, useMediaQuery } from '@mui/material';
import { useEffect } from 'react';

const theme = createTheme({
  palette: {
    secondary: {
      main: colors.orange[500]
    }
  }
});

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    Aos.init({duration: 1300});

  })

  const isMobile = useMediaQuery((themes) => theme.breakpoints.down('sm'));


  return <>
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="description" content="Bnt payment servicesservices" />
        <meta name="title" property="og:title" content="BNT Soft - Payment Services demodemodemodemo testingonetwo" />
        <meta name="description" property="og:description" content="BNT Soft payment services for your financial and IT needs demodemodemodemo testing onetwothreefour." />
        <meta name="image" property="og:image" content="https://bnt-soft.com/home/images/BNtlogo.jpeg" />
        <meta property="og:type" content="website" />
        <meta property="og:https://bnt-soft.com/" content="BNT Soft" />
        <meta name="keywords" content="payments, fintek, Itservices,forex exchange" />
        <meta name="author" content="Pranita Patil" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>BNT soft</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link rel="icon" href="/home/images/faviconBNT.ico" type="image/x-icon"></link>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&family=Noto+Sans+Lao+Looped:wght@500&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Alexandria:wght@100;200;300;400;500;600;700;800;900&family=Montserrat:wght@500&family=Noto+Sans+Lao+Looped:wght@500&display=swap" rel="stylesheet" />
        <link href='https://fonts.googleapis.com/css?family=Raleway:200,400,800' rel='stylesheet' type='text/css'></link>
        <link href='https://www.marcoguglie.it/Codepen/AnimatedHeaderBg/demo-1/css/demo.css' rel='stylesheet' type='text/css'></link>
        <script defer type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
        <script defer nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-GFP0VXV0Z4"></script> 
        <script>   
          {`
          window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments)}   
           gtag('js', new Date());   
           gtag('config', 'G-GFP0VXV0Z4');
           `} 
        </script>
      </Head>


    {isMobile && <Navbar />}  
      {!isMobile && <>
        <Navbar2 />
      <div style={{height:'55px'}}></div>
      </>}
      <Component {...pageProps} />
      <Footer />

    </ThemeProvider>
  </>

}

export default MyApp
