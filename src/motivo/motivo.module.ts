import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm/dist';
import { AsistenciaController } from 'src/asistencia/asistencia.controller';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { GradoController } from 'src/grado/grado.controller';
import { Grado } from 'src/grado/grado.entity';
import { GradoService } from 'src/grado/grado.service';
import { MotivoController } from './motivo.controller';
import { Motivo } from './motivo.entity';
import { MotivoService } from './motivo.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Motivo,
      Asistencia, 
      Grado 
    ])
  ],
  controllers: [MotivoController, AsistenciaController, GradoController],
  providers: [MotivoService, AsistenciaService, GradoService]
})
export class MotivoModule {}