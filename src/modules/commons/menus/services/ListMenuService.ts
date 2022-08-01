import AppError from '@shared/errors/AppError';
import { inject, injectable } from 'tsyringe';
import { IMenu } from '../domain/models/IMenu';
import { IMenuRepository } from '../domain/repositories/IMenuRepository';

@injectable()
class ListMenuService {
    constructor(
        @inject('MenuRepository')
        private menuRepository: IMenuRepository,
    ) {}

    public async execute(): Promise<IMenu[]> {
        return [];
    }
}

export default ListMenuService;
