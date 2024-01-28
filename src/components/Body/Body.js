import React, { Children } from 'react';
import Image from "next/image";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AMENITIES } from './Body.constants'
import styles from './body.module.css';

import { Button } from '@mui/material';

import Header from './components/SectionHeader';
import Para from './components/Para';
import Banks from './components/Banks';
import Accessibility from './components/Accessibility';
import Gallery from './components/Gallery';
import OtherProjects from './components/OtherProjects';
import Footer from '../Footer';

const sectionContent = {
    fontFamily: 'Manrope',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#000000',
}

const body = {
    marginLeft: 'auto !important',
    marginRight: 'auto !important',
    width: {
        xs: '95%',
        md: '80%'
    }
}

function Body(props) {
    return (
        <Box sx={body}>
            <section id="overview" className={styles.section}>
                <Grid container >
                    <Grid item xs={12} sm={8}>
                        <Header content='Hallmark Vesta' underline />
                        <Box sx={sectionContent}>
                            <Para>Cherish your home forever!</Para>
                            <br />
                            <Para>Hallmark presents a home imagined by us for a luxurious and better tomorrow. Presenting Hallmark Vesta a commune in the most developed zone for families to live happily ever after. The design is inspired by various quarters. The inside spaces reflect the taste of those who seek modern surroundings. Right from the entrance arch, the pathways will lead you to your home, with every corner charming you.</Para>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2} />
                    <Grid item xs={12} sm={2}>
                        <Header content='2&3 BHK' sx={{ fontSize: '25px', lineHeight: '42px' }} />
                        <Para>Modern Apartments</Para>
                        <br />
                        <Image width='25' height='25' src="/map.png" alt='Map' />
                        <Para>Patighanpur</Para>
                        <br />
                        <Header content='RERA No:' sx={{ fontSize: '25px', lineHeight: '42px' }} />
                        <Para>P01100002121</Para>
                    </Grid>
                </Grid>
            </section>

            <section id="overview-1" className={styles.section}>
                <Grid container>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                        <Header content='3' sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Para>Acres</Para>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                        <Header content='222' sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Para>No. Of Units</Para>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                        <Header content='2&3 BHK' sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Para>Unit Type</Para>
                    </Grid>
                </Grid>
            </section>


            <section id="highlights" className={styles.section}>
                <Grid container sx={{ marginBottom: '20px !important' }}>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <img width='100%' height='100%' src='/vesta-Project1.png'></img>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '15px !important', display: 'flex', alignContent: 'center', flexFlow: 'column', justifyContent: 'center', marginBottom: '20px' }}>
                        <Header content='Come live happily ever after' sx={{ fontSize: '40px', lineHeight: '52px', marginBottom: '20px' }} />
                        <Para>Hallmark Vesta has monumental lifestyle amenities you can make the most of and enhance your health and well-being and refresh or relax. Take a splash in the swimming pool or introspect about life in the meditation zone.</Para>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginBottom: '20px !important' }}>
                    <Grid item xs={12} sm={6} sx={{ padding: '15px !important', display: 'flex', alignContent: 'center', flexFlow: 'column', justifyContent: 'center' }}>
                        <Header content='Get charmed at every step' sx={{ fontSize: '40px', lineHeight: '52px', marginBottom: '20px' }} />
                        <Para>Designed with an eye for contemporary architecture and keeping in mind how the future is likely to evolve, the architects who have masterminded the design of Hallmark Vesta have put thought and intellect into ensuring that you are besotted by it no end.</Para>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <img width='100%' height='100%' src='/vesta-Project2.png'></img>
                        </div>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginBottom: '20px !important' }}>
                    <Grid item xs={12} sm={6}>
                        <div>
                            <img width='100%' height='100%' src='/vesta-Project3.png'></img>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} sx={{ padding: '15px !important', display: 'flex', alignContent: 'center', flexFlow: 'column', justifyContent: 'center' }}>
                        <Header content='Play areas quite like your love' sx={{ fontSize: '40px', lineHeight: '52px', marginBottom: '20px' }} />
                        <Para>Who do we buy a home for? Isn’t it for our future, for those whose innocence and laughter we yearn for every dawn and every dusk, for those whom we await to come back to every day? For your children, we have the best places so that they wait for you to return home after a busy day.</Para>
                    </Grid>
                </Grid>
            </section>

            <section id="amenities" className={styles.section}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Header content='Amenities' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Grid container columns={{ xs: 4, md: 12 }}>
                            {
                                AMENITIES.map(({ label, imgSrc }) => {
                                    return <Grid item xs={2} sm={3} key={label} sx={{ display: 'flex', alignItems: 'flex-start', marginTop: '80px !important', flexFlow: 'column', fontFamily: 'Manrope' }}>
                                        <Image width={50} height={50} src={imgSrc} alt={imgSrc} className={styles.amenitiesImg} />
                                        <Para >{label}</Para>
                                    </Grid>
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <img width='100%' height='100%' src='/Vesta-Amenities.png'></img>
                        </div>
                    </Grid>
                </Grid>
            </section>

            <section id="clubhouse" className={styles.section}>
                <Header content='Clubhouse' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
                <Box sx={{ width: { md: '60%' }, marginBottom: '15px' }}>
                    <Para>The purpose of the multi-level clubhouse is to provide the satisfaction of belonging to a place as lovely as you have always imagined your surroundings wanted to be. Hallmark Vesta fulfills its purpose and creates a perfect living experience.</Para>
                    <br />
                </Box>
                <div>
                    <img width='100%' height='100%' src='/clubhouse.png'></img>
                </div>
            </section>


            <section id="specifications" className={styles.section}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Header content='Specifications' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Box sx={{ width: { md: '60%' }, marginBottom: '15px' }}>
                            <Para>A unique collection of construction milestones includes Hallmark Vesta, which is positioned to be a groundbreaking, high-end engineering undertaking.</Para>
                            <br />
                            <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: 0, marginBottom: '20px !important' }}>Download Specifications</Button>
                            <br />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <img width='100%' height='100%' src='/Specifications-min.png'></img>
                        </div>
                    </Grid>
                </Grid>
            </section>

            <section id="floor-plans" className={styles.section}>
                <Grid container>
                    <Grid item xs={12} md={8}>
                        <Header content='Floor Plans' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Box sx={{ width: { md: '60%' }, marginBottom: '15px' }}>
                            <Para>The Hallmark Vesta combines concepts and integration, the future and fabulousness, and architecture and awesomeness. The residential wings have a contemporary style and a lot of open space.</Para>
                            <br />
                            <Button variant="contained" sx={{ backgroundColor: 'black', borderRadius: 0, marginBottom: '20px !important' }}>Download Floor Plans</Button>
                            <br />
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <div>
                            <img width='100%' height='100%' src='/Floorplans.png'></img>
                        </div>
                    </Grid>
                </Grid>
            </section>

            <Gallery />

            <section id="location" className={styles.section}>
                <Grid container>
                    <Grid item xs={12} lg={8}>
                        <Header content='Location' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <Box sx={{ width: { md: '60%' }, marginBottom: '15px' }}>
                            <Para>Hallmark Floresta has been designed to be in one of the most serene yet now-growing locales of twin-cities. This residential has been planned in the region of Pati, which is at a short distance, off Kollur. Adding to your pleasure, you will be at appropriate distances from the Financial District and ITIR. Besides, the essentials of life like the best of schools, colleges, entertainment, conveniences like supermarkets and workplaces sectors will be near to you.</Para>
                            <br />
                            <br />
                            <br />
                        </Box>
                    </Grid>
                    <Grid item xs={12} lg={4}>
                        <div>
                            <img width='100%' height='100%' src='/Location-Vesta.png'></img>
                        </div>
                    </Grid>
                </Grid>
            </section>

            <Accessibility />

            <Banks />

            <OtherProjects />
        </Box>
    );
}

export default Body;