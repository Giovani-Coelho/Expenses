import express, { NextFunction, Request, Response } from 'express';

import 'express-async-errors';

import './database';

import './shared/container';

import { AppError } from './errors/AppError';
import { router } from './routes';

const app = express();

app.use(express.json());

app.use(router);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  // verifica se a instancia eh do tipo appError
  if (err instanceof AppError) {
    // se for return mensagem de error
    return res.status(err.statusCode).json({
      message: err.message,
    });
  }
  // se a instancia nao for do tipo appErro e for do tipo Error:
  // se retornar esse erro eh algo da aplicacao algo que nao tenho controle
  return res.status(500).json({
    status: 'error',
    message: `Internal server error - ${err.message}`,
  });
});

app.listen(5000, () => console.log('Server is Running'));
