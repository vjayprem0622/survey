import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const SubSection = () => {

    return (

        <Box style={{
            backgroundColor: '#e7f1f6',
            paddingLeft: 100,
            paddingTop: 100
        }}>

            <Typography variant="h2" fontWeight={600} style={{
                fontSize: '1rem',
                color: "#074465",

            }}>
                HOW IT WORKS
            </Typography>

            <Typography variant="h2" fontWeight={600} style={{
                fontSize: '2rem',
                color: "#074465",

            }}>
                Conducting a survey with ease in three simple steps.
            </Typography>






            <Box style={{
                width: '100%',
                display: 'flex',
                minHeight: '500px',
                marginTop: 50
            }}>

                <Grid container spacing={5} style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" fontWeight={600} style={{
                            paddingBottom: '15px',
                            fontSize: '8rem',
                            color: "#074465"
                        }}>
                            01
                        </Typography>

                        <Typography variant="h4" fontWeight={700} style={{
                            paddingBottom: '15px',
                        }}>
                            Login into the Application
                        </Typography>

                        <Typography
                            fontWeight={500}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                paddingBottom: '30px',
                            }}>
                            Easily log into the application using the credentials provided by the department, ensuring secure access to your authorized account. The Application user-friendly interface simplifies the login process for your convenience. Once logged in, you can explore the applications features and resources, making it a seamless experience.
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center" style={{

                    }}>
                        <img src={'/images/steps/step1.jpg'} alt="My Team" style={{
                            height: 500,
                        }} />
                    </Grid>


                </Grid>
            </Box>



            <Box style={{
                width: '100%',
                display: 'flex',
                minHeight: '500px',
                marginTop: 50
            }}>

                <Grid container spacing={5} style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>
                    <Grid item xs={12} md={6} container justifyContent="center" style={{

                    }}>
                        <img src={'/images/steps/step1.jpg'} alt="My Team" style={{
                            height: 500,
                        }} />
                    </Grid>


                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" fontWeight={600} style={{
                            paddingBottom: '15px',
                            fontSize: '8rem',
                            color: "#074465"
                        }}>
                            02
                        </Typography>

                        <Typography variant="h4" fontWeight={700} style={{
                            paddingBottom: '15px',
                        }}>
                            Conducting Survey
                        </Typography>

                        <Typography
                            fontWeight={500}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                paddingBottom: '30px',
                                paddingRight: 60,

                            }}>
                            The survey application offers multiple convenient options for conducting data collection. The surveyor can choose to proceed via Ration Card Number, streamlining the process if the citizen has one, or opt for a hassle-free survey without it. Additionally,the applciation allows you to easily add new members to the existing families/family, ensuring that the household data is always up-to-date and accurate. With these flexible survey options, the application aims to provide a seamless and efficient experience while ensuring that the information contributes to the maintenance of essential records.
                        </Typography>

                    </Grid>




                </Grid>
            </Box>




            <Box style={{
                width: '100%',
                display: 'flex',
                minHeight: '500px',
                marginTop: 50
            }}>

                <Grid container spacing={5} style={{
                    display: 'flex',
                    alignItems: 'center',
                }}>

                    <Grid item xs={12} md={6}>
                        <Typography variant="h2" fontWeight={600} style={{
                            paddingBottom: '15px',
                            fontSize: '8rem',
                            color: "#074465"
                        }}>
                            03
                        </Typography>

                        <Typography variant="h4" fontWeight={700} style={{
                            paddingBottom: '15px',
                        }}>
                            Data to be Captured
                        </Typography>

                        <Typography
                            fontWeight={500}
                            style={{
                                fontSize: '1.2rem',
                                lineHeight: 1.8,
                                paddingBottom: '30px',
                            }}>
                            During the survey, it is essential to capture a range of key data elements to ensure comprehensive and accurate information.
                            These include gathering family details, gender, date of birth, and entering family relations to establish connections within households.
                            Additionally, educational qualifications and occupation data are collected to understand the demographic and socioeconomic landscape.
                            Verification of Aadhaar, property details, mobile numbers, and email addresses adds an extra layer of precision to the data.
                            Lastly, capturing consent is an integral part of the survey process to ensure compliance and transparency.
                            These mandatory parameters collectively contribute to a thorough and reliable survey outcome.
                        </Typography>

                    </Grid>

                    <Grid item xs={12} md={6} container justifyContent="center" style={{

                    }}>
                        <img src={'/images/steps/step1.jpg'} alt="My Team" style={{
                            height: 500,
                        }} />
                    </Grid>


                </Grid>
            </Box>






        </Box>
    );
};

export default SubSection;