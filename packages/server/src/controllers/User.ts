import { Request, Response } from 'express'

import { User } from '../schemas/User'

class IndexController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const users = await User.find()

      return res.json(users)
    } catch (err) {
      return res.json(err)
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const { body } = req;
      const user = await User.create(body)

      return res.json(user) 
    } catch (err) {
      return res.send(err)
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      await User.findByIdAndDelete(id)

      return res.sendStatus(200)
    } catch (err) {
      return res.send(err)
    }
  }
}

export default new IndexController()
