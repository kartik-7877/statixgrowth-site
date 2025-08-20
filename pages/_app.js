import '../styles/globals.css'
import Navbar from '../components/Navbar'
import { Montserrat, Playfair_Display } from 'next/font/google'

// Montserrat → for body (sans)
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400','500','600','700'],
  display: 'swap',
  variable: '--font-sans',
})

// Playfair Display → for headings (serif, elegant)
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600','700','800'],
  display: 'swap',
  variable: '--font-display',
})

function MyApp({ Component, pageProps }) {
  return (
    <main className={`${montserrat.variable} ${playfair.variable} font-sans`}>
      <Navbar />
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp






