import { Module } from '@nestjs/common';
import { UsersMicroserviceController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/typeorm/entities/User';
import { UsersService } from './users.service';
import { Payment } from 'src/typeorm/entities/Payment';

@Module({
  imports: [TypeOrmModule.forFeature([User, Payment])],
  controllers: [UsersMicroserviceController],
  providers: [UsersService],
})
export class UsersModule {}
