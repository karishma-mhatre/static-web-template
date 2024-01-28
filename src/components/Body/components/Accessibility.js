import React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import SectionHeader from './SectionHeader';
import bodyStyles from '../body.module.css';


const item = {
    fontFamily: 'open sans,sans-serif',
    fontSize: '15px',
    display: 'flex',
    fontWeight: '200',
    marginBottom: {
        xs: '0 !important',
        sm: '15px !important'
    },
    justifyContent: 'space-between',
    width: '100%',
    padding: '5px',
    fontWeight: 200,
}

const itemContainer = {
    width: '100%',
    padding: {
        xs: 0,
        sm: '0 15px !important',
    },
    borderBottom: {
        xs: '1px solid #e2e2e2',
        sm: 0
    },
    borderRight: {
        xs: 0,
        sm: '1px solid #e2e2e2',
    },
    marginBottom: {
        xs: '15px !important',
        sm: '0 !important'
    }
}

function Accessibility(props) {
    return (
        <section id="accessibility" className={bodyStyles.section}>
            <SectionHeader content='Ease of Accessibility' underline sx={{ fontSize: '25px', lineHeight: '42px' }} />
            <Grid container columns={{ xs: 1, sm: 3 }}>
                {
                    NEAR_BYS.map(({ place, time }) => {
                        return <Grid item xs={1} md={4} key={place} sx={{ display: 'flex', alignItems: 'flex-start', flexFlow: 'column', fontFamily: 'Manrope' }}>
                            <Box sx={itemContainer}>
                                <Box sx={item}>
                                    <div>{place}</div>
                                    <div>{time}</div>
                                </Box>
                            </Box>
                        </Grid>
                    })
                }
            </Grid>
        </section>
    );
}


const NEAR_BYS = [
    {
        place: 'ORR Kolluru Exit No.2',
        time: '03 Mins'
    },
    {
        place: 'ORR Patancheru Exit No.3',
        time: '03 Mins'
    },
    {
        place: 'Hyd-Mumbai Highway',
        time: '05 Mins'
    },
    {
        place: 'Gaudium & Samashti Schools',
        time: '07 Mins'
    },
    {
        place: 'BHEL',
        time: '20 Mins'
    },
    {
        place: 'Lingampally',
        time: '25 Mins'
    },
    {
        place: 'Financial Dist',
        time: '30 Mins'
    },
    {
        place: 'Amazon Office	',
        time: '30 Mins'
    },
    {
        place: 'Continental Hospital',
        time: '30 Mins'
    },
    {
        place: 'Care Hospital (Gachibowli)',
        time: '30 Mins'
    },
    {
        place: 'Kims (Kondapur)	',
        time: '03 Mins'
    },
    {
        place: 'Hitech City	',
        time: '35 Mins'
    },
    {
        place: 'Gachibowli',
        time: '36 Mins'
    },
    {
        place: 'Rajiv Gandhi Int Airport',
        time: '40 Mins'
    },
    {
        place: 'Google Office',
        time: '30 Mins'
    },
]

export default Accessibility;