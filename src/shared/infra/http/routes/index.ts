import refreshTokenRouter from '@modules/commons/auth/infra/http/routes/refreshToken.routes';
import authRouter from '@modules/commons/auth/infra/http/routes/users.routes';
import menuRouter from '@modules/commons/menus/infra/http/routes/menu.routes';
import usersRouter from '@modules/commons/users/infra/http/routes/users.routes';
import { Router } from 'express';

const routes = Router();

routes.use('/auth', authRouter);
routes.use('/refresh', refreshTokenRouter);
routes.use('/user', usersRouter);
routes.use('/menu', menuRouter);


export { routes };
