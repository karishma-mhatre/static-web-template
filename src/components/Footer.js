import React from 'react';
import Image from "next/image";
import Link from 'next/link';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Para from './Body/components/Para';
import SectionHeader from './Body/components/SectionHeader';

const copyrightFooter = { 
    display: 'flex',
    flexFlow: { xs: 'column', md: 'row' },
    padding: '20px 0',
    margin: { xs: '0 20px !important', md: '0 80px !important'},
    borderTop: '1px solid grey',
    justifyContent: 'space-between'
}

function Footer(props) {
    return (
        <Box sx={{ backgroundColor: '#F8F8F8', padding: '50px 0' }}>
            <Grid container columnSpacing={{ md: 10 }} sx={{ padding: { xs: '20px' } }}>
                <Grid item xs={12} md={6} >
                    <Image
                        src="/vercel.svg"
                        alt="Vercel Logo"
                        width={100}
                        height={24}
                        priority
                    />
                    <br />
                    <Para>Hallmark Builders has lauched Hallmark Vesta in Pati Near Kollur, Hyderabad, one of the best locations with greenery and several lakes around. The project is near to Financial District & Patancheru</Para>
                    <br />
                    <Para>RERA No: P01100002121</Para>
                </Grid>

                <Grid item xs={12} md={6} >
                    <SectionHeader content='Address' sx={{ fontSize: '25px', lineHeight: '42px' }} />
                    <br />
                    <br />
                    <Para>Survey No 515 & 516, Patighanpur Village road, Sangareddy, Patighanpur, Telangana 502300</Para>
                    <br />
                    <Para>+91-9905099999, +91-8297887887</Para>
                    <br />
                    <Para>info@hallmarkbuilders.in</Para>
                </Grid>
            </Grid>
            <Box sx={copyrightFooter}>
                <Para>© 2023 Hallmark Builders | All Rights Reserved | Designed with Love by Grarri</Para>
                <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px'}}>
                    <Link href={'https://instagram.com'} >
                        <Image width='16' height='16' src="/instagram.png" alt='Map' style={{ marginRight: '10px'}} />
                    </Link>
                    <Link href={'https://youtube.com'} >
                        <Image width='16' height='16' src="/youtube.png" alt='Map' style={{ marginRight: '10px'}}/>
                    </Link>
                    <Link href={'https://facebook.com'} >
                        <Image width='16' height='16' src="/facebook.png" alt='Map'style={{ marginRight: '10px'}} />
                    </Link>
                </Box>
            </Box>
        </Box >
    );
}

export default Footer;