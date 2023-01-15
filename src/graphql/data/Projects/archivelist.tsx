import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetArchiveList() {
  const query = gql`
  {
    archives {
      id
      title
      slug
      publishedAt
      summary
      bannerImage {
        url
        size
        width
        height
      }
    }
  }
  `
  return await graphQLClient.request(query);
}