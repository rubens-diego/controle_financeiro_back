import AuthJwt from '@config/AuthJwt';
import { IUser } from '@modules/commons/users/domain/models/IUser';
import { IUsersRepository } from '@modules/commons/users/domain/repositories/IUsersRepository';
import AppError from '@shared/errors/AppError';
import { isAfter } from 'date-fns';
import { inject, injectable } from 'tsyringe';
import { ICreateToken } from '../domain/models/ICreateToken';

@injectable()
export class RefreshTokenService {
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,
    ) {}

    public async execute(refreshToken: string): Promise<ICreateToken> {
        let isdateValid: boolean;
        const auth = new AuthJwt();
        let login: IUser | undefined;
        let token: string;

        if (refreshToken === '') {
            throw new AppError('refreshToken not completed!', 401);
        }

        login = await this.userRepository.findByUserRefreshToken(refreshToken);

        if (!login) {
            throw new AppError('RefreshToken not localizate!', 401);
        }

        if (!login.dataValidRefreshToken) {
            throw new AppError('refreshToken not completed!', 401);
        }

        if (String(login.refreshToken) !== String(refreshToken)) {
            throw new AppError('refreshToken invalid!', 401);
        }

        // a data do banco está apos a data de hoje.
        isdateValid = isAfter(new Date(login.dataValidRefreshToken), new Date());

        if (!isdateValid) {
            throw new AppError('refreshToken not completed!', 401);
        }

        token = await auth.createToken(login);

        if (!token) {
            throw new AppError('Not Menus of users!', 401);
        }

        return {
            userName: login.userName,
            admin: login.userAdmin ? login.userAdmin : false,
            active: login.active ? login.active : false,
            blocked: login.blocked ? login.blocked : false,
            authorization: token,
            refreshToken: String(login.refreshToken),
        };
    }
}
