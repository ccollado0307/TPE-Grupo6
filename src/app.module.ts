import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { ReporteController } from './reporte/reporte.controller';
import { ReporteService } from './reporte/reporte.service';
import { LoginController } from './login/login.controller';
import { LoginService } from './login/login.service';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),],
  controllers: [AppController, ReporteController, LoginController],
  providers: [AppService, ReporteService, LoginService],
})
export class AppModule {}
