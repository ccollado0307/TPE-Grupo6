import { Controller, Get } from '@nestjs/common';
import { PersonalService } from 'src/personal/personal.service';
import { Unidad } from './unidad.entity';
import { UnidadService } from './unidad.service';


@Controller('unidad')
export class UnidadController {
    public constructor(
        private readonly unidadService: UnidadService,
        private readonly personalService: PersonalService) { }
       
    @Get("getAll")
    public getAllUnidades(): Promise<Unidad[]> {
        return this.unidadService.getAllUnidades();
    }
}