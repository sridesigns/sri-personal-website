import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetWork() {
  const query = gql`
  query Work {
    recentWorks {
      title
      slug
      description
    }
    archives {
      title
      slug
      summary
      publishedAt
    }
  }
  `
  return await graphQLClient.request(query);
}