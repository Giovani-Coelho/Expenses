import { Router } from 'express';

import { CreateUserController } from '../modules/account/UserCases/CreateUser/CreateUserController';
import { ListUserController } from '../modules/account/UserCases/ListUser/ListUserController';

const userRoutes = Router();

const createUserController = new CreateUserController();
const listUserController = new ListUserController();

userRoutes.post('/', createUserController.handle);
userRoutes.get('/', listUserController.handle);

export { userRoutes };
