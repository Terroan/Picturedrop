import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubmissionsModule } from './modules/submissions.module'; // Modul für Submissions
import { WorkspacesModule } from './modules/workspaces.module'; // Modul für Workspaces
import { Submission } from './entities/submission.entity'; // Submission-Entity
import { Workspace } from './entities/workspace.entity'; // Workspace-Entity
import { Voucher } from './entities/voucher.entity';
import { VouchersModule } from './modules/voucher.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5434,
      username: 'myuser', // Dein PostgreSQL-Benutzername
      password: 'mypassword', // Dein PostgreSQL-Passwort
      database: 'mydb', // Der Name der Datenbank
      entities: [Submission, Workspace, Voucher], // Alle genutzten Entities explizit angeben
      synchronize: false,
      logging: true,
    }),
    SubmissionsModule, // Submissions-Modul
    WorkspacesModule,  // Workspaces-Modul
    VouchersModule
  ],
  controllers: [AppController], // Globale AppController (falls notwendig)
  providers: [AppService], // Globale Services (falls notwendig)
})
export class AppModule {}
