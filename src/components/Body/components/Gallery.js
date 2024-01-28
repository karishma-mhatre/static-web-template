"use client"
import React from 'react';
import Carousel from 'react-material-ui-carousel'

import Box from '@mui/material/Box';

import SectionHeader from './SectionHeader';

import bodyStyles from '../body.module.css';

var items = [...Array(17)]

function Gallery(props) {
    return (
        <section id="gallery" className={bodyStyles.section}>
            <SectionHeader content='Gallery' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
            <Box>
                <Carousel navButtonsAlwaysVisible>
                    {
                        items.map((_, i) => {
                            const n = `/vesta-G${i + 1}.png`;
                            return (
                                <Box key={i}>
                                    <div>
                                        <img width='100%' height='100%' src={n} alt={n}></img>
                                    </div>
                                </Box>)
                        })
                    }
                </Carousel>
            </Box>
        </section>
    );
}

export default Gallery;