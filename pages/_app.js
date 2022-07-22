import { useRouter } from 'next/router'
import {useEffect} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { wrapper, store } from "../store/store";
import { useDispatch,useSelector } from "react-redux";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import {ToastContainer} from 'react-toastify'
import axios from 'axios'
import theme from '../src/theme';
import 'react-toastify/dist/ReactToastify.css'
import '../src/style.css'
import {loadUser} from '../store/authSlice'
// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();


// axios.defaults.baseURL = process.env.NODE_ENV === 'production' ? 'http://api.gobeze.com' : 'http://localhost:8000/';

 const MyApp = (props)=> {
  const router = useRouter()
  const dispatch = useDispatch();

  console.log('got')
  useEffect(() => {
    dispatch(loadUser() )
      }, [])
     
      

  
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (<>
    <CacheProvider value={emotionCache}>
      {/* <Provider store={store}> */}
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
      {/* </Provider> */}
    </CacheProvider>
  <ToastContainer />
  </>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};

export default wrapper.withRedux(MyApp)