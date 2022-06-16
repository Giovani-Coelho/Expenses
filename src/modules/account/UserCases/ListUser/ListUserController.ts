import { Request, Response } from 'express';

import { ListUserUseCase } from './ListUserUseCase';

class ListUserController {
  constructor(private listUserUseCase: ListUserUseCase) {}
  public handle(req: Request, res:Response): Response {
    const user = this.listUserUseCase.execute();

    return res.json(user);
  }
}

export { ListUserController };
