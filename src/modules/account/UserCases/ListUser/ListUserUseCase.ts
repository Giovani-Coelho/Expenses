import { User } from '../../entities/User';
import { IUserRepository } from '../../Repositories/IUserRepository';

class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute(): User[] {
    const user = this.userRepository.listAll();
    return user;
  }
}

export { ListUserUseCase };
