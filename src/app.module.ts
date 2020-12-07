import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AsistenciaModule } from './asistencia/asistencia.module';
import { MotivoModule } from './motivo/motivo.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GradoModule } from './grado/grado.module';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { LoginModule } from './login/login.module';
import { UnidadModule } from './unidad/unidad.module';
import { PersonalModule } from './personal/personal.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AsistenciaModule,
    MotivoModule,
    GradoModule,
    LoginModule,
    UnidadModule,
    PersonalModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..',
'client')}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}