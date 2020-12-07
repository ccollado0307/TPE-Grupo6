import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaController } from 'src/asistencia/asistencia.controller';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { MotivoController } from 'src/motivo/motivo.controller';
import { Motivo } from 'src/motivo/motivo.entity';
import { MotivoService } from 'src/motivo/motivo.service';
import { PersonalController } from 'src/personal/personal.controller';
import { Personal } from 'src/personal/personal.entity';
import { PersonalService } from 'src/personal/personal.service';
import { UnidadController } from 'src/unidad/unidad.controller';
import { Unidad } from 'src/unidad/unidad.entity';
import { UnidadService } from 'src/unidad/unidad.service';
import { GradoController } from './grado.controller';
import { Grado } from './grado.entity';
import { GradoService } from './grado.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Grado,
      Asistencia,
      Motivo, 
      Personal,
      Unidad
    ])
  ],
  controllers: [GradoController, AsistenciaController, MotivoController, PersonalController,UnidadController],
  providers: [GradoService, AsistenciaService, MotivoService, PersonalService,UnidadService]
})
export class GradoModule {}