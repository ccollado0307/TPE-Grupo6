import { Controller, Get, Param } from '@nestjs/common';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { Motivo } from './motivo.entity';
import { MotivoService } from './motivo.service';

@Controller('motivo')
export class MotivoController {
    public constructor(private readonly motivoService: MotivoService,
        private asistenciaService: AsistenciaService) { }

/*     //Devuelve el objeto Motivo (idMotivo, Motivo)
    @Get(":id")
    public getMotivoById(@Param('id') id: number): Promise<Motivo> {
        return this.motivoService.getMotivoById(id);
    } */

    //Devuelve el Motivo 
    @Get(":id")
    public getMotivoById(@Param('id') id: number): Promise<string> {
        return this.motivoService.getMotivoById(id);
    }

}