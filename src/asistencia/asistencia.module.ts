import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { GradoController } from 'src/grado/grado.controller';
import { Grado } from 'src/grado/grado.entity';
import { GradoService } from 'src/grado/grado.service';
import { MotivoController } from 'src/motivo/motivo.controller';
import { Motivo } from 'src/motivo/motivo.entity';
import { MotivoService } from 'src/motivo/motivo.service';
import { PersonalController } from 'src/personal/personal.controller';
import { Personal } from 'src/personal/personal.entity';
import { PersonalService } from 'src/personal/personal.service';
import { AsistenciaController } from './asistencia.controller';
import { Asistencia } from './asistencia.entity';
import { AsistenciaService } from './asistencia.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Asistencia,
      Motivo,
      Grado,
      Personal
    ])
  ],
  controllers: [AsistenciaController, MotivoController, GradoController, PersonalController],
  providers: [AsistenciaService, MotivoService, GradoService, PersonalService]
})
export class AsistenciaModule { }