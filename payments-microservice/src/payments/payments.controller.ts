import { ClientProxy, EventPattern, Payload } from '@nestjs/microservices';
import { Controller, Inject } from '@nestjs/common';
import { CreatePaymentDto } from './dtos/createPayment.dto';
import { PaymentsService } from './payments.service';

@Controller()
export class PaymentsMicroserviceController {
  constructor(
    @Inject('NATS_SERVICE') private natsClient: ClientProxy,
    private paymentsService: PaymentsService,
  ) {}
  @EventPattern('createPayment')
  async createUser(@Payload() data: CreatePaymentDto) {
    const newPayment = await this.paymentsService.createPayment(data);
    if (newPayment) this.natsClient.emit('paymentCreated', newPayment);
  }
}
