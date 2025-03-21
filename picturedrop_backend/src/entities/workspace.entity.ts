import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Workspaces')
export class Workspace {
  @PrimaryGeneratedColumn('uuid')
  Id: string; 

  @Column()
  Name: string; 

  @Column({nullable: true})
  Description: string;

  @Column()
  SubscriptionStatus: string;

}
