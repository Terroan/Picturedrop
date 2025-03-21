import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Submission } from '../entities/submission.entity';

@Injectable()
export class SubmissionsService {
  constructor(
    @InjectRepository(Submission)
    private submissionsRepository: Repository<Submission>,
  ) {}

  async countSubmissionsPerWorkspace(): Promise<any[]> {
      return await this.submissionsRepository.query(`
          SELECT submission."WorkspaceId", COUNT(submission."Id") AS "submissionCount"
        FROM "Submissions" submission
        GROUP BY submission."WorkspaceId"
      `);
      }
      
      async countSubmissionsPerMonth(): Promise<any[]> {
        return await this.submissionsRepository.query(`
          SELECT TO_CHAR(submission."CreatedOn", 'YYYY-MM') AS "month", COUNT(submission."Id") AS "submissionCount"
          FROM "Submissions" submission
          GROUP BY "month"
          ORDER BY "month" ASC
        `);
      }
    
      async countSubmissionsPerYear(): Promise<any[]> {
        return await this.submissionsRepository.query(`
          SELECT TO_CHAR(submission."CreatedOn", 'YYYY') AS "year", COUNT(submission."Id") AS "submissionCount"
          FROM "Submissions" submission
          GROUP BY "year"
          ORDER BY "year" ASC
        `);
      }
    
      async countSubmissionsPerMonthByWorkspace(workspaceId: string): Promise<any[]> {
        return await this.submissionsRepository.query(`
          SELECT TO_CHAR(submission."CreatedOn", 'YYYY-MM') AS "month", COUNT(submission."Id") AS "submissionCount"
          FROM "Submissions" submission
          WHERE submission."WorkspaceId" = $1
          GROUP BY "month"
          ORDER BY "month" ASC
        `, [workspaceId]);
      }
    
      async countSubmissionsPerYearByWorkspace(workspaceId: string): Promise<any[]> {
        return await this.submissionsRepository.query(`
          SELECT TO_CHAR(submission."CreatedOn", 'YYYY') AS "year", COUNT(submission."Id") AS "submissionCount"
          FROM "Submissions" submission
          WHERE submission."WorkspaceId" = $1
          GROUP BY "year"
          ORDER BY "year" ASC
        `, [workspaceId]);
      }
}
