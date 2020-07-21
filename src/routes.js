import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/users', UserController.store);
routes.get('/users', UserController.list);
routes.put('/users', authMiddleware, UserController.update);

routes.post('/sessions', SessionController.store);
export default routes;
