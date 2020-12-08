import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AsistenciaController } from 'src/asistencia/asistencia.controller';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { ConsultasController } from 'src/consultas/consultas.controller';
import { ConsultasService } from 'src/consultas/consultas.service';
import { GradoController } from 'src/grado/grado.controller';
import { Grado } from 'src/grado/grado.entity';
import { GradoService } from 'src/grado/grado.service';
import { MotivoController } from 'src/motivo/motivo.controller';
import { Motivo } from 'src/motivo/motivo.entity';
import { MotivoService } from 'src/motivo/motivo.service';
import { PersonalController } from 'src/personal/personal.controller';
import { Personal } from 'src/personal/personal.entity';
import { PersonalService } from 'src/personal/personal.service';
import { UnidadController } from './unidad.controller';
import { Unidad } from './unidad.entity';
import { UnidadService } from './unidad.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Unidad, 
      Personal,
      Grado,
      Asistencia,
      Motivo
    ])
  ],
  controllers: [UnidadController, PersonalController, GradoController,AsistenciaController,MotivoController,ConsultasController],
  providers: [UnidadService, PersonalService,GradoService,AsistenciaService,MotivoService,ConsultasService]
})
export class UnidadModule {}
