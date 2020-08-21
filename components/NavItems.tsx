import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { colors, navItems } from '../config'

const NavItems = (): JSX.Element => {
  const [currentUrl, setCurrentUrl] = useState('')
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: string): void => {
      setCurrentUrl(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    setCurrentUrl(window.location.pathname)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [])
  return (
    <nav>
      <ul className="nav-items">
        {navItems.map((item) => (
          <li key={item.displayText}>
            <Link href={item.href}>
              <a
                className={`nav-item${item.href === currentUrl || item.href + '/' === currentUrl ? ' active' : ''}`}
                to={item.href}
              >
                {item.displayText}
              </a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>{`
        .nav-items {
          margin: 0;
          padding: 0;
          list-style-type: none;
          display: flex;
        }
        @media screen and (max-width: 768px) {
          nav {
            background: ${colors.red};
            position: fixed;
            width: 100vw;
            bottom: 0;
            left: 0;
            z-index: 10000;
          }
          .nav-items {
            width: 100%;
            justify-content: space-between;
          }
          li {
            width: 50%;
          }
        }
      `}</style>
      <style jsx global>{`
        a.nav-item {
          display: flex;
          padding: 1rem;
          height: calc(64px - 2rem);
          align-items: center;
          background: ${colors.red};
          transition: 0.3s;
        }
        a.nav-item:hover {
          background: ${colors.gray};
        }
        a.nav-item.active {
          background: ${colors.black};
        }
        @media screen and (max-width: 768px) {
          a.nav-item {
            width: calc(100% - 2rem);
            justify-content: center;
          }
        }
      `}</style>
    </nav>
  )
}

export default NavItems
