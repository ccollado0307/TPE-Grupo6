import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
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
import { UnidadController } from 'src/unidad/unidad.controller';
import { Unidad } from 'src/unidad/unidad.entity';
import { UnidadService } from 'src/unidad/unidad.service';
import { AsistenciaController } from './asistencia.controller';
import { Asistencia } from './asistencia.entity';
import { AsistenciaService } from './asistencia.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Asistencia,
      Motivo,
      Grado,
      Personal,
      Unidad 
    ])
  ],
  controllers: [AsistenciaController, MotivoController, GradoController, PersonalController,UnidadController, ConsultasController],
  providers: [AsistenciaService, MotivoService, GradoService, PersonalService,UnidadService, ConsultasService]
})
export class AsistenciaModule { }