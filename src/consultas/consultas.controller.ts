import { Body, Controller, Get, Post } from '@nestjs/common';
import { PersonalActivo } from 'src/reporte/personalActivo';
import { ConsultasService } from './consultas.service';
import { PersonalAsistencia } from './personalAsistencia';

@Controller('consultas')
export class ConsultasController {
    reporteService: any;

    constructor(private consultasService: ConsultasService) { }

    @Get() //Devuelve el listado de personal activo
    public getCargarPersonal(): PersonalActivo[] {
        return this.consultasService.getCargarPersonal();
    }

    @Post() //Devuelve el resultado de la consulta seleccionada
    create(@Body() consultas: any): PersonalAsistencia[] {
        return this.consultasService.getInformationQuery(consultas);
    }
}