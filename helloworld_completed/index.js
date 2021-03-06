const { makeExecutableSchema } = require('graphql-tools')
const { graphql } = require('graphql')
const typeDefs = require('./typeDefs')
const resolvers = require('./resolvers')

const schema = makeExecutableSchema({ typeDefs, resolvers })

const query = process.argv[2]

graphql(schema, query).then(result => {
  console.log(JSON.stringify(result, null, 2))
})
