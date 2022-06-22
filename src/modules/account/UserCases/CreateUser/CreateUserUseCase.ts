import { hash } from 'bcrypt';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { IUserRepository } from '../../Repositories/IUserRepository';

interface IUserDTO {
  name: string
  email: string,
  password: string,
}
// injectable transforma em uma classe que seja possivel ser injetada
@injectable()
class CreateUserUseCase {
  // injetar o UserRepository
  constructor(@inject('UserRepository') private userRepository: IUserRepository) {}

  public async execute({
    name,
    email,
    password,
  }: IUserDTO): Promise<void> {
    const userAlreadyExists = await this.userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists');
    }

    const passwordHash = await hash(password, 8);

    await this.userRepository.create({
      name,
      email,
      password: passwordHash,
    });
  }
}

export { CreateUserUseCase };
