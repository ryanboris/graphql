const resolvers = {
  Query: {
    hello: () => 'World',
    name: () => 'James'
  }
}

export { resolvers as default }
