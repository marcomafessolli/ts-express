import express from 'express'
import cors from 'cors'

import { Database } from '@ts-express/db'

import Routes from './routes'

class App {
  public express: express.Application

  constructor() {
    this.express = express()

    this.database()
    this.middlewares()
    this.routes()
  }

  private middlewares() {
    this.express.use(express.json())
    this.express.use(cors())
  }

  private database() {
    return Database.connect();
  }

  private routes() {
    this.express.use(Routes)
  }
}

export default new App().express
