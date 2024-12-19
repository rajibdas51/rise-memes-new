import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import Navbar from './components/shared/navbar/navbar';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './components/shared/footer';
import AnimationProvider from './components/provider/animation-provider';
import Script from 'next/script';
import { Toaster } from 'react-hot-toast';

export const metadata: Metadata = {
  metadataBase: new URL('http://51.20.109.37/'),
  title: {
    default: 'The Rise Of Memes',
    template: '%s | The Rise Of Memes',
  },
  description: 'Build your empire in the world of crypto memes.',
  keywords: [
    'The Rise Of Memes',
    'multiplayer game',
    'online game',
    'meme game',
    'competitive gaming',
    'strategy game',
    'the rise of memes',
    'p2e game',
    'strategy game',
    'p2e rpg',
    'memecoin game',
    'crypto game',
  ],
  openGraph: {
    title: 'The Rise Of Memes',
    description: 'A fun multiplayer game blending strategy and memes!',
    url: 'http://51.20.109.37/',
    siteName: 'The Rise Of Memes',
    images: [
      {
        url: 'assets/logo.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Rise Of Memes',
    description: 'A fun multiplayer game blending strategy and memes!',
    images: ['assets/logo.png'],
  },
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
  alternates: {
    canonical: 'http://51.20.109.37/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang='en'>
      <head>
        <link
          rel='apple-touch-icon'
          sizes='180x180'
          href='/apple-touch-icon.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/favicon-32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/favicon-16x16.png'
        />
        <link rel='manifest' href='/site.webmanifest'></link>
        <link rel='manifest' href='/manifest.json' />
        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <meta name='msapplication-TileColor' content='#ffffff' />
        <meta name='msapplication-TileImage' content='/ms-icon-144x144.png' />
        <meta name='theme-color' content='#ffffff' />

        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, maximum-scale=1'
        />
        <meta httpEquiv='x-ua-compatible' content='ie=edge' />
        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-2G2RQQC6MB'
        ></Script>
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-2G2RQQC6MB'
          strategy='afterInteractive'
        />
        <Script id='google-analytics' strategy='afterInteractive'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2G2RQQC6MB');
          `}
        </Script>
      </head>
      <body className={clsx('font-cinzel antialiased')}>
        <AnimationProvider>
          <Navbar />
          <Toaster position='bottom-center' />
          {children}
          <Footer />
        </AnimationProvider>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'VideoGame',
              name: 'The Rise Of Memes',
              url: 'http://51.20.109.37/',
              description:
                'A fun multiplayer game blending strategy and memes!',
              genre: 'Multiplayer Meme Strategy Game',
              applicationCategory: 'Game',
              operatingSystem: 'Web Browser',
              offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
