import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import AppError from '../errors/AppError';

export default async function isAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction,
): Promise<void> {
    const authorization = request.headers.authorization;
    if (!authorization) {
        throw new AppError('Not autenticated', 401);
    }

    let [, token] = authorization.split(' ');

    if (token === undefined) {
        token = authorization;
    }

    try {
        await jwt.verify(token, String(process.env.JWT_TOKEN), (err: any, decoded: any) => {
            if (err) {
                return response.status(401).json({
                    err,
                    menssage: 'Token is invalid!',
                    isvalid: false,
                });
            }

            request.decoded = decoded;

            return next();
        });
    } catch (err) {
        throw new AppError('Error while token altenticate!', 401);
    }
}
