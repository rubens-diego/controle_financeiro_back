import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './database/database.module';
import { AuthModule } from './module/auth/auth.module';
import { GlobaRecordsModule } from './module/global-records/globa-records.module';
import { GenerateDataModule } from './module/generate-data/generate-data.module';


@Module({
  imports: [
  ConfigModule.forRoot(),
  DatabaseModule,
  AuthModule,
  GlobaRecordsModule,
  GenerateDataModule,
  ],
  controllers: [],
  providers: [],
  exports:[DatabaseModule]
})
export class AppModule {}
