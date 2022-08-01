import { ICreateUser } from '@modules/commons/users/domain/models/ICreateUser';
import CreateUserService from '@modules/commons/users/services/CreateUserService';
import ListUserService from '@modules/commons/users/services/ListUserService';
import { ReadUserService } from '@modules/commons/users/services/ReadUserService';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export default class UsersController {
    public async index(request: Request, response: Response): Promise<Response> {
        const listUser = container.resolve(ListUserService);
        const userId: number = Number(request.decoded.id);
        const users = await listUser.execute(userId);
        return response.json(users);
    }

    public async readUser(request: Request, response: Response): Promise<Response> {
        const readUser = container.resolve(ReadUserService);
        const userId: number = Number(request.decoded.id);
        const user = await readUser.execute(userId);
        return response.json(user);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const createUsers = container.resolve(CreateUserService);
        let user: ICreateUser = {
            userName: String(request.body.user),
            password: String(request.body.password),
        };
        const userCreated = await createUsers.execute(user);
        return response.json(userCreated);
    }
}
