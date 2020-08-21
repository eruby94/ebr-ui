import React from 'react'
import { GetStaticProps } from 'next'
import { Entry } from 'contentful'
import { createClient } from '../client'
import BasicPage from '../components/BasicPage'
import { BasicPageTypes } from '../types/'

const client = createClient(process.env.contentfulKey)

const CookiePolicy = ({ title, content }: BasicPageTypes): JSX.Element => {
  return <BasicPage title={title} content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { fields: cookiePolicyContent }: Entry<BasicPageTypes> = await client.getEntry('1CnfTe00voZKASq8CU55KT')
  return {
    props: {
      ...cookiePolicyContent,
    },
  }
}

export default CookiePolicy
