import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { Grado } from 'src/grado/grado.entity';
import { Unidad } from 'src/unidad/unidad.entity';
import { PersonalController } from './personal.controller';
import { PersonalService } from './personal.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Asistencia,
      Unidad,
      Grado
    ])
  ],
  controllers: [PersonalController],
  providers: [PersonalService]
})
export class PersonalModule {}
