import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AsistenciaController } from 'src/asistencia/asistencia.controller';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { ConsultasController } from 'src/consultas/consultas.controller';
import { ConsultasService } from 'src/consultas/consultas.service';
import { GradoController } from 'src/grado/grado.controller';
import { Grado } from 'src/grado/grado.entity';
import { GradoService } from 'src/grado/grado.service';
import { PersonalController } from 'src/personal/personal.controller';
import { Personal } from 'src/personal/personal.entity';
import { PersonalService } from 'src/personal/personal.service';
import { UnidadController } from 'src/unidad/unidad.controller';
import { Unidad } from 'src/unidad/unidad.entity';
import { UnidadService } from 'src/unidad/unidad.service';
import { MotivoController } from './motivo.controller';
import { Motivo } from './motivo.entity';
import { MotivoService } from './motivo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Motivo,
      Asistencia, 
      Grado,
      Personal,
      Unidad
      ])
  ],
  controllers: [MotivoController, AsistenciaController, GradoController,PersonalController,UnidadController,ConsultasController],
  providers: [MotivoService, AsistenciaService, GradoService,PersonalService,UnidadService,ConsultasService]
})
export class MotivoModule {}