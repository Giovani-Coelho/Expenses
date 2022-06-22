import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../errors/AppError';
import { UserRepository } from '../../Repositories/implementations/UserRepository';

interface IRequest {
  email: string
  password: string
}

interface IResponse {
  user: {
    name: string,
    email: string
  },
  token: string
}

@injectable()
class AuthenticateUserUseCase {
  constructor(@inject('UserRepository') private userRepository: UserRepository) {}

  public async execute({ email, password }: IRequest): Promise<IResponse> {
    // verificar se o email esta correto
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('Email or Password incorrect');
    }
    // verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError('Email or Password incorrect');
    }

    const token = sign({}, '33f9106df795fcfd1fb1c12eadc0dfdf', {
      subject: user.id,
      expiresIn: '1d',
    });

    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
