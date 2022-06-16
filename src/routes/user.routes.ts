import { Router } from 'express';

import { createUserController } from '../modules/account/UserCases/CreateUser';
import { listUserController } from '../modules/account/UserCases/ListUser';

const userRoutes = Router();

userRoutes.post('/', (req, res) => createUserController.handle(req, res));

userRoutes.get('/', (req, res) => listUserController.handle(req, res));

export { userRoutes };
