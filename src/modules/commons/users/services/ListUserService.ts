import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IUser } from '../domain/models/IUser';
import { IUsersRepository } from '../domain/repositories/IUsersRepository';

@injectable()
class ListUserService {
    constructor(
        @inject('UsersRepository')
        private usersRepository: IUsersRepository,
    ) {}

    public async execute(userId: number): Promise<IUser[]> {
        const isAdimn = await this.usersRepository.findById(userId);

        if (!isAdimn) {
            throw new AppError('User not exist!');
        }

        if (!isAdimn.userAdmin) {
            throw new AppError('User not is Adinin!');
        }

        const users = await this.usersRepository.findAll();

        return users;
    }
}

export default ListUserService;
