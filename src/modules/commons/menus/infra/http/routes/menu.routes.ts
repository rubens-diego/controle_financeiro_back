import isAuthenticated from '@shared/middlewares/isAuthenticated';
import { celebrate, Segments, Joi } from 'celebrate';
import { Router } from 'express';
import MenuController from '../controllers/MenuController';

const menuRouter = Router();
const menuController = new MenuController();

menuRouter.get('/', isAuthenticated, menuController.index);
menuRouter.get('/info', isAuthenticated, menuController.readUser);
menuRouter.post(
    '/',

    celebrate({
        [Segments.BODY]: Joi.object().options({ abortEarly: false }).keys({
            //  para retornar todos os campos com erro.
            // name: Joi.string().min(3).required(),
            // email: Joi.string().email().required(),
            // password: Joi.string().required(),
            // passwordConfirmation: Joi.string().required().valid(Joi.ref('password')),
        }),
    }),

    isAuthenticated,

    menuController.create,
);

export default menuRouter;
