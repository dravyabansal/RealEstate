import '../styles/globals.css'
import Head from 'next/head'
import NProgress from 'nprogress'
import { ChakraProvider } from '@chakra-ui/react'


import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
function MyApp({ Component, pageProps }) {
  return (

      <Component {...pageProps} />

  )


}

export default MyApp
