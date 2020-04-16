import User from '../models/User';

interface CreateUserDTO {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

class UsersRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public all(): User[] {
    return this.users;
  }

  public create({ name, lastName, email, password }: CreateUserDTO): User {
    const user = new User({ name, lastName, email, password });

    this.users.push(user);

    return user;
  }
}

export default UsersRepository;
