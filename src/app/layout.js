import localFont from 'next/font/local'
import Navbar from '@/app/(public_site)/components/Navbar'
import Footer from '@/app/(public_site)/components/Footer'
import './globals.css'


export const VT323 = localFont({
  src: [
    {
      path: '../../public/fonts/vt323/VT323-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/vt323/VT323-Regular.woff',
      weight: '400',
      style: 'normal',
    }
  ],
  display: 'swap',
  variable: '--font-vt323',
  preload: true,
})

export const metadata = {
  title: "SharkByte - Dive into the Future",
  description: "A cutting-edge technology company dedicated to pushing the boundaries of innovation",
  icons: {
    icon: 'images/logo.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body
        className={`antialiased overflow-x-hidden`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  )
}
