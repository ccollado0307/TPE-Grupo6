import { Controller, Get } from '@nestjs/common';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { Grado } from './grado.entity';
import { GradoService } from './grado.service';

@Controller('grado')
export class GradoController {
    public constructor(private readonly gradoService: GradoService, 
        private asistenciaService: AsistenciaService) { }
       
    @Get("getAll")
    public getAllGrados(): Promise<Grado[]> {
        return this.gradoService.getAllGrados();
    }
}