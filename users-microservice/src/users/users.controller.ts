import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { CreateUserDto } from './dtos/CreateUser.dto';
import { Controller } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller()
export class UsersMicroserviceController {
  constructor(private usersService: UsersService) {}
  @MessagePattern({ cmd: 'createUser' })
  createUser(@Payload() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }
  @EventPattern('paymentCreated')
  paymentCreated(@Payload() data: any) {
    console.log(data);
  }
  @MessagePattern({ cmd: 'getUserById' })
  getUserById(@Payload() userId: string) {
    console.log('userId', userId);
    return this.usersService.getUserById(userId);
  }
}
