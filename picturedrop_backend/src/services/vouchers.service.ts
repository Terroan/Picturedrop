import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Voucher } from '../entities/voucher.entity'; // Replace with your actual entity

@Injectable()
export class VouchersService {
  constructor(
    @InjectRepository(Voucher)
    private vouchersRepository: Repository<Voucher>,
  ) {}

  getMessage(): string {
    return 'Hier!';
  }

  async getVouchersByWorkspace(workspaceId: string): Promise<Voucher[]> {
    console.log('This is a simple log');
    return this.vouchersRepository.find({
      where: { WorkspaceId: workspaceId },
    });
  }
}
