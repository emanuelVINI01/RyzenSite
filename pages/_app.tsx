import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from '@chakra-ui/react'
import Head from 'next/head'
import Footer from '../src/components/Footer'
import Navbar from '../src/components/Navbar'
import SideBar from '../src/components/SideBar'
import theme from '../src/theme'
import '../global.css'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <SideBar>
        <Head>
          <meta name="description" content="RyzenHosting, a melhor hospedagem do mercado." />
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <script src="chat.js" async/>
        </Head>
        <Navbar />
        <Component {...pageProps} />
      </SideBar>
    </ChakraProvider>
  )
}

export default MyApp
