import * as contentful from 'contentful'

export const createClient = (key: string): contentful.ContentfulClientApi =>
  contentful.createClient({
    space: '0f1v20279e53',
    accessToken: key,
  })
