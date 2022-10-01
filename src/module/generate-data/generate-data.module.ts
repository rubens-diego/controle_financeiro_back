import { Module } from '@nestjs/common';
import { GenerateDataService } from './generate-data.service';
import { GenerateDataController } from './generate-data.controller';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from '../auth/auth.module';
import { DataRepository } from './repositories/data.repository';
import { DataProviders } from './data.provider';

@Module({
  imports: [
    DatabaseModule,
    AuthModule,
  ],
  controllers: [GenerateDataController],
  providers: [GenerateDataService ,DataRepository , ...DataProviders ]
})
export class GenerateDataModule {}
