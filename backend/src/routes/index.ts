import { Router } from 'express';
import userRouter from './user.routes';
import cardRouter from './card.routes';

const routes = Router();

routes.use('/users', userRouter);
routes.use('/cards', cardRouter);

export default routes;
