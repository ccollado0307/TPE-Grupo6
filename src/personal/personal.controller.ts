import { Controller, Get } from '@nestjs/common';
import { AsistenciaService } from 'src/asistencia/asistencia.service';
import { GradoService } from 'src/grado/grado.service';
import { UnidadService } from 'src/unidad/unidad.service';
import { Personal } from './personal.entity';
import { PersonalService } from './personal.service';

@Controller('personal')
export class PersonalController {
    public constructor(
        private readonly personalService: PersonalService) { }

    @Get("getAll")
    public getAllPersonal(): Promise<Personal[]> {
        return this.personalService.getAllPersonal();
    }
}