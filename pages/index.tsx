import React from 'react'
import Head from 'next/head'
import { facts, metaTags } from '../config'

const Homepage = (): JSX.Element => {
  return (
    <div className="page-root">
      <Head>{metaTags.home}</Head>
      <h1 className="hidden">About Evan</h1>
      <div className="container">
        <img src="/images/nevada-falls-selfie.jpg" alt="selfie of Evan" />
        <div className="about">
          {facts.map((fact, index) => (
            <p className="fact" key={index}>
              {fact}
            </p>
          ))}
        </div>
      </div>
      <style jsx>{`
        .page-root {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .container {
          width: 100%;
          max-width: 1500px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        img {
          margin-top: 1rem;
          margin-bottom: 3rem;
          width: calc(100% / 3);
          align-self: center;
          border-radius: 100%;
        }
        .about {
          width: 60%;
        }
        @media screen and (max-width: 1024px) {
          .container {
            flex-direction: column;
          }
          img {
            margin-bottom: 5rem;
          }
          .about {
            width: 75%;
          }
        }
        @media screen and (max-width: 768px) {
          .about {
            width: 100%;
          }
        }
        @media screen and (max-width: 500px) {
          img {
            width: calc(200% / 3);
            margin: 4rem auto 2rem;
          }
        }
      `}</style>
    </div>
  )
}

export default Homepage
