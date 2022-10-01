import { DataSource } from 'typeorm';

import { Person } from '../global-records/people/entities/person.entity';
import Users from '../global-records/users/entities/users.entity';


export const DataProviders = [


  {
    provide: 'PEOPLE_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Person),
    inject: ['DATA_SOURCE'],
  },
  {
    provide: 'USER_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Users),
    inject: ['DATA_SOURCE'],
  },
];
