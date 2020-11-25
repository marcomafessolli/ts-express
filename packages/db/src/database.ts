import mongoose from 'mongoose'

class Database {
  
  static async connect() {
    return mongoose.connect(`mongodb://database:27017/express-app`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  }
}

export { Database }
