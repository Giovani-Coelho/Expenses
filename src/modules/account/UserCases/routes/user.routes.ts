import { Router } from 'express';

import createUserController from '../CreateUser';

const userRoutes = Router();

userRoutes.post('/', (req, res) => {
  console.log('bola');
  createUserController().handle(req, res);
});

export { userRoutes };
