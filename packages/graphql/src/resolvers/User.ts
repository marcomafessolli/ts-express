import { User } from '@ts-express/db/schemas/User'

const userResolver = {
  Query: {
    users: () => User.find(),
    user: (_, { id }) => User.findById(id),
  },
}

export { userResolver }
