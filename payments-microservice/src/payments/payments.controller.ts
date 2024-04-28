import { EventPattern, MessagePattern, Payload } from '@nestjs/microservices';
import { Controller } from '@nestjs/common';
import { CreatePaymentDto } from './dtos/createPayment.dto';

@Controller()
export class PaymentsMicroserviceController {
  @EventPattern('createPayment')
  createUser(@Payload() data: CreatePaymentDto) {
    console.log(data);
  }
}
