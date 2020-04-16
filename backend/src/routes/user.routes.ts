import { Router } from 'express';
import UsersRepository from '../repositories/UsersRepository';
import CreateUserService from '../services/CreateUserService';

const userRouter = Router();

const usersRepository = new UsersRepository();

userRouter.get('/', (request, response) => {
  const users = usersRepository.all();
  return response.json(users);
});

userRouter.post('/', (request, response) => {
  try {
    const { name, lastName, email, password } = request.body;

    const createUser = new CreateUserService(usersRepository);

    const user = createUser.execute({ name, lastName, email, password });

    return response.json(user);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default userRouter;
