import React from 'react'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors } from '../config'
import NavItems from './NavItems'

const NavHeader = (): JSX.Element => {
  return (
    <header>
      <Link href="/">
        <a className="title" to="/">
          Evan Ruby
        </a>
      </Link>
      <div className="left">
        <NavItems />
        <div className="social-icons">
          <a href="https://github.com/eruby94" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" color={colors.white} />
            <span className="visible-hidden">GitHub</span>
          </a>
          <a href="https://soundcloud.com/scruby_doo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'soundcloud']} size="2x" color={colors.white} />
            <span className="visible-hidden">SoundCloud</span>
          </a>
          <a href="https://www.linkedin.com/in/evanruby/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" color={colors.white} />
            <span className="visible-hidden">LinkedIn</span>
          </a>
        </div>
      </div>
      <style jsx>{`
        header {
          position: fixed;
          top: 0;
          left: 0;
          z-index: 10000;
          background-color: ${colors.red};
          color: ${colors.white};
          width: 100%;
          display: flex;
          justify-content: space-between;
        }
        .left {
          display: flex;
        }
        .title {
          font-family: 'AldoTheApache';
          font-size: 36px;
          padding: 1rem;
        }
        .social-icons {
          display: flex;
          align-items: center;
          padding: 1rem 2rem;
        }
        .social-icons a {
          margin: 0 0.75rem;
          height: 32px;
        }
        .social-icons a:first-child {
          margin-left: 0;
        }
        .social-icons a:last-child {
          margin-right: 0;
        }
        @media screen and (device-width: 375px) and (max-device-height: 812px) {
          .title,
          .social-icons {
            padding: 2rem 1rem 1rem;
          }
        }
        @media screen and (device-width: 414px) and (max-device-height: 736px) {
          .title,
          .social-icons {
            padding: 2rem 1rem 1rem;
          }
        }
        @media screen and (max-width: 500px) and (max-device-height: 667px) {
          .title,
          .social-icons {
            padding: 1rem;
          }
        }
      `}</style>
    </header>
  )
}

export default NavHeader
