import { Module } from '@nestjs/common';
import { PeopleService } from './people.service';
import { PeopleController } from './people.controller';
import { PeopleProviders } from './people.provider';
import { PeopleRepository } from './repositories/people.repository';
import { DatabaseModule } from 'src/database/database.module';
import { AuthModule } from 'src/module/auth/auth.module';


@Module({
  imports: [
    DatabaseModule,
    AuthModule,
  ],
  controllers: [PeopleController],
  providers: [PeopleService , PeopleRepository, ...PeopleProviders]
})
export class PeopleModule {}
