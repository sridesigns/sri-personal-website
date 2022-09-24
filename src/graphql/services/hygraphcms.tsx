import { GraphQLClient } from 'graphql-request'

const endpoint: string = process.env.GRAPH_API_ENDPOINT!
const token = process.env.GRAPH_AUTH_TOKEN

export const graphQLClient = new GraphQLClient(endpoint, {
  headers: {
    authorization: `Bearer ${token}`,
  },
})