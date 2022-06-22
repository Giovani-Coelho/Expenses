import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListUserUserCase } from './ListUserUserCase';

class ListUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listUserUseCase = container.resolve(ListUserUserCase);

    const user = await listUserUseCase.execute();

    return res.status(200).json(user);
  }
}

export { ListUserController };
