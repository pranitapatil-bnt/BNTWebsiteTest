import React from 'react';
import styles from '../styles/contactusbanner.module.css'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import Link from 'next/link';
const ContactusBanner = () => {
  return (
    <Box className={styles.banner}>
      <Typography className={styles.heading}>Looking to develop custom payment solutions? Let us know</Typography>
      <Link href={'/buildwithus'}>
        <Box className={styles.button}>Contact Us</Box>
      </Link>
    </Box>
  );
};

export default ContactusBanner;