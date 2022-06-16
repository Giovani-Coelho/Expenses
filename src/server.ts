import express from 'express';

import './database';

import { router } from './modules/account/UserCases/routes';

const app = express();

app.use(express.json());

app.use(router);

app.listen(5000, () => console.log('Server is Running'));
