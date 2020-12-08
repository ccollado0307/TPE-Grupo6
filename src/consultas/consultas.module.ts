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
import { PersonalController } from 'src/personal/personal.controller';
import { Personal } from 'src/personal/personal.entity';
import { PersonalService } from 'src/personal/personal.service';
import { UnidadController } from 'src/unidad/unidad.controller';
import { Unidad } from 'src/unidad/unidad.entity';
import { UnidadService } from 'src/unidad/unidad.service';
import { ConsultasController } from './consultas.controller';
import { ConsultasService } from './consultas.service';

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
    controllers: [ConsultasController, AsistenciaController, MotivoController, GradoController, PersonalController,UnidadController],
    providers: [ConsultasService, AsistenciaService, MotivoService, GradoService, PersonalService,UnidadService]
  })
  export class ConsultasModule {}
