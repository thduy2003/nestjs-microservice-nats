import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { PaymentsMicroserviceController } from './payments.controller';
import { NatsClientModule } from 'src/nats-client/nats-client.module';
import { Payment } from 'src/typeorm/entities/Payment';
import { PaymentsService } from './payments.service';
import { User } from 'src/typeorm/entities/User';

@Module({
  imports: [TypeOrmModule.forFeature([Payment, User]), NatsClientModule],
  controllers: [PaymentsMicroserviceController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
