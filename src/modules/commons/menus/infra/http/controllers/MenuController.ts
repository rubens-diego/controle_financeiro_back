import { Request, Response } from 'express';

export default class UsersController {
    public async index(request: Request, response: Response): Promise<Response> {
        return response.json({});
    }

    public async readUser(request: Request, response: Response): Promise<Response> {
        return response.json({});
    }

    public async create(request: Request, response: Response): Promise<Response> {
        return response.json({});
    }
}
