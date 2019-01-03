import { makeExecutableSchema } from 'graphql-tools'
import { graphql } from 'graphql'
import typeDefs from './typeDefs'
import resolvers from './resolvers'

const schema = makeExecutableSchema({ typeDefs, resolvers })

const query = process.argv[2]

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result, null, 2))
})
