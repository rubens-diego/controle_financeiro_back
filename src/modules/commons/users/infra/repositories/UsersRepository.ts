import { ICreateUser } from '@modules/commons/users/domain/models/ICreateUser';
import { IUpdateRefreshToken } from '@modules/commons/users/domain/models/IUpdateRefreshToken';
import { IUser } from '@modules/commons/users/domain/models/IUser';
import { IUsersRepository } from '@modules/commons/users/domain/repositories/IUsersRepository';
import { prismaClient } from '@shared/database/Client';

class UsersRepository implements IUsersRepository {


    constructor() {

    }

    async findAll(): Promise<IUser[]> {
        throw new Error('Method not implemented.');
    }
    public async findByUserName(userName: string): Promise<IUser | undefined> {

        const user: any = await prismaClient.users.findFirst(
            {
                where: {
                    user_name: userName
                }
            }
        )

        return user;
    }

    public async findById(id: number): Promise<IUser> {

        const user: any = await prismaClient.users.findFirst(
            {
                where: {
                    id: id,
                }
            }
        )

        return user;
    }

    public async create(data: ICreateUser): Promise<IUser> {


        const user: any = await prismaClient.users.create(
            {
                data: {
                    user_name: String(data.userName),
                    password: String(data.password),

                }

            }
        )

        return user
    }
    save(user: IUser): Promise<IUser> {
        throw new Error('Method not implemented.');
    }

    public async updateRefreshToken(user: IUpdateRefreshToken): Promise<IUser> {
        //return await this.ormRepository.save(user);
        user.id
        user.refreshToken

        const userRepo: any = await prismaClient.users.update({
            where: {
                id: Number(user.id)
            },
            data: {
                data_valid_refresh_token: user.dataValidRefreshToken,
                refresh_token: user.refreshToken

            }
        })


        userRepo.refreshToken = userRepo.refresh_token


        return userRepo
    }

    public async findByUserRefreshToken(refreshToken: string): Promise<IUser | undefined> {


        const user: any = await prismaClient.users.findFirst(
            {
                where: {
                    refresh_token: refreshToken
                }
            }
        )

        return user;
    }

    public async findByIdUserByPeople(id: number): Promise<IUser | undefined> {


        return undefined;
    }
}

export default UsersRepository;
