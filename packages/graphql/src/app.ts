import { ApolloServer } from 'apollo-server'

import { Database } from '@ts-express/db'

import { userResolver } from './resolvers/User'
import { userSchema } from './schemas/User'

class App {
  public apollo: ApolloServer

  constructor() {
    this.apollo = new ApolloServer({
      typeDefs: [
        userSchema
      ],
      resolvers: [
        userResolver
      ],
    })

    this.database()
  }

  private async database() {
    return Database.connect()
  }
}

export default new App().apollo
