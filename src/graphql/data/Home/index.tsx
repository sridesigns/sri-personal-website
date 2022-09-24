import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetHome() {
  const query = gql`
    query Home {
      caseStudies {
        title
        slug
        summary
        bannerImage {
          url
          width
          height
        }
      }
      sideProjects(orderBy: featured_DESC first: 1){
        title
        slug
        summary
        publishedAt
        coverImage {
          url
          width
          height
        }
      }
      appExplorations(orderBy: featured_DESC first: 1) {
        title
        slug
        summary
        publishedAt
      }
      blogPosts(orderBy: publishedAt_DESC first: 3) {
        title
        slug
        excerpt
        publishedAt
      }
    }
  `
  return await graphQLClient.request(query);
}