import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';

@Module({
  imports: [],
  controllers: [UsersMicroserviceController],
  exports: [],
})
export class UsersModule {}
