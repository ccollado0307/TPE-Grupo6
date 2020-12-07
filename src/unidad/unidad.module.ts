import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnidadController } from './unidad.controller';
import { Unidad } from './unidad.entity';
import { UnidadService } from './unidad.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Unidad
    ])
  ],
  controllers: [UnidadController],
  providers: [UnidadService]
})
export class UnidadModule {}
