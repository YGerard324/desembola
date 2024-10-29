// src/services/UserService.ts
import UserRepository from '../service/userService';
import { UserAttributes, UserCreationAttributes } from '../interface/userInterface';

class UserService {
  async createUser(data: UserCreationAttributes): Promise<UserAttributes> {
    // Exemplo de lógica adicional: verificar dados obrigatórios antes de criar o usuário
    if (!data.email || !data.password) {
      throw new Error("Email e senha são obrigatórios.");
    }
    return await UserRepository.createUser(data);
  }

  async getUserById(id: number): Promise<UserAttributes | null> {
    const user = await UserRepository.getUserById(id);
    if (!user) throw new Error("Usuário não encontrado.");
    return user;
  }

  async updateUser(id: number, data: Partial<UserAttributes>): Promise<UserAttributes | null> {
    await UserRepository.updateUser(id, data);
    return this.getUserById(id);
  }

  async deleteUser(id: number): Promise<number> {
    const deletedRows: number = await UserRepository.deleteUser(id);
    if (deletedRows === 0) throw new Error("Usuário não encontrado para exclusão.");
    else
      return deletedRows;
 }


  async getAllUsers(): Promise<UserAttributes[]> {
    return await UserRepository.getAllUsers();
  }
}

export default new UserService();
