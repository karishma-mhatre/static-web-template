import React from 'react';

import Grid from '@mui/material/Grid';

import SectionHeader from './SectionHeader';
import bodyStyles from '../body.module.css';

const BANKS = ['/PNB.png', '/HDFC.png', '/SBI.png', '/ICICI Bank.png', '/Axis.png', '/BOB.png', '/LIC HFL.png']
function Banks(props) {
    return (
        <section id="banks" className={bodyStyles.section}>
            <SectionHeader content='Affiliated banks' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
            <Grid container columns={{ xs: 4, md: 12 }}>
                {
                    BANKS.map((bank) => {
                        return <Grid item xs={1} md={2} key={bank} sx={{ display: 'flex', alignItems: 'flex-start', marginTop: '80px !important', flexFlow: 'column', fontFamily: 'Manrope' }}>
                            <div>
                                <img width='100%' height='100%' src={bank} alt={bank}></img>
                            </div>
                        </Grid>
                    })
                }
            </Grid>
        </section>
    );
}

export default Banks;