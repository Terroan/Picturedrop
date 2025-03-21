import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Submissions')
export class Submission {
  @PrimaryGeneratedColumn('uuid')
  Id: string;

  @Column()
  WorkspaceId: string;

  @Column()
  CreatedOn: Date;
}
