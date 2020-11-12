import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonalActivo } from './personalActivo';
import {ReporteService} from './reporte.service';


@Controller('reporte')
export class ReporteController {

    constructor(private reporteService: ReporteService) { }

    //Le pido al servicio que me devuelve el listado del personal
    @Get()
    public getListadoPersonal(): PersonalActivo[] {
        return this.reporteService.getListPersonal();
    }

    @Post()
    create(@Body() asist: any[]): string {
       return this.reporteService.registrarAsistencia(asist);
    }

}

