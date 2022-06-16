import { IUserRepository } from '../../Repositories/IUserRepository';

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}
  execute({ name, email }): void {
    this.userRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
