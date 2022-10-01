import { DataSource } from "typeorm";
import { createPeople1664223310730 } from "./migrations/1664223310730-createPeople";
import { createMenus1664224875837 } from "./migrations/1664224875837-createMenus";
import { createUsers1664226094461 } from "./migrations/1664226094461-createUsers";



export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'finaceiro',
        synchronize: false,
        entities: [
          __dirname + '/../**/*.entity{.ts,.js}',
        ],
        
      });

      return dataSource.initialize();
    },
  },
];


export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'root',
  database: 'finaceiro',
  entities: [__dirname + '/../**/*.entity.js'],
  synchronize: false,
  migrations: [
    createPeople1664223310730,
    createMenus1664224875837,
    createUsers1664226094461,
  ],
});


/**
 * 
 * criar migrations
 * 
 * npx typeorm migration:create src\database\migrations\ "nome da migration"
 * 
 * executar migratiosn 
 * 
 * 1° executar o
 *  npm run build
 * 
 * npx typeorm migration:run -d dist\database\database.provider.js

 */