import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { ICreateToken } from '../domain/models/ICreateToken';
import { ILogin } from '../domain/models/ILogin';
import { v4 as uuid } from 'uuid';
import AuthJwt from '@config/AuthJwt';
import { IUsersRepository } from '@modules/commons/users/domain/repositories/IUsersRepository';
import { IUser } from '@modules/commons/users/domain/models/IUser';
@injectable()
class AuthServices {
    constructor(
        @inject('UsersRepository')
        private userRepository: IUsersRepository,
    ) { }

    public async execute({ userName, password }: ILogin): Promise<ICreateToken> {
        const auth = new AuthJwt();
        let token: string;
        let login: IUser | undefined;
        const date = new Date();
        const refreshTokenrash = uuid();

        if (userName === '' || password === '') {
            throw new AppError('User or Password not completed!', 401);
        }

        login = await this.userRepository.findByUserName(userName);


        if (!login) {
            throw new AppError('User or Password not Exists!', 401);
        }

        if (login.password !== password) {
            throw new AppError('User or Password not Exists!', 401);
        }

        token = await auth.createToken(login);

        if (!token) {
            throw new AppError('Not Menus of users!', 401);
        }

        //#region =================create refresh token ===========

        date.setMonth(new Date().getMonth() + 1);

        login.refreshToken = refreshTokenrash;

        login.dataValidRefreshToken = date;
        const updateUserToken = await this.userRepository.updateRefreshToken({
            id: Number(login.id),
            dataValidRefreshToken: date,
            refreshToken: refreshTokenrash,
        });



        if (!updateUserToken) {
            throw new AppError('Erro in refreh token!', 401);
        }

        if (!updateUserToken?.refreshToken) {
            throw new AppError('Erro in refreh token no registred!', 401);
        }

        if (!token) {
            throw new AppError('Error in token!', 401);
        }

        return {
            userName: login.userName,
            admin: login.userAdmin ? login.userAdmin : false,
            active: login.active ? login.active : false,
            blocked: login.blocked ? login.blocked : false,
            authorization: token,
            refreshToken: String(updateUserToken.refreshToken),
        };
    }
}

export default AuthServices;
