import React from 'react'
import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { colors, skillGroups, metaTags } from '../config'

const DeveloperSkills = (): JSX.Element => {
  return (
    <div className="page-root">
      <Head>{metaTags.skills}</Head>
      <h1 className="hidden">Developer Skills</h1>
      <div className="block-container">
        {skillGroups.map((group) => (
          <div className="block-group" key={group.groupName}>
            <h3>{group.groupName}</h3>
            {group.skills.map((item) => (
              <div className="block" key={item.name}>
                <FontAwesomeIcon
                  icon={[item.prefixClass ? item.prefixClass : 'fab', item.iconClass]}
                  size="5x"
                  color={item.brandColor}
                  className="skill"
                />
                <p className="skill-name">{item.name}</p>
                <div className="star-container">
                  {item.stars.map((_star: string, index: number) => (
                    <FontAwesomeIcon key={index} icon={['fas', 'star']} size="2x" color={colors.blue2} />
                  ))}
                  {item.addHalf ? <FontAwesomeIcon icon={['fas', 'star-half']} size="2x" color={colors.blue2} /> : null}
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <style jsx>{`
        .block-container {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          justify-content: space-between;
        }
        .block-group {
          width: calc(45% - 4rem);
          padding: 1rem 2rem;
        }
        .block {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin: 1rem 0;
          height: 80px;
        }
        .skill-name {
          width: 193px;
          margin: 1rem;
        }
        .star-container {
          display: flex;
          width: 180px;
          height: 32px;
        }
        @media screen and (max-width: 1440px) {
          .block-group {
            width: calc(50% - 4rem);
          }
          .block {
            height: 90px;
          }
        }
        @media screen and (max-width: 1350px) {
          .block-group {
            padding: 1rem 0;
            width: 45%;
          }
        }
        @media screen and (max-width: 1024px) {
          .block-container {
            flex-direction: column;
            align-items: center;
            width: calc(100% - 8rem);
            padding: 0 4rem;
          }
          .block-group {
            width: 100%;
          }
          .block {
            height: auto;
            margin: 2rem 0;
          }
          .block:first-of-type {
            margin-top: 4rem;
          }
        }
        @media screen and (max-width: 768px) {
          .block-container {
            padding: 1rem 0 0;
            width: 100%;
          }
          .block-group {
            width: 100%;
            flex: auto;
          }
          .block {
            margin: 1rem 0;
          }
          .block:first-of-type {
            margin-top: 1.5rem;
          }
          .skill-name {
            width: 130px;
            margin: 0.5rem 0 1rem;
          }
          .star-container {
            width: 90px;
            margin-right: 1rem;
          }
        }
      `}</style>
      <style jsx global>{`
        .skill {
          width: 100px;
          display: flex;
          justify-content: center;
        }
        @media screen and (max-width: 1440px) {
          .fa-5x {
            font-size: 60px;
          }
          .fa-2x {
            font-size: 24px;
          }
        }
        @media screen and (max-width: 1024px) {
          .fa-5x {
            font-size: 60px;
          }
          .fa-2x {
            font-size: 24px;
          }
        }
        @media screen and (max-width: 768px) {
          .skill {
            width: 190px;
          }
          .fa-5x {
            font-size: 80px;
          }
          .fa-2x {
            font-size: 32px;
          }
        }
        @media screen and (max-width: 500px) {
          .skill {
            width: 75px;
          }
          .fa-5x {
            font-size: 40px;
          }
          .fa-2x {
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  )
}

export default DeveloperSkills
