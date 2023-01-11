import { Provider } from 'next-auth/client'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'

function MyApp({ Component, pageProps }) {
  //console.log("pageProps ",pageProps)
  return (
    <Provider session={pageProps.session}>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
