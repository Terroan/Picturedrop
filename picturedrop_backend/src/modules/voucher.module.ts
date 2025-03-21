import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VouchersController } from '../controller/vouchers.controller';
import { VouchersService } from '../services/vouchers.service';
import { Voucher } from '../entities/voucher.entity';


@Module({
  imports: [TypeOrmModule.forFeature([Voucher])],
  controllers: [VouchersController],
  providers: [VouchersService],
})

export class VouchersModule{}
