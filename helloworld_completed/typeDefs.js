const typeDefs = `
schema {
  query: Query
}
type Query {
  hello: String
  name: String
}
`

module.exports = typeDefs