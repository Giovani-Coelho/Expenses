import { Request, Response } from 'express';

import { ListUserUseCase } from './ListUserUseCase';

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}
  public handle(req: Request, res:Response): Response {
    const { email } = req.body;
    const user = this.listUserUseCase.execute(email);

    return res.json(user);
  }
}

export { ListUserController };
