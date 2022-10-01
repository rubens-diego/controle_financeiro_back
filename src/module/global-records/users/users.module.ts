import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { AuthModule } from '../../auth/auth.module';

import { UsersProviders } from './users.provider';
import { DatabaseModule } from 'src/database/database.module';
import { UsersRepository } from './repositories/users.repository';


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, UsersRepository, ...UsersProviders ],
  
})
export class UsersModule {}
