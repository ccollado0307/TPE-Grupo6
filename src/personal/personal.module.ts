import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaController } from 'src/asistencia/asistencia.controller';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { GradoController } from 'src/grado/grado.controller';
import { Grado } from 'src/grado/grado.entity';
import { GradoService } from 'src/grado/grado.service';
import { MotivoController } from 'src/motivo/motivo.controller';
import { Motivo } from 'src/motivo/motivo.entity';
import { MotivoService } from 'src/motivo/motivo.service';
import { UnidadController } from 'src/unidad/unidad.controller';
import { Unidad } from 'src/unidad/unidad.entity';
import { UnidadService } from 'src/unidad/unidad.service';
import { PersonalController } from './personal.controller';
import { Personal } from './personal.entity';
import { PersonalService } from './personal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Asistencia,
      Unidad,
      Grado,
      Personal,
      Motivo
    ])
  ],
  controllers: [PersonalController,UnidadController,GradoController,AsistenciaController,MotivoController],
  providers: [PersonalService,UnidadService,GradoService,AsistenciaService,MotivoService]
})
export class PersonalModule {}
