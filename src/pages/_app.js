
import { Provider } from 'react-redux';
import '../styles/globals.css'
// import "tailwindcss/tailwind.css";
import store from '../store';

import { SessionProvider } from "next-auth/react"


import { StepsProvider } from "../components/stepper/Context";
import React, { useEffect } from 'react';

import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';


export default function App({ Component, pageProps: { session, ...pageProps } }) {

  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
        'sans-serif',
      ].join(','),
    },
  });

  useEffect(() => {

    // const getAllMaster = async () => {

    //   const callAPi = await fetch('/api/hello');

    //   const res = await callAPi.json();

    //   console.log(res);





    // }



    // getAllMaster();
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Provider store={store}>
          <StepsProvider>
            <Component {...pageProps} />
          </StepsProvider>
        </Provider>
      </LocalizationProvider>
    </ThemeProvider>

  )
}
