import { DataTypes, Model, Sequelize } from 'sequelize';
import { UserAttributes, UserCreationAttributes } from '../interface/userInterface';

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public cpf!: string;
  public phone!: string;
  public imagePath?: string;
  public bornDate!: string;
  public accessLevel!: number;
}

export const initUserModel = (sequelize: Sequelize): typeof User => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        unique: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      cpf: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imagePath: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      bornDate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      accessLevel: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0,
      }
    },
    {
      sequelize,
      modelName: 'user',
      timestamps: false,
      freezeTableName: true,
    }
  );

  return User;
};

export default User; // Exporta o tipo User para uso na camada de repositório
