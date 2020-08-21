import React from 'react'
import BasicPage from '../components/BasicPage'
import { createClient } from '../client'
import { BasicPageTypes } from '../types'
import { GetStaticProps } from 'next'
import { Entry } from 'contentful'

const client = createClient(process.env.contentfulKey)

const PrivacyPolicy = ({ title, content }: BasicPageTypes): JSX.Element => {
  return <BasicPage title={title} content={content} />
}

export const getStaticProps: GetStaticProps = async () => {
  const { fields: privacyPolicyContent }: Entry<BasicPageTypes> = await client.getEntry('3GiW9JVJBwsfSkzGU7MnRZ')
  return {
    props: {
      ...privacyPolicyContent,
    },
  }
}

export default PrivacyPolicy
