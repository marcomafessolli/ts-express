import { Document, Schema, Model, model } from 'mongoose'

interface UserInterface extends Document {
  firstName?: string
  lastName?: string
  email: string
}

const UserSchema = new Schema(
  {
    email: String,
    firstName: String,
    lastName: String,
  },
  {
    timestamps: true,
  }
)

const User: Model<UserInterface> = model<UserInterface>('User', UserSchema)

export { UserInterface, User }
