import { container } from 'tsyringe';

import { UserRepository } from '../../modules/account/Repositories/implementations/UserRepository';
import { IUserRepository } from '../../modules/account/Repositories/IUserRepository';

container.registerSingleton<IUserRepository>(
  'UserRepository',
  UserRepository,
);
