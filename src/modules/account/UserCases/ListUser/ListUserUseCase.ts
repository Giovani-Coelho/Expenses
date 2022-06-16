import { User } from '../../entities/User';
import { IUserRepository } from '../../Repositories/IUserRepository';

class ListUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute(email: string): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }
}

export { ListUserUseCase };
