import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaController } from 'src/asistencia/asistencia.controller';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { MotivoController } from 'src/motivo/motivo.controller';
import { Motivo } from 'src/motivo/motivo.entity';
import { MotivoService } from 'src/motivo/motivo.service';
import { GradoController } from './grado.controller';
import { Grado } from './grado.entity';
import { GradoService } from './grado.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Grado,
      Asistencia,
      Motivo
    ])
  ],
  controllers: [GradoController, AsistenciaController, MotivoController],
  providers: [GradoService, AsistenciaService, MotivoService]
})
export class GradoModule {}