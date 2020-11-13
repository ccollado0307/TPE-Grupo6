import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonalActivo } from 'src/reporte/personalActivo';
import { ConsultasService } from './consultas.service';
import { PersonalAsistencia } from './personalAsistencia';

@Controller('consultas')
export class ConsultasController {
    reporteService: any;

    constructor(private consultasService: ConsultasService) { }

    @Get()
    public getCargarPersonal(): PersonalActivo[] {
        return this.consultasService.getCargarPersonal();
    }

    @Post()
    create(@Body() consultas: any): PersonalAsistencia[] {
        return this.consultasService.getInformationQuery(consultas);
    }
}