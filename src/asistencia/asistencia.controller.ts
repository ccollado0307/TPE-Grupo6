import { Controller, Get } from '@nestjs/common';
import { GradoService } from 'src/grado/grado.service';
import { MotivoService } from 'src/motivo/motivo.service';
import { Asistencia } from './asistencia.entity';
import { AsistenciaService } from './asistencia.service';

@Controller('asistencia')
export class AsistenciaController {
    public constructor(private readonly asistenciaService: AsistenciaService,
        private motivoService: MotivoService,
        private gradoService: GradoService) { }
   
    @Get("getAll")
    public getAllFacturas(): Promise<Asistencia[]> {
        return this.asistenciaService.getAll();
    }
}