import { gql } from 'graphql-request'
import { graphQLClient } from '../../services/hygraphcms'

export async function GetRecents() {
  const query = gql`
  {
    recentWorks {
        id
        title
        slug
        description
    }
  }
  `
  return await graphQLClient.request(query);
}