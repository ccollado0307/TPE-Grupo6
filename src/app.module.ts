import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { MotivoModule } from './motivo/motivo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradoModule } from './grado/grado.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AsistenciaModule,
    MotivoModule,
    GradoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}