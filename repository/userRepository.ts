import { UserAttributes, UserCreationAttributes } from '../interface/userInterface';
import User from '../model/userModel'; // agora o User é importado corretamente como um tipo

class UserRepository {
  async createUser(data: UserCreationAttributes): Promise<User> {
    return await User.create(data);
  }

  async getUserById(id: number): Promise<User | null> {
    return await User.findByPk(id);
  }

  async updateUser(id: number, data: Partial<UserAttributes>): Promise<number> {
    const [affectedCount] = await User.update(data, { where: { id } });
    return affectedCount;
 }


 async deleteUser(id: number): Promise<number> {
    return await User.destroy({ where: { id } });
 }

  async getAllUsers(): Promise<User[]> {
    return await User.findAll();
  }
}

export default new UserRepository();
