"use client"
import React, { useEffect, useState } from 'react';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import Image from 'next/image'

import Paper from '@mui/material/Paper';
import axios from '../network/api';
import Logo from '../assets/BackgroundLogin'

import AppLogo from '../assets/svg/himachal_logoo.svg'
import { signIn } from 'next-auth/react';

import { useRouter } from 'next/router';


// import { useDispatch, useSelector } from 'react-redux';
import { onLogin } from '../network/actions/login';
import { useDispatch, useSelector } from 'react-redux';

import { saveToken } from '../utils/cookie';
// import handler from './api/hello';


import login from "../pages/api/signIn"



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      < Link color="inherit" href="www.google.com" >
        Website or Organization Name
      </Link>{''}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn(props) {


  const dispatch = useDispatch();
  const data = useSelector((state) => state.login);

  const router = useRouter();

  useEffect(() => {

    const { data: user_data } = data || {};

    const { token } = user_data || {};

    // console.log(JSON.stringify(user_data.data), "asdhiqwuoldkjjfeiqud")


    if (user_data.data) {
      saveToken(JSON.stringify(user_data.data))
      router.push('/dashboard')
    }

  }, [data])





  const handlePost = () => {

    const param1 = 'value1';
    const param2 = 'value2';

    // router.push('/dashboard')
    // fetch(`/api/auth/signIn/`)
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data, "asjkdmaskdnkjndakd")


    //     // Handle the API response here
    //   })
    //   .catch((error) => {
    //     console.log(error, "asjkdmaskdnkjndakd")
    //     // Handle errors
    //   });

    console.log("asldaskmdalkdalfeiow")
    dispatch(onLogin("Khaliyar", 1234))

  };


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={defaultTheme} >

      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '100vh', }
        }
      >
        <Paper elevation={10} style={{ padding: 10 }}>
          <Container component="main" maxWidth="xs" >
            <CssBaseline />
            < Box
              sx={{
                marginTop: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              < Logo />
              < Image
                src={AppLogo}
                width={150}
                height={100}
                alt="Logo"
              />
              <Typography component="h1" variant="h5" >
                Sign in
              </Typography>
              < Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Remember me"
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  style={{ backgroundColor: 'blue' }}

                  onClick={() => {
                    handlePost()
                  }}

                >
                  Sign In
                </Button>
                {/* <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid> */}
              </Box>
            </Box>
            < Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>

        </Paper>

      </Grid>

    </ThemeProvider>
  );
}