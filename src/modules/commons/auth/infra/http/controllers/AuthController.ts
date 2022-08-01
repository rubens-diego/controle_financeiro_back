import AuthServices from '@modules/commons/auth/services/AuthServices';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class AuthController {
    public async login(request: Request, response: Response) {
        try {
            const userName: string = String(request.headers.user);
            const password: string = String(request.headers.password);
            const auth = container.resolve(AuthServices);
            let user = await auth.execute({ userName, password });
            return response.json(user);
        } catch (error) {
            return response.json(error);
        }
    }
}
