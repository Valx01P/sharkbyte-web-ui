import localFont from 'next/font/local'
import Navbar from '@/app/(public_site)/components/Navbar'
import Footer from '@/app/(public_site)/components/Footer'
import { MobileMenuProvider } from '@/context/MobileMenuContext'
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
    },
  ],
  display: 'swap',
  variable: '--font-vt323',
  preload: true,
})

export const metadata = {
  title: 'SharkByte 2025 | Miami Dade College Hackathon',
  description: 'Join SharkByte, Miami Dade College\'s official hackathon! A free 3-day tech sprint November 7-9, 2025 in Miami, FL. Build innovative projects, learn new skills, and connect with fellow developers. Open to anyone 18+.',
  keywords: 'hackathon, Miami Dade College, INIT, miami dade college hackathon, mdc hackathon, SharkByte, coding, programming, Miami, Florida, event',
  authors: [{ name: 'INIT MDC North' }],
  creator: 'INIT MDC North',
  publisher: 'Miami Dade College',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://shark-byte.io',
    siteName: 'SharkByte 2025',
    title: 'SharkByte 2025 | Miami Dade College Hackathon',
    description: 'Join SharkByte, Miami Dade College\'s official hackathon! A free 3-day tech sprint November 7-9, 2025 in Miami, FL. Build innovative projects, learn new skills, and connect with fellow developers.',
    images: [
      {
        url: 'https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757501851/sharkbyte_ho46sx.png',
        width: 1200,
        height: 630,
        alt: 'SharkByte 2025 Hackathon - Miami Dade College',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SharkByte 2025 | Miami Dade College Hackathon',
    description: 'Join SharkByte, Miami Dade College\'s official hackathon! Free 3-day tech sprint November 7-9, 2025 in Miami, FL.',
    images: ['https://res.cloudinary.com/dqo1uzz0i/image/upload/v1757501126/poster_mlaa60.png'],
    creator: '@init_mdcnorth',
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/svgs/logo.svg', type: 'image/svg+xml' }
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  category: 'technology',
  other: {
    'msapplication-TileColor': '#1f2937',
    'theme-color': '#1f2937',
    'apple-mobile-web-app-title': 'SharkByte',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Event',
              name: 'SharkByte 2025',
              description: 'Miami Dade College\'s official hackathon - a free 3-day tech sprint where participants build innovative projects, meet new people, and learn new skills.',
              startDate: '2025-11-07T17:00:00-05:00',
              endDate: '2025-11-09T19:00:00-05:00',
              eventStatus: 'https://schema.org/EventScheduled',
              eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
              location: {
                '@type': 'Place',
                name: 'Miami Dade College',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Miami',
                  addressRegion: 'FL',
                  addressCountry: 'US',
                },
              },
              organizer: {
                '@type': 'Organization',
                name: 'INIT MDC North',
                url: 'https://www.linkedin.com/company/init-mdc-north/',
              },
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: 'https://airtable.com/appY1e4YbYhqNWdpE/shr5bPimkY7ck4v88',
              },
              audience: {
                '@type': 'Audience',
                audienceType: 'Students, Developers, Tech Enthusiasts',
                suggestedMinAge: 18,
              },
            })
          }}
        />
      </head>
      <body className="antialiased overflow-x-hidden">
        <MobileMenuProvider>
          <Navbar />
          {children}
          <Footer />
        </MobileMenuProvider>
      </body>
    </html>
  )
}