import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetBlogPosts() {
  const query = gql`
  {
    blogPosts (orderBy: publishedAt_DESC) {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        width
        height
        url
      }
    }
  }
  `
  return await graphQLClient.request(query);
}