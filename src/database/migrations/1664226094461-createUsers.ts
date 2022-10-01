import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createUsers1664226094461 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'user_name',
            type: 'varchar',
            length: '250',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'password',
            type: 'varchar',
            length: '250',
            isNullable: false,
          },
          {
            name: 'email',
            type: 'varchar',
            length: '150',
            isNullable: false,
            isUnique : true
          },
          {
            name: 'active',
            type: 'boolean',
            isNullable: true,
            default: true,
          },
          {
            name: 'blocked',
            type: 'boolean',
            isNullable: true,
            default: false,
          },
          {
            name: 'refresh_token',
            type: 'varchar',
            length: '500',
            isNullable: true,
          },
          {
            name: 'data_valid_refresh_token',
            type: 'date',
            isNullable: true,
          },
          {
            name: 'user_admin',
            type: 'boolean',
            isNullable: false,
            default: false,
          },

          {
            name: 'people_id_fk',
            type: 'int',
            isNullable: true,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'users',
      new TableForeignKey({
        columnNames: ['people_id_fk'],
        referencedColumnNames: ['id'],
        referencedTableName: 'people',
        name: 'users_people',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
