import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetPost(slug) {
  const query = gql`
  query BlogPost($slug: String!) {
    blogPosts(where: { slug: $slug })  {
      id
      title
      slug
      excerpt
      publishedAt
      coverImage {
        url
        width
        height
      }
      body{
        json
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

export async function GetPostSlug() {
  const query = gql`
  query {
    blogPosts {
      slug 
    }
  }
  `
  return await graphQLClient.request(query);
}