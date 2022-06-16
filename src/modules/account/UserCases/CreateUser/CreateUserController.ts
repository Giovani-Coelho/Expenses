import { Request, Response } from 'express';

import { CreateUserUseCase } from './CreateUserUseCase';

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const {
      name, username, email, password,
    } = req.body;

    await this.createUserUseCase.execute({
      name, username, email, password,
    });

    return res.status(201).send();
  }
}

export { CreateUserController };
