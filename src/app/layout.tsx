import NavHeader from '@/components/NavHeader'
import { Metadata } from 'next'
import './global.css'

export const metadata: Metadata = {
  title: 'Evan Ruby | Full Stack Web Developer',
  description: 'A creatively-oriented technologist based in Detroit.',
}

//   const analyticsScript = () => `
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());
//   gtag('config', 'UA-63289747-4');
// `

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
        <link href="https://www.google-analytics.com" rel="preconnect" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#944654" />
        <meta name="msapplication-TileColor" content="#944654" />
        <meta name="theme-color" content="#944654" />
        <meta key="og-title" property="og:title" content="Evan Ruby | Full Stack Web Developer" />
        <meta key="og-type" property="og:type" content="website" />
        <meta key="og-image" property="og:image" content="https://evanruby.io/images/nevada-falls-selfie.jpg" />
        <meta key="og-url" property="og:url" content="https://evanruby.io" />
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63289747-4" /> */}
        {/* <script dangerouslySetInnerHTML={{ __html: analyticsScript() }} /> */}
      </head>
      <body>
        <NavHeader />
        {children}
      </body>
    </html>
  )
}
