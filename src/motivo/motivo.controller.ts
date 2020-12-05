import { Controller } from '@nestjs/common';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { MotivoService } from './motivo.service';

@Controller('motivo')
export class MotivoController {
    public constructor(private readonly motivoService: MotivoService,
        private asistenciaService: AsistenciaService) { }
   
/*     @Get("getAll")
    public getAllFacturas(): Promise<Asistencia[]> {
        return this.asistenciaService.getAll();
    } */
}