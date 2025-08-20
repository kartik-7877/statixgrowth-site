import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Montserrat } from 'next/font/google'

// Import Montserrat via next/font
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={montserrat.className}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp





