import React, { useEffect } from 'react'
import { Box, Stack, styled, Typography, Grid } from '@mui/material'
import styles from '../../styles/services/payments.module.css'
import Image from 'next/image';
const StyledBox = styled(Box)({
 height: '180px',
  // border: '1px solid black',
  display: 'flex',
  justifyContent: 'start',
  paddingRight: '40px',
  position: 'absolute',
  top: 360,
  left: 200
})

const features = [
  {
    id: 1,
    title: 'Crypto',
    description: 'We specialize in creating secure and compliant crypto wallet solutions. We help businesses with robust platforms for trading, storing, and managing digital assets with the highest security standards while delivering optimized user experiences.',
    imgSrc: '/services/images/payments/cryptocurrency.png',
  },
  {
    id: 2,
    title: 'Cross border payments',
    description: 'Our cross-border payment solutions enable businesses to expand their global reach. We help you overcome the challenges of international transactions through efficient, secure, and cost-effective cross-border payment processing.',
    imgSrc: '/services/images/payments/crossborder.png',
  },
  {
    id: 3,
    title: 'Popular  payments',
    description: 'You can now accept a wide range of popular payment methods as we integrate solutions smoothly with leading payment gateways, assuring safe and convenient transactions for your customers.',
    imgSrc: '/services/images/payments/popularpayment.png',
  },
  {
    id: 4,
    title: 'Currency exchange',
    description: 'Our comprehensive currency exchange solutions help businesses and individuals manage foreign exchange needs by providing real-time rates, secure transactions, and compliance with global regulations.',
    imgSrc: '/services/images/payments/curencyexchange.png',
  },
];

const Ewallets = () => {
  return (
    <>
      <Box >
        <Box className={styles.pset}>

          <header className={styles.headerDesign}>
            <Box className={styles.listarMapButton}>
              <Box className={styles.listarMapButtonText}>
                <Typography className={styles.walletHeadmobile} sx={{ fontFamily: 'Alexandria', fontWeight: 300, color: '#141e45', textAlign: 'center', fontSize: { sm: '6vw', xs: '45px' }, marginTop: { sm: '0px', xs: '-20px' }, }}>Wallets</Typography>
              </Box>
            </Box>

          </header>
          <Box className={styles.containerwallet}>

            <Box className={styles.row}>
              {features.map((feature) => (
                <Box key={feature.id} className={styles.featureItemWrapper}>
                  <Box className={styles.featureItem}>
                    <Box className={styles.featureItemInner}>
                      <Box className={styles.featureRightBorder}></Box>
                      <Box className={styles.featureBlockContentWrapper}>
                        <Box className={styles.featureIconWrapper}>
                          <Box className={styles.featureIconInner}>
                            <Image
                              alt={feature.title}
                              className={styles.imageIcon}
                              src={feature.imgSrc}
                              width={120}
                              height={120}
                            />
                          </Box>
                        </Box>
                        <Box className={styles.featureContentWrapper}>
                          <Box className={styles.featureItemTitle}>
                            <span>
                              {feature.title}</span>
                          </Box>
                          <Box className={styles.featureItemExcerpt}>
                            {feature.description}
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                  <Box className={styles.featureFixBottomPadding}></Box>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default Ewallets