import React from 'react';
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
function Header(props) {
    return (
        <AppBar position='sticky' sx={headerContainer}>
            <Toolbar disableGutters sx = {{ width: { md: '80%', xs: '100%' } }}>
                <Image
                    src="/vercel.svg"
                    alt="Vercel Logo"
                    className={styles.vercelLogo}
                    width={100}
                    height={24}
                    priority
                />
                <Box sx={{ flexGrow: 1, display: 'flex', justifyContent: 'space-around'  }}>
                    {pages.map(({ label, id }) => (
                        <Link
                            key={id}
                            sx={{ my: 2, display: "block", color: 'black' }}
                            href={`#${id}`}
                        >
                            <Button  sx={{ my: 2, display: "block", color: 'black' }}>{label}</Button>
                        </Link>
                    ))}
                </Box>
            </Toolbar >
        </AppBar >
    );
}

export default Header;