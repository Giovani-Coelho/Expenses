import { Router } from 'express';

import { AuthenticateUserController } from '../modules/account/UserCases/authenticateUser/AuthenticateUserCotroller';

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();

authenticateRoutes.post('/sessions', authenticateUserController.handle);

export { authenticateRoutes };
