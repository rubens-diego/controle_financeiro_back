import { ICreateMenu } from '../models/ICreateMenu';
import { IMenu } from '../models/IMenu';

export interface IMenuRepository {
    findAll(): Promise<IMenu[]>;
    findByUserName(nameName: string): Promise<IMenu | undefined>;
    findById(id: number): Promise<IMenu | undefined>;
    findByIdUserByPeople(id: number): Promise<IMenu | undefined>;
    create(data: ICreateMenu): Promise<IMenu>;
    save(user: IMenu): Promise<IMenu>;
}
