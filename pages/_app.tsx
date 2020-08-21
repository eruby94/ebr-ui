import React from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faGithub,
  faSoundcloud,
  faLinkedin,
  faReact,
  faAngular,
  faVuejs,
  faNodeJs,
  faPython,
  faPhp,
  faAmazon,
  faWordpress,
  faDocker,
} from '@fortawesome/free-brands-svg-icons'
import { faQuestionCircle, faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons'
import { faStopwatch, faHandPaper } from '@fortawesome/pro-regular-svg-icons'
import NavHeader from '../components/NavHeader'
import Footer from '../components/Footer'

library.add(
  faGithub,
  faSoundcloud,
  faLinkedin,
  faReact,
  faAngular,
  faVuejs,
  faNodeJs,
  faPython,
  faPhp,
  faAmazon,
  faWordpress,
  faDocker,
  faStopwatch,
  faQuestionCircle,
  faStar,
  faStarHalf,
  faHandPaper,
)

const analyticsScript = () => `
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'UA-63289747-4');
`

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Head>
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&display=swap" rel="stylesheet" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#944654" />
        <meta name="msapplication-TileColor" content="#944654" />
        <meta name="theme-color" content="#944654" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-63289747-4" />
        <script dangerouslySetInnerHTML={{ __html: analyticsScript() }} />
      </Head>
      <NavHeader />
      <Component {...pageProps} />
      <Footer />
      <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Open Sans', sans-serif;
        }
        @font-face {
          src: url('/fonts/AldotheApache.ttf');
          font-family: 'AldoTheApache';
        }
        .page-root {
          margin-top: 5rem;
          padding: 0 6rem 3rem;
          min-height: calc(100vh - 4rem - 120px);
        }
        h1,
        h2 {
          font-family: 'AldoTheApache', sans-serif;
        }
        h1 {
          font-size: 60px;
        }
        h1.hidden {
          height: 0;
          overflow: hidden;
          margin: 0 auto 1.25rem;
        }
        h2 {
          font-size: 48px;
          margin: 0 auto 2rem;
        }
        h3 {
          margin: 0 auto 2rem;
          font-size: 28px;
          text-transform: uppercase;
        }
        p {
          line-height: 1.5;
          font-size: 22px;
        }
        ul,
        li {
          line-height: 1.5;
        }
        a {
          color: inherit;
          transition: 0.2s;
          text-decoration: none;
        }
        a.nav-item {
          text-transform: uppercase;
          font-weight: 700;
        }
        a:not(.nav-item):hover {
          opacity: 0.7;
        }
        .fa-2x {
          height: 32px;
        }
        .fa-5x {
          height: 80px;
        }
        @media screen and (max-width: 1024px) {
          .page-root {
            padding: 0 3rem 3rem;
          }
        }
        @media screen and (max-width: 768px) {
          h1.hidden {
            margin: 0;
          }
        }
        @media screen and (device-width: 375px) and (max-device-height: 812px) {
          .page-root {
            margin-top: 4rem;
            min-height: calc(100vh - 7rem);
          }
        }
        @media screen and (device-width: 375px) and (max-device-height: 667px) {
          .page-root {
            margin-top: 3rem;
            min-height: calc(100vh - 6rem);
          }
        }
        @media screen and (max-width: 500px) {
          .page-root {
            padding: 0 1rem 4rem;
          }
          h1 {
            font-size: 36px;
          }
          h3 {
            font-size: 24px;
          }
          p {
            font-size: 18px;
          }
        }
      `}</style>
    </>
  )
}

export default MyApp
