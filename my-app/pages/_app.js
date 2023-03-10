import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from '../Component/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
    <ChakraProvider>
      <Navbar />
       <Component {...pageProps} />
     </ChakraProvider>
    </>
  )
}
