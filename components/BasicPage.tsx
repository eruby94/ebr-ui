import React from 'react'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { colors } from '../config'
import { BasicPageTypes } from '../types'

const BasicPage = ({ title, content }: BasicPageTypes): JSX.Element => (
  <div className="page-root">
    <h1>{title}</h1>
    <div className="rich-text" dangerouslySetInnerHTML={{ __html: documentToHtmlString(content) }} />
    <style jsx>{`
      h1 {
        padding-top: 1rem;
        margin-bottom: 2rem;
      }
    `}</style>
    <style jsx global>{`
      .rich-text h2 {
        margin: 3rem auto 0;
      }
      .rich-text a {
        color: ${colors.blue1};
        font-weight: bold;
      }
    `}</style>
  </div>
)

export default BasicPage
