import React from 'react'
import {Box } from '@chakra-ui/react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'



const Layout = ({children}) => {
  return (
    <>
    <Head>
        <title>98 Acre</title>

    </Head>
    <Box>
        <header>
            <Navbar/>
        </header>
        <main>
            {children}

        </main>
        <footer>
            <Footer/>
        </footer>
    </Box>

    </>
  )
}

export default Layout
