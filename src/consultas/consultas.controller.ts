import { Body, Controller, Get, Post } from '@nestjs/common';
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { Personal } from 'src/personal/personal.entity';
/* import { PersonalActivo } from 'src/reporte/personalActivo'; */
import { ConsultasService } from './consultas.service';
/* import { PersonalAsistencia } from './personalAsistencia'; */

@Controller('consultas')
export class ConsultasController {

    constructor(private consultasService: ConsultasService) { }

    @Get() //Devuelve el listado de personal 
    public getCargarPersonal(): Promise<Personal[]> {
        return this.consultasService.loadListado();
    }

    @Post() //Devuelve el resultado de la consulta seleccionada
    create(@Body() consultas: any): Promise<Asistencia[]> {
        return this.consultasService.getInformationQuery(consultas);
    }
}