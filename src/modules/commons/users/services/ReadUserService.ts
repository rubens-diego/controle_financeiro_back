import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IReadUser } from '../domain/models/IReadUser';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
export class ReadUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(userId: number): Promise<IReadUser> {
        let user: IUser | undefined;

        user = await this.usersRepository.findById(userId);

        if (!user) {
            throw new AppError('User not exist!', 400);
        }

        return {
            id: user.id,
            userName: String(user.userName),
            active: Boolean(user.active),
            blocked: Boolean(user.blocked),
            userAdmin: Boolean(user.userAdmin),
            //typeUserIdFk: number;
            // peopleIdFk?: number | null;
        };
    }
}
