const ssl = process.env.TYPEORM_SSL === 'true' ? true : false;
const sslExtra =
    process.env.TYPEORM_SSL === 'true'
        ? {
              ssl: {
                  rejectUnauthorized: false,
              },
          }
        : {};

module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'financeiro',
    synchronize: false,
    logging: process.env.TYPEORM_LOGGING,
    entities: [process.env.TYPEORM_ENTITIES],

    ssl: ssl,

    extra: sslExtra,

    migrations: [process.env.TYPEORM_MIGRATIONS],
    subscribers: [process.env.TYPEORM_SUBSCRIBERS],
    cli: {
        entitiesDir: process.env.TYPEORM_ENTITIES_DIR,
        migrationsDir: process.env.TYPEORM_MIGRATIONS_DIR,
        subscribersDir: process.env.TYPEORM_SUBSCRIBERS_DIR,
    },
};
