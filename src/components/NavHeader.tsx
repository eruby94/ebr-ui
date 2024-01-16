'use client'

import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

const NavHeader = (): JSX.Element => {
  return (
    <header className="bg-red text-white">
      <Link className="title text-5xl" href="/">
        Evan Ruby
      </Link>
      <div className="left">
        <div className="social-icons">
          <a
            className="flex items-center justify-center mr-8"
            href="https://github.com/eruby94"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon className="text-white w-[40px] h-auto" icon={icon({ name: 'github', style: 'brands' })} />
            <span className="visible-hidden">GitHub</span>
          </a>
          {/* <a
            className="flex items-center justify-center mx-8"
            href="https://soundcloud.com/flowmosapien"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-white w-[50px] h-auto"
              icon={icon({ name: 'soundcloud', style: 'brands' })}
            />
            <span className="visible-hidden">SoundCloud</span>
          </a> */}
          <a
            className="flex items-center justify-center"
            href="https://www.linkedin.com/in/evanruby/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className="text-white w-[40px] h-auto"
              icon={icon({ name: 'linkedin', style: 'brands' })}
            />
            <span className="visible-hidden">LinkedIn</span>
          </a>
        </div>
      </div>
    </header>
  )
}

export default NavHeader
