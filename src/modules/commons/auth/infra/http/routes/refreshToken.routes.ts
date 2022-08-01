import isAuthenticated from '@shared/middlewares/isAuthenticated';
import { Router } from 'express';

import RefreshTokenController from '../controllers/RefreshTokenController';

const refreshTokenRouter = Router();
const refreshTokenController = new RefreshTokenController();

refreshTokenRouter.get('/', refreshTokenController.refresh);

export default refreshTokenRouter;
