import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createMenus1664224875837 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'menus',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'name_menu',
            type: 'varchar',
            length: '30',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'name_rota_menu',
            type: 'varchar',
            length: '30',
            isUnique: true,
            isNullable: false,
          },
          {
            name: 'name_icon_menu',
            type: 'varchar',
            length: '30',
            isUnique: true,
            isNullable: false,
          },

          {
            name: 'gym_id_fk',
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
      'menus',
      new TableForeignKey({
        columnNames: ['gym_id_fk'],
        referencedColumnNames: ['id'],
        referencedTableName: 'menus',
        name: 'menus_menus',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
