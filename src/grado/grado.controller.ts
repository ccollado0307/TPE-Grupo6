import { Controller, Get, Param } from '@nestjs/common';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { PersonalService } from 'src/personal/personal.service';
import { Grado } from './grado.entity';
import { GradoService } from './grado.service';

@Controller('grado')
export class GradoController {
    public constructor(
        private readonly gradoService: GradoService)  { }
       
    @Get("getAll")
    public getAllGrados(): Promise<Grado[]> {
        return this.gradoService.getAllGrados();
    }

    @Get(":id")
    public getGradoById(@Param('id') id: number): Promise<Grado> {
        return this.gradoService.getGradoById(id);
    }
}