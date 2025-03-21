import { Controller, Get, Param } from '@nestjs/common';
import { SubmissionsService } from '../services/submissions.service';

@Controller('submissions')
export class SubmissionsController {
  constructor(private readonly submissionsService: SubmissionsService) {}

  @Get('/workspace-count')
  async getSubmissionCount(): Promise<any[]> {
    return this.submissionsService.countSubmissionsPerWorkspace();
  }

  @Get('/monthly-count')
  async getMonthlySubmissionCount(): Promise<any[]> {
    return this.submissionsService.countSubmissionsPerMonth();
  }

  @Get('/yearly-count')
  async getYearlySubmissionCount(): Promise<any[]> {
    return this.submissionsService.countSubmissionsPerYear();
  }

    // Monatliche Uploads pro Workspace
    @Get('/monthly-count/:workspaceId')
    async getMonthlySubmissionCountByWorkspace(
      @Param('workspaceId') workspaceId: string,
    ): Promise<any[]> {
      return this.submissionsService.countSubmissionsPerMonthByWorkspace(workspaceId);
    }
  
    // Jährliche Uploads pro Workspace
    @Get('/yearly-count/:workspaceId')
    async getYearlySubmissionCountByWorkspace(
      @Param('workspaceId') workspaceId: string,
    ): Promise<any[]> {
      return this.submissionsService.countSubmissionsPerYearByWorkspace(workspaceId);
    }
}
