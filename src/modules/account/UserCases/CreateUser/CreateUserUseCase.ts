import { IUserRepository } from '../../Repositories/IUserRepository';

interface IUserDTO {
  name: string
  username: string
  email: string,
  password: string,
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  public async execute({
    name, username, email, password,
  }: IUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    await this.userRepository.create({
      name, username, email, password,
    });
  }
}

export { CreateUserUseCase };
