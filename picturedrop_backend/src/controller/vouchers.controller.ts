import { Controller, Get, Param } from '@nestjs/common';
import { VouchersService } from '../services/vouchers.service';
import { Voucher } from '../entities/voucher.entity'; 

@Controller('vouchers')
export class VouchersController {
  constructor(private readonly vouchersService: VouchersService) {}

  @Get()
  getHello(): string {
    return this.vouchersService.getMessage();
  }

  @Get('/:workspaceId')
  async getVouchersByWorkspace(
    @Param('workspaceId') workspaceId: string,
  ): Promise<Voucher[]> {
    return this.vouchersService.getVouchersByWorkspace(workspaceId);
  }
}
