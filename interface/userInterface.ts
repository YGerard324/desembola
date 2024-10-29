export interface UserAttributes {
    id: number;
    name: string;
    email: string;
    password: string;
    cpf: string;
    phone: string;
    imagePath?: string;
    bornDate: string;
    accessLevel: number;
  }
  
  export interface UserCreationAttributes extends Partial<Omit<UserAttributes, 'id'>> {}
  