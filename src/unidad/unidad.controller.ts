import { Controller, Get } from '@nestjs/common';
import { Unidad } from './unidad.entity';
import { UnidadService } from './unidad.service';


@Controller('unidad')
export class UnidadController {
    public constructor(
        private readonly unidadService: UnidadService) { }

    @Get("getAll")
    public getAllUnidades(): Promise<Unidad[]> {
        return this.unidadService.getAllUnidades();
    }
}