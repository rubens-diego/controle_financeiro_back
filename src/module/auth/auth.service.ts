import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

import { sign } from 'jsonwebtoken';
import { Request } from 'express';
import { JwtPayload } from './models/jwt-payload.model';
import { User } from '../global-records/users/models/users.model';

@Injectable()
export class AuthService {
  constructor() { }

  public async createAccessToken(userId: string): Promise<string> {
    return sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRATION,
    });
  }

  public async validateUser(jwtPayload: JwtPayload): Promise<User> {



    const user: any = {

      name: 'root',
      email: 'rdsdo2011@gmail.com',
      password: 'root',

    };
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }

  private static jwtExtractor(request: Request): string {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
      throw new BadRequestException('Bad request.');
    }

    const [, token] = authHeader.split(' ');


    return token;
  }

  public returnJwtExtractor(): (request: Request) => string {
    return AuthService.jwtExtractor;
  }
}
