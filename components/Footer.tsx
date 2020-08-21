import React from 'react'
import Link from 'next/link'
import { colors } from '../config'

const Footer = (): JSX.Element => {
  const getCurrentYear = () => new Date().getFullYear()
  return (
    <footer>
      <p>&copy; {getCurrentYear()} Evan Ruby</p>
      <div className="link-wrapper">
        <Link href="/privacy-policy">
          <a to="/privacy-policy">Privacy Policy</a>
        </Link>
      </div>
      <div className="link-wrapper">
        <Link href="/cookie-policy">
          <a to="/cookie-policy">Cookie Policy</a>
        </Link>
      </div>
      <style jsx>{`
        footer {
          z-index: 10000;
          background-color: ${colors.beige};
          color: ${colors.red};
          width: 100%;
          display: flex;
          justify-content: center;
        }
        p {
          margin: 0;
          padding: 1rem;
          width: calc((100% / 3) - 2rem);
          font-size: 16px;
          text-align: center;
        }
        .link-wrapper {
          padding: 1rem;
          width: calc((100% / 3) - 2rem);
          text-align: center;
          font-weight: bold;
        }
        @media screen and (max-width: 768px) {
          footer {
            margin-bottom: 64px;
          }
        }
        @media screen and (max-width: 500px) {
          p,
          .link-wrapper {
            font-size: 12px;
            width: calc(100% - 1rem);
            padding: 0.5rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
