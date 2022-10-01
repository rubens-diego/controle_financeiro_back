import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createPeople1664223310730 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'people',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },

          {
            name: 'name_people',
            type: 'varchar',
            length: '250',
            isNullable: false,
          },

          {
            name: 'surname_people',
            type: 'varchar',
            length: '250',
            isNullable: false,
          },
          {
            name: 'cpf',
            type: 'varchar',
            length: '14',
            isNullable: false,
            isUnique: true,
          },

          {
            name: 'birthday_date',
            type: 'date',
          },

          {
            name: 'dd',
            type: 'varchar',
            length: '3',
            isNullable: false,
          },
          {
            name: 'telephone',
            type: 'varchar',
            length: '10',
            isNullable: false,
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP',
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
