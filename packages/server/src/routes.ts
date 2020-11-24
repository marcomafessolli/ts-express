import { Router } from 'express'

import UserController from './controllers/User'

class Routes {
  public routes: Router

  constructor() {
    this.routes = Router()

    this.routes.get('/', (_, res) => res.send('Hello World'))

    this.routes.get('/users', UserController.index)
    this.routes.post('/users', UserController.create)
    this.routes.delete('/users/:id', UserController.delete)
  }
}

export default new Routes().routes
