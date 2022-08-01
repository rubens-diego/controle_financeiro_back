import { ICreateMenu } from '@modules/commons/menus/domain/models/ICreateMenu';
import { IMenu } from '@modules/commons/menus/domain/models/IMenu';
import { IMenuRepository } from '@modules/commons/menus/domain/repositories/IMenuRepository';


class MenuRepository implements IMenuRepository {


    constructor() {

    }
    findAll(): Promise<IMenu[]> {
        throw new Error('Method not implemented.');
    }
    findByUserName(nameName: string): Promise<IMenu | undefined> {
        throw new Error('Method not implemented.');
    }
    findById(id: number): Promise<IMenu | undefined> {
        throw new Error('Method not implemented.');
    }
    findByIdUserByPeople(id: number): Promise<IMenu | undefined> {
        throw new Error('Method not implemented.');
    }
    create(data: ICreateMenu): Promise<IMenu> {
        throw new Error('Method not implemented.');
    }
    save(user: IMenu): Promise<IMenu> {
        throw new Error('Method not implemented.');
    }
}

export default MenuRepository;
