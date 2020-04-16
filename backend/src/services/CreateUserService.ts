import User from '../models/User';
import UsersRepository from '../repositories/UsersRepository';

interface Request {
  name: string;
  lastName: string;
  email: string;
  password: string;
}

class CreateUserService {
  private usersRepository: UsersRepository;

  constructor(usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  public execute({ name, lastName, email, password }: Request): User {
    const verifyTypeOf = [name, lastName, email, password];

    if (verifyTypeOf.map(prop => typeof prop) === null) {
      throw Error('Some data was not send to server');
    }

    const user = this.usersRepository.create({
      name: name.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      password,
    });

    return user;
  }
}

export default CreateUserService;
