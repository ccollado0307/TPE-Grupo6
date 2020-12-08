import { Body, Controller, Get, Post } from '@nestjs/common';
import { Personal } from 'src/personal/personal.entity';
import { PersonalActivo } from 'src/reporte/personalActivo';
import { ConsultasService } from './consultas.service';
import { PersonalAsistencia } from './personalAsistencia';

@Controller('consultas')
export class ConsultasController {

    constructor(private consultasService: ConsultasService) { }

    @Get() //Devuelve el listado de personal 
    public getCargarPersonal(): Promise<Personal[]> {
        return this.consultasService.loadListado();
    }

/*     @Post() //Devuelve el resultado de la consulta seleccionada
    create(@Body() consultas: any): PersonalAsistencia[] {
        return this.consultasService.getInformationQuery(consultas);
    } */
}