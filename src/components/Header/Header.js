"use client"
import React, { useEffect, useState } from 'react';
import Image from "next/image";

import styles from './header.module.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from 'next/link'

const pages = [
    {
        label: 'Overview',
        id: 'overview'
    },
    {
        label: 'Highlights',
        id: 'highlights'
    },
    {
        label: 'Club House',
        id: 'clubhouse'
    },
    {
        label: 'Gallery',
        id: 'gallery'
    },
    {
        label: 'Location',
        id: 'location'
    }
]

const headerContainer = {
    backgroundColor: "white",
    display: 'flex',
    alignItems: 'center',
    height: '85px',
    justifyContent: 'center',
    top: 0,
    position: 'fixed',

}

const IconButton = ({ src, label }) => {
    return <Button variant="outlined"
        sx={{ borderRadius: 0, color: 'black', border: 'none', alignItems: 'center', margin: '0 !important' }}
        startIcon={<Image src={src}
            alt="whatsapp"
            width={16}
            height={16}
            style={{ marginRight: '10px' }}
            priority />}>{label}</Button>
}
function Header(props) {
    const [headerBackground, setHeaderBackground] = useState('transparent');

    useEffect(() => {
        function changeCss () {
            if (window) {
                if (window.scrollY > 0) {
                    setHeaderBackground('white');
                } else {
                    setHeaderBackground('transparent');
                }
            }
          }
          window.addEventListener("scroll", changeCss , false);

          return () => {
            if (window && window.removeEventListener) {
                window.removeEventListener('scroll', changeCss);
            }
            
          }
    })

    return (
        <AppBar position='sticky' sx={{ ...headerContainer, backgroundColor: `${headerBackground} !important` }}>
            <Toolbar disableGutters sx={{ width: { md: '80%', xs: '100%' } }}>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.logo}
                    width={100}
                    height={24}
                    priority
                />
                <Box sx={{ flexGrow: 1,  display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-around', alignItems: 'center' }}>
                    {pages.map(({ label, id }) => (
                        <Link
                            key={id}
                            sx={{ my: 2, display: "block", color: 'black' }}
                            href={`#${id}`}
                        >
                            <Button sx={{ my: 2, color: 'black', textTransform: 'none' }}>{label}</Button>
                        </Link>
                    ))}
                    <IconButton src="/download.png" label='E-Brochure' />
                    <IconButton src="/whatsup.png" label='Whatsapp' />
                    <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: 0, alignItems: 'center', padding: { xs: '8px'}, marginRight: { xs: '4px !important'} }}>Get In Touch</Button>
                </Box>
            </Toolbar >
        </AppBar >
    );
}

export default Header;