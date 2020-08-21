import React from 'react'
import Head from 'next/head'
import { positionsHeld, metaTags } from '../config'
import { getDateString } from '../util'

const WorkExperience = (): JSX.Element => {
  return (
    <div className="page-root">
      <Head>{metaTags.experience}</Head>
      <h1 className="hidden">Positions Held</h1>
      <div className="block-container column">
        {positionsHeld.map((position, index) => (
          <div className="block-group" key={position.company.name}>
            <div className="block start">
              <div className="company">
                <img className="logo" src={`/images/${position.company.logo}`} alt={position.company.name} />
                <h3>{position.company.name}</h3>
              </div>
              <div className="titles">
                {position.titles.map((title, index2) => (
                  <div className="title" key={`${title.name}-${index2}`}>
                    <div className="type">
                      <p className="title-name">{title.name}</p>
                      <p>
                        {getDateString(title.fromDate)} - {title.toDate ? getDateString(title.toDate) : 'Present'}
                      </p>
                    </div>
                    <ul className="accomplishments">
                      {title.accomplishments.map((accomplishment, index3) => (
                        <li key={index3}>{accomplishment}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
            {index < positionsHeld.length - 1 ? <hr /> : null}
          </div>
        ))}
      </div>
      <style jsx>{`
        .block-container {
          display: flex;
          width: 100%;
          flex-wrap: wrap;
          flex-direction: column;
        }
        .block-group {
          padding: 1rem 2rem 0;
          width: calc(100% - 4rem);
          flex: 1;
        }
        .block {
          display: flex;
          align-items: flex-start;
          margin: 1rem 0;
        }
        .company {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          width: 275px;
          align-self: stretch;
        }
        .company .logo {
          width: 100px;
          margin-bottom: 1rem;
        }
        .titles {
          width: calc(100% - 250px - 4rem);
          padding: 0 2rem;
        }
        .title {
          margin-bottom: 3rem;
        }
        .title:last-child {
          margin-bottom: 0;
        }
        .title-name {
          font-weight: 600;
        }
        .type {
          display: flex;
          justify-content: space-between;
        }
        .type p {
          margin: 0;
        }
        .accomplishments li {
          margin: 1.5rem 0;
        }
        .accomplishments li:first-child {
          margin-top: -0.5rem;
        }
        @media screen and (max-width: 1150px) {
          .block-group {
            padding: 1rem 0 0;
            width: 100%;
          }
          .block {
            flex-direction: column;
            align-items: center;
          }
          .company {
            width: 100%;
          }
        }
        @media screen and (max-width: 958px) {
          .titles {
            padding: 0;
            width: 100%;
          }
          .type {
            flex-wrap: wrap;
            margin-bottom: 2rem;
          }
          .accomplishments {
            padding-left: 1rem;
          }
        }
      `}</style>
    </div>
  )
}

export default WorkExperience
