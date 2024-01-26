import React from 'react';
import Image from "next/image";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { AMENITIES } from './Body.constants'
import styles from './body.module.css';


const sectionContent = {
    fontFamily: 'Manrope',
    fontWeight: 300,
    fontSize: '16px',
    lineHeight: '24px',
    color: '#000000',
}

const sectionHeader = {
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '50px',
    letterSpacing: '1px',
    color: '#202020',
    fontFamily: 'Galgine',
    marginBottom: '10px',
}



const Header = ({ content, underline, sx = {} }) => {
    return <>
        <Box sx={{ ...sectionHeader, ...sx }} >
            {content}
        </Box>
        {underline && <hr className={styles.underline} />}
    </>
}

function Body(props) {
    return (
        <div className={styles.body}>
            <section id="overview" className={styles.section}>
                <Grid container sx={{ padding: '100px' }}>
                    <Grid item xs={12} sm={8}>
                        <Header content='Hallmark Vesta' underline />
                        <Box sx={sectionContent}>
                            <p>Cherish your home forever!</p>
                            <br />
                            <p>Hallmark presents a home imagined by us for a luxurious and better tomorrow. Presenting Hallmark Vesta a commune in the most developed zone for families to live happily ever after. The design is inspired by various quarters. The inside spaces reflect the taste of those who seek modern surroundings. Right from the entrance arch, the pathways will lead you to your home, with every corner charming you.</p>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={2} />
                    <Grid item xs={12} sm={2}>
                        <Header content='2&3 BHK' sx={{ fontSize: '25px', lineHeight: '42px' }} />
                        <p>Modern Apartments</p>
                        <br />
                        <Image width='25' height='25' src="/map.png" alt='Map' />
                        <p>Patighanpur</p>
                        <br />
                        <Header content='RERA No:' sx={{ fontSize: '25px', lineHeight: '42px' }} />
                        <p>P01100002121</p>
                    </Grid>
                </Grid>
            </section>

            <section id="overview-1" className={styles.section}>
                <Grid container>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                        <Header content='3' sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <p>Acres</p>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                        <Header content='222' sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <p>No. Of Units</p>
                    </Grid>
                    <Grid item xs={12} sm={4} sx={{ textAlign: 'center' }}>
                        <Header content='2&3 BHK' sx={{ fontSize: '70px', lineHeight: '70px' }} />
                        <p>Unit Type</p>
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
                        <p>Hallmark Vesta has monumental lifestyle amenities you can make the most of and enhance your health and well-being and refresh or relax. Take a splash in the swimming pool or introspect about life in the meditation zone.</p>
                    </Grid>
                </Grid>
                <Grid container sx={{ marginBottom: '20px !important' }}>
                    <Grid item xs={12} sm={6} sx={{ padding: '15px !important', display: 'flex', alignContent: 'center', flexFlow: 'column', justifyContent: 'center' }}>
                        <Header content='Get charmed at every step' sx={{ fontSize: '40px', lineHeight: '52px', marginBottom: '20px' }} />
                        <p>Designed with an eye for contemporary architecture and keeping in mind how the future is likely to evolve, the architects who have masterminded the design of Hallmark Vesta have put thought and intellect into ensuring that you are besotted by it no end.</p>
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
                        <p>Who do we buy a home for? Isn’t it for our future, for those whose innocence and laughter we yearn for every dawn and every dusk, for those whom we await to come back to every day? For your children, we have the best places so that they wait for you to return home after a busy day.</p>
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
                                    return <Grid item xs={2} sm={3} key={label} sx={{ display: 'flex', alignItems: 'center', marginBottom: '40px !important', flexFlow: 'column' }}>
                                        <Image width={45} height={45} src={imgSrc} alt={imgSrc} />
                                        <p>{label}</p>
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
                <Box sx={{ width: { md: '60%'}, marginBottom: '15px'}}>
                    <p>The purpose of the multi-level clubhouse is to provide the satisfaction of belonging to a place as lovely as you have always imagined your surroundings wanted to be. Hallmark Vesta fulfills its purpose and creates a perfect living experience.</p>
                </Box>
                <div>
                    <img width='100%' height='100%' src='/clubhouse.png'></img>
                </div>
            </section>
        </div>
    );
}

export default Body;