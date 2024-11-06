import Head from 'next/head';
import dynamic from 'next/dynamic'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { createTheme, colors, ThemeProvider, Stack, Box } from '@mui/material';
import { useEffect } from 'react';
const DynamicHomepage = dynamic(() => import('../components/home/Homepage'), {
  ssr: false,
})





const index = () => {

  return (
    <>
        <DynamicHomepage />
    </>
  )
}

export default index