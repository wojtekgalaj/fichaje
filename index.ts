import { ApolloServer, gql } from 'apollo-server'
import { merge } from 'lodash'
import { loadTypeSchema } from './utils/schema-loader'
import users from './types/user/user.resolvers'

export const start = async () => {
  const types = ['user']

  const rootSchema = `
    schema {
      query: Query
    }
  `
  const schemaTypes = await Promise.all(types.map(loadTypeSchema))

  const server = new ApolloServer({
    typeDefs: [rootSchema, ...schemaTypes],
    resolvers: merge({}, users)
  })

  server.listen().then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`)
  })
}

start()
