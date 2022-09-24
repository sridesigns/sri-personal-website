import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetCaseStudies() {
  const query = gql`
  {
    caseStudies {
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