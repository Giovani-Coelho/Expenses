import { inject, injectable } from 'tsyringe';

import { User } from '../../entities/User';
import { IUserRepository } from '../../Repositories/IUserRepository';

@injectable()
class ListUserUserCase {
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  public async execute(): Promise<User[]> {
    const user = await this.userRepository.listAll();
    return user;
  }
}

export { ListUserUserCase };
