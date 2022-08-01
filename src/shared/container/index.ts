

import { IMenuRepository } from '@modules/commons/menus/domain/repositories/IMenuRepository';
import MenuRepository from '@modules/commons/menus/infra/repositories/MenuRepository';
import { IUsersRepository } from '@modules/commons/users/domain/repositories/IUsersRepository';
import UsersRepository from '@modules/commons/users/infra/repositories/UsersRepository';
import { container } from 'tsyringe';

// import "@shared/container" E importado em server
container.registerSingleton<IUsersRepository>('UsersRepository', UsersRepository);
container.registerSingleton<IMenuRepository>('MenuRepository', MenuRepository);
