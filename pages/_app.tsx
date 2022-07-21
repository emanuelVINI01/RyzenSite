import { ChakraProvider, useColorMode } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import SideBar from '../src/components/SideBar'
import AOS from "aos";
import "aos/dist/aos.css";
import '../global.css'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <ChakraProvider >
      <SideBar>
        <Head>
          <meta name="description" content="Ryzen Host, a melhor hospedagem do mercado." />
          
          <script src="chat.js" async/>
          <link rel="icon" href="/ryzen.png" />
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  )
}

export default MyApp
