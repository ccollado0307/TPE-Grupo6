import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
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
      Personal
    ])
  ],
  controllers: [UnidadController, PersonalController],
  providers: [UnidadService, PersonalService]
})
export class UnidadModule {}
