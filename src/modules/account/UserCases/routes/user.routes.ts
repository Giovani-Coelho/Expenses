import { Router } from 'express';

import createUserController from '../CreateUser';
import { listUserController } from '../ListUser';

const userRoutes = Router();

userRoutes.post('/', (req, res) => {
  console.log('bola');
  createUserController().handle(req, res);
});

userRoutes.get('/', (req, res) => listUserController.handle(req, res));

export { userRoutes };
