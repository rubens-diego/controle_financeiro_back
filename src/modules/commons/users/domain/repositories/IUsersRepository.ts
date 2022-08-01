import { ICreateUser } from '../models/ICreateUser';
import { IUpdateRefreshToken } from '../models/IUpdateRefreshToken';
import { IUser } from '../models/IUser';

export interface IUsersRepository {
    findAll(): Promise<IUser[]>;
    findByUserName(userName: string): Promise<IUser | undefined>;
    findById(id: number): Promise<IUser | undefined>;
    findByIdUserByPeople(id: number): Promise<IUser | undefined>;
    create(data: ICreateUser): Promise<IUser>;
    save(user: IUser): Promise<IUser>;
    updateRefreshToken(user: IUpdateRefreshToken): Promise<IUser>;
    findByUserRefreshToken(refreshToken: string): Promise<IUser | undefined>;
}
