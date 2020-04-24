import { uuid } from 'uuidv4';

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
    this.password = password;
  }
}

export default User;
