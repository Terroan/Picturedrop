import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Vouchers')
export class Voucher {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column({ type: 'varchar', length: 255 })
  VoucherCode: string;

  @Column({ type: 'timestamp', nullable: true })
  ValidatedOn: Date;

  @Column({ type: 'uuid' })
  WorkspaceId: string;

  @Column({ type: 'uuid', nullable: true })
  WinningChallengeId: string;

  @Column({ type: 'uuid', nullable: true })
  CreatedById: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  CreatedOn: Date;

  @Column({ type: 'uuid', nullable: true })
  LastModifiedById: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
  LastModifiedOn: Date;

  @Column({ type: 'uuid', nullable: true })
  SubmissionId: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  VoucherPrize: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  VoucherPrizeEn: string;
}
