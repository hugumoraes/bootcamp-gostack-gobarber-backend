import { Router } from 'express';

import User from './app/models/User';

const routes = Router();

routes.get('/', async (req, res) => {
  const user = await User.create({
    name: 'Diego Fernandes',
    email: 'diego@rocketseat.com.br',
    password_hash: '37218312831',
  });

  return res.json(user);
});

export default routes;
