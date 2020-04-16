import { uuid } from 'uuidv4';
import bcrypt from 'bcryptjs';

class User {
  id: string;

  name: string;

  lastName: string;

  email: string;

  password: string;

  constructor({ name, lastName, email, password }: Omit<User, 'id'>) {
    this.id = uuid();
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.password = User.getHash(password);
  }

  private static getHash(password: string): string {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
  }
}

export default User;
