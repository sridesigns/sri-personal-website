import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetRecent(slug) {
  const query = gql`
  query RecentWork($slug: String!) {
    recentWork(where: {slug: $slug}) {
      id
      title
      slug
      description
      body {
        markdown
      }
    }
  }
  `
  const variables = {
    slug,
  }

  return await graphQLClient.request(query, variables);
}

export async function GetRecentSlug() {
  const query = gql`
  query {
    recentWorks {
      slug 
    }
  }
  `
  return await graphQLClient.request(query);
}