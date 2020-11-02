import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
import { join } from 'path';
import { ReporteController } from './reporte/reporte.controller';
import { ReporteService } from './reporte/reporte.service';

@Module({
  imports: [ServeStaticModule.forRoot({
    rootPath: join(__dirname, '..',
    'client'),
    }),],
  controllers: [AppController, ReporteController],
  providers: [AppService, ReporteService],
})
export class AppModule {}
