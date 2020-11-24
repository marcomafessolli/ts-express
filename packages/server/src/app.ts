import express from 'express'
import cors from 'cors'

import mongoose from 'mongoose'

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
    mongoose.connect(`mongodb://${process.env.DB_HOST}:27017/express-app`, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
  }

  private routes() {
    this.express.use(Routes)
  }
}

export default new App().express
