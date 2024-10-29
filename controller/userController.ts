import { Request, Response } from 'express';
import UserService from '../service/userService';

class UserController {
  async createUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserService.createUser(req.body);
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getUserById(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserService.getUserById(parseInt(req.params.id));
      if (!user) return res.status(404).json({ error: "Usuário não encontrado" });
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    try {
      const user = await UserService.updateUser(parseInt(req.params.id), req.body);
      return res.json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    try {
      await UserService.deleteUser(parseInt(req.params.id));
      return res.status(204).send();
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await UserService.getAllUsers();
      return res.json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}

export default new UserController();
