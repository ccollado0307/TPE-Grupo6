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
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { User } from './user.entity';

@Module({  imports: [
    TypeOrmModule.forFeature([
      Grado,
      Asistencia,
      Motivo,
      User
    ])
  ],
  controllers: [GradoController, AsistenciaController, MotivoController,LoginController],
  providers: [GradoService, AsistenciaService, MotivoService,LoginService]
})
export class LoginModule {
}
