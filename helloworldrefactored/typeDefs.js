const typeDefs = `
schema {
  query: Query
}
type Query {
  hello: String
  name: String
}
`
export { typeDefs as default }
