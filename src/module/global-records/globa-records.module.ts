import { Module } from '@nestjs/common';

import { PeopleModule } from './people/people.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [UsersModule,  PeopleModule]
})
export class GlobaRecordsModule {}
