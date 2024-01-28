import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import SectionHeader from './SectionHeader';
import Para from './Para';

import bodyStyles from '../body.module.css';

function OtherProjects(props) {
    return (
        <section id="otherProjects" className={bodyStyles.section}>
            <SectionHeader content='Other Projects' underline sx={{ fontSize: '70px', lineHeight: '70px' }} />
            <Grid container columnSpacing={{ xs: 0, sm: 4 }} rowSpacing={{ xs: 4, sm: 0 }}>
                <Grid item xs={12} sm={6} sx={{}}>
                    <Paper elevation={5}>
                        <Card >
                            <CardMedia
                                sx={{ height: 350 }}
                                src="./5A-communities.png"
                                image="./5A-communities.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <SectionHeader content='Hallmark 5A' underline sx={{ fontSize: '25px', lineHeight: '42px' }} />
                                <Para>G +2 Ultra Modern Villas</Para>
                                <Para>Kollur, Patancheruvu</Para>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Paper elevation={5}>
                        <Card >
                            <CardMedia
                                sx={{ height: 350 }}
                                src="./skyrena-communities.png"
                                image="./skyrena-communities.png"
                                title="green iguana"
                            />
                            <CardContent>
                                <SectionHeader content='Hallmark Skyrena' underline sx={{ fontSize: '25px', lineHeight: '42px' }} />
                                <Para>G + 12 Ultra Modern Villas</Para>
                                <Para>Kollur, Patancheruvu</Para>
                            </CardContent>
                        </Card>
                    </Paper>
                </Grid>
            </Grid>
        </section >
    );
}

export default OtherProjects;