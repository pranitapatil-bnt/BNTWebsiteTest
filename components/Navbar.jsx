import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from "next/router";
import PropTypes from 'prop-types';
import { useEffect } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/bntnavbar.module.css';

import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';



// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import {
    AppBar, Divider, Drawer, Box, IconButton, useScrollTrigger, List, ListItem, ListItemButton,
    ListItemText, Toolbar, Typography, Button, Slide, Stack
} from '@mui/material';


const drawerWidth = 240;
const navItems = ['Home', 'Services', 'Solutions', 'Blogs','About Us', 'Career', 'Build With Us'];
const navItemsNav = ['/',  '/services', '/solutions', '/blogs','/aboutus', '/career', '/buildwithus'];

function HideOnScroll(props) {
    const { children } = props;
    const trigger = useScrollTrigger();

    HideOnScroll.propTypes = {
        children: PropTypes.element.isRequired,
    };

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

function Navbar(props) {

    const router = useRouter();
    const [pageRoute, setPageRoute] = useState('')


    useEffect(() => {

        var navElement = document.querySelector(".navScroll");
        navElement.classList.add(styles.navOnScroll);
        function changeCss() {
            // var bodyElement = document.querySelector("body");
            var navElement = document.querySelector(".navScroll");
            // if(router.asPath =='/'){
            // (  this.scrollY > 160) ? navElement.classList.add(styles.navOnScroll) :navElement.classList.remove(styles.navOnScroll)
            // }
            // console.log("Scroll Y : ", this.scrollY)
        }

        addEventListener("scroll", changeCss, false);
    }, [])


    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
        setPageRoute('')
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Link href={'/'}>
            <Box
                                variant="h6"
                                component="div"
                                sx={{textAlign: 'left', flexGrow: 1, color: 'text.primary', marginLeft: { xs: 'none', sm: '50px' }, padding: '10px', cursor: 'pointer' }}
                            >
                                {/* <p className="bntLogo" style={{fontFamily: 'Alexandria',fontWeight:'bold'}}> BNT-SOFT</p> */}

                                <img src="/home/images/BNtlogo.jpeg" alt="BnT Soft" style={{ height: "35px" }} />

                            </Box></Link>
            <Divider />
            <List sx={{}}>
                <>
                    <Link href={'/'}>
                        <ListItem key={'Home'} disablePadding>
                            <ListItemButton className={` ${router.asPath == '/' ? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Home'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    


                    <Link onClick={(e) => {e.stopPropagation(); pageRoute==='/services'? setPageRoute(''): setPageRoute('/services') }} href={''}>
                        <ListItem  sx={{...(pageRoute ==='/services' &&  {backgroundColor:'#dbdbd9'})}} key={'Services'} disablePadding>
                            <ListItemButton className={`${router.asPath.includes('/services')? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Services'} /> { pageRoute ==='/services' ? <IoIosArrowDown />: <IoIosArrowForward />}
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    {pageRoute === '/services' && <>
                        <List className={styles.mobileNavbarDropdow} sx={{backgroundColor:'#e3f2fc',padding:0}} >
                            <Link onClick={()=>{setPageRoute('')}} href={'/services/payments'}>
                                <ListItem key={'Payments'} disablePadding>
                                    <ListItemButton  sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'Payments'} /> 
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link onClick={()=>{setPageRoute('')}} href={'/services/retail'}>
                                <ListItem key={'Retail'} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'Retail'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link onClick={()=>{setPageRoute('')}} href={'/services/fintech'}>
                                <ListItem key={'Fintech'} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'Fintech'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link onClick={()=>{setPageRoute('')}} href={'/services/subservices'}>
                                <ListItem key={'Custom'} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'Custom'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link onClick={()=>{setPageRoute('')}} href={'/services/newtechnologies'}>
                                <ListItem key={'New Technologies'} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'New Technologies'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        </List>

                    </>}

                    <Link href={'/solutions'}>
                        <ListItem key={'Solutions'} disablePadding>
                            <ListItemButton className={` ${router.asPath == '/solutions' ? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Solutions'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link href={'/blogs'}>
                        <ListItem key={'Blogs'} disablePadding>
                            <ListItemButton className={` ${router.asPath == '/blogs' ? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Blogs'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                   

                    <Link href={'/aboutus'}>
                        <ListItem key={'aboutus'} disablePadding>
                            <ListItemButton className={` ${router.asPath == '/aboutus' ? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'About us'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    <Link   onClick={(e) => {e.stopPropagation(); pageRoute==='/whoweare'? setPageRoute(''): setPageRoute('/whoweare') }} href={''}>
                        <ListItem sx={{...(pageRoute ==='/whoweare' &&  {backgroundColor:'#dbdbd9'})}} key={'Who we are'} disablePadding>
                            <ListItemButton className={`${router.asPath.includes('/whoweare')? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Who we are'} /> { pageRoute ==='/whoweare' ? <IoIosArrowDown />: <IoIosArrowForward />}
                            </ListItemButton>
                        </ListItem>
                    </Link>

                    {pageRoute === '/whoweare' && <>
                        <List className={styles.mobileNavbarDropdow}  sx={{backgroundColor:'#e3f2fc',padding:0}} >
                            <Link onClick={()=>{setPageRoute('')}} href={'/whoweare/lifeatBNT'}>
                                <ListItem key={'Life at BNT'} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'Life at BNT'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                            <Link onClick={()=>{setPageRoute('')}} href={'/whoweare/career'}>
                                <ListItem key={'Careers'} disablePadding>
                                    <ListItemButton sx={{ textAlign: 'center' }}>
                                        <ListItemText primary={'Careers'} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>

                        </List>

                    </>}

                   

                    <Link href={'/buildwithus'}>
                        <ListItem key={'Build With Us'} disablePadding>
                            <ListItemButton className={` ${router.asPath == '/buildwithus' ? styles.navActive : ''}`} sx={{ textAlign: 'center' }}>
                                <ListItemText primary={'Build With Us'} />
                            </ListItemButton>
                        </ListItem>
                    </Link>
                </>

            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <Box sx={{ display: 'flex', }} >
                <HideOnScroll {...props} >
                    <AppBar elevation={0} className={'navScroll'} component="nav" sx={{ backgroundColor: 'transparent' }}>
                        <Toolbar sx={{ minHeight: '55px!important', position: "relative" }}>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2, display: { sm: 'none' }, position: 'absolute', right: 0, }}
                            >
                                <MenuIcon sx={{color:'blue'}} />
                            </IconButton>
                            <Link href={'/'}>
                            <Box
                                variant="h6"
                                component="div"
                                sx={{ flexGrow: 1, color: 'text.primary', marginLeft: { xs: 'none', sm: '50px' }, padding: 0, cursor: 'pointer' }}
                            >
                                {/* <p className="bntLogo" style={{fontFamily: 'Alexandria',fontWeight:'bold'}}> BNT-SOFT</p> */}

                                <img src="/home/images/BNtlogo.jpeg" alt="BnT Soft" style={{ height: "35px" }} />

                            </Box>
                            </Link>
                            <Box sx={{ flexGrow: 1, justifyContent: 'space-between', display: { xs: 'none', sm: 'flex' } }}>

                                <Link href='/'>
                                    <button
                                        className={`raise ${router.asPath == '/' ? styles.navActive : styles.navList}`}
                                    >
                                        Home
                                    </button>
                                </Link>
                               
                                <Link href='services'>
                                    <button
                                        className={`raise ${router.asPath == '/services' ? styles.navActive : styles.navList}`}
                                    >
                                        Services
                                    </button>
                                </Link>
                                <Link href='/solutions'>
                                    <button
                                        className={`raise ${router.asPath == '/solutions' ? styles.navActive : styles.navList}`}
                                    >
                                        Solutions
                                    </button>
                                </Link>
                                <Link href='/blogs'>
                                    <button
                                        className={`raise ${router.asPath == '/blogs' ? styles.navActive : styles.navList}`}
                                    >
                                        Blogs
                                    </button>
                                </Link>
                                <Link href='/aboutus'>
                                    <button
                                        className={`raise ${router.asPath == '/aboutus' ? styles.navActive : styles.navList}`}
                                    >
                                        About Us
                                    </button>
                                </Link>
                                <Link href='/career'>
                                    <button
                                        className={`raise ${router.asPath == '/career' ? styles.navActive : styles.navList}`}
                                    >
                                        Career
                                    </button>
                                </Link>
                                <Link href='/buildwithus'>
                                    <button
                                        className={`raise ${router.asPath == '/buildwithus' ? styles.navActive : styles.navList}`}
                                    >
                                        Build With Us
                                    </button>
                                </Link>

                            </Box>


                            <Box sx={{ flexGrow: 1, }}></Box>
                        </Toolbar>
                    </AppBar>
                </HideOnScroll>
                <Box component="nav">
                    <Drawer
                        container={container}
                        variant="temporary"
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', sm: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Box>
            </Box>

            <style jsx>
                {`
.raise:hover {
  color: blue!important;
  box-shadow: 0 0.5em 0.5em -0.4em #64b5f6;
  transform: translateY(-0.25em);
  cursor:pointer;
}
.raise {
  color: black;
  transition: 0.25s;
  border:none;
  background: none;
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 7px 5px 7px 5px;
}
.bntLogo{
    font-size: 20px;
  background: -webkit-linear-gradient( #2196f3, #380036);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

                `}
            </style>
        </>
    );
}

export default Navbar;