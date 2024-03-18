import express from 'express';

import authControllers from '../controllers/authControllers.js';

import authenticate from '../midelwares/authenticate.js';

import validateBody from '../helpers/validateBody.js';

import { userSignupSchema, userSigninSchema } from '../schemas/usersShemas.js';

const authRouter = express.Router();

authRouter.post(
  '/register',
  validateBody(userSignupSchema),
  authControllers.register
);

authRouter.post(
  '/login',
  validateBody(userSigninSchema),
  authControllers.login
);

authRouter.get('/current', authenticate, authControllers.getCurrent);

authRouter.post('/logout', authenticate, authControllers.logout);

export default authRouter;
