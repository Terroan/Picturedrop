import { Controller, Get } from '@nestjs/common';
import { WorkspacesService } from '../services/workspaces.service';
import { Workspace } from '../entities/workspace.entity';

@Controller('workspaces')
export class WorkspacesController {
  constructor(private readonly workspacesService: WorkspacesService) {}

  @Get()
  async findAll(): Promise<Workspace[]> {
    return await this.workspacesService.findAll();
  }
}
