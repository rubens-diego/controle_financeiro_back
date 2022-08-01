import { Router } from 'express';
import AuthController from '../controllers/AuthController';

const authRouter = Router();
const usersController = new AuthController();

authRouter.get('/', usersController.login);

export default authRouter;
