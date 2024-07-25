import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Carisurau | Cari surau berdekatan anda dengan mudah',
  description: 'Carisurau - Cari surau berdekatan anda dengan mudah. Cari waktu solat, kemudahan, dan arah ke surau.',
  keywords: 'carisurau, cari, surau, cari surau, surau ioi, masjid, surau near me, masjid near me, surau finder, next.js, prayer times, mosque finder, surau locator, Islamic prayer app',
  authors: [{
    name: 'farhanhelmy',
  }],
  openGraph: {
    url: 'https://carisurau.com',
    type: 'website',
    title: 'Carisurau | Cari surau berdekatan anda dengan mudah',
    description: 'Carisurau - Cari surau berdekatan anda dengan mudah. Cari waktu solat, kemudahan, dan arah ke surau.',
    images: [{
        alt: 'Carisurau',
        url: 'https://carisurau.com/carisuraunewbanner.png',
    }],
    siteName: 'Carisurau',  
  },
  twitter: {
    card: 'summary_large_image',
    site: '@farhanhelmycode',
    title: 'Carisurau | Cari surau berdekatan anda dengan mudah',
    description: 'Carisurau - Cari surau berdekatan anda dengan mudah. Cari waktu solat, kemudahan, dan arah ke surau.',
    images: 'https://carisurau.com/carisuraunewbanner.png',
  }
}

export default function RootLayout({
    // Layouts must accept a children prop.
    // This will be populated with nested layouts or pages
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="en">
        <body>{children}</body>
      </html>
    )
  }