import isAuthenticated from '@shared/middlewares/isAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import UsersController from '../controllers/UsersController';

const usersRouter = Router();
const usersController = new UsersController();

usersRouter.get('/', isAuthenticated, usersController.index);
usersRouter.get('/info', isAuthenticated, usersController.readUser);
usersRouter.post(
    '/',

    celebrate({
        [Segments.BODY]: Joi.object()
            .options({ abortEarly: false })
            .keys({
                //  para retornar todos os campos com erro.
                name: Joi.string().min(3).required(),
                email: Joi.string().email().required(),
                password: Joi.string().required(),
                passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
            }),
    }),

    isAuthenticated,

    usersController.create,
);

export default usersRouter;
