import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonalActivo } from './personalActivo';
import { ReporteService } from './reporte.service';

@Controller('reporte')
export class ReporteController {

    constructor(private reporteService: ReporteService) { }

    //Pide al servicio que devuelva el listado del personal activo
    @Get()
    public getListadoPersonal(): PersonalActivo[] {
        return this.reporteService.getListPersonal();
    }
    
    @Post()
    create(@Body() asist: any[]): string {
        return this.reporteService.registrarAsistencia(asist);
    }

    @Post(':index')
    addPersonal(@Body() persona: any): string {
        return this.reporteService.registrarPersona(persona);
    }
}