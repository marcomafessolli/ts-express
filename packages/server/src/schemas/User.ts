import { Document, Schema, Model, model } from 'mongoose'
import { UserSchema as UserInterface } from '@ts-express/schemas'

export interface UserModel extends UserInterface, Document {}

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

export const User: Model<UserModel> = model<UserModel>('User', UserSchema);

