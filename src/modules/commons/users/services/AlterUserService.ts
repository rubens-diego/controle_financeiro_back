import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
export default class AlterUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(data: IUser): Promise<IUser> {
        const userExists = await this.usersRepository.findById(data.id);

        if (!userExists) {
            throw new AppError('User not exist!');
        }

        return await this.usersRepository.save(data);
    }
}
