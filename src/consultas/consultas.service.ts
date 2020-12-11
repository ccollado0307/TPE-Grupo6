import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
/* import * as fs from 'fs'; */
import { Asistencia } from 'src/asistencia/asistencia.entity';
import { Grado } from 'src/grado/grado.entity';
import { Personal } from 'src/personal/personal.entity';
/* import { PersonalActivo } from 'src/reporte/personalActivo'; */
import { Repository } from 'typeorm';
/* import { PersonalAsistencia } from './personalAsistencia'; */

@Injectable()
export class ConsultasService {
    constructor(
        /* @InjectRepository(Grado) private readonly gradoRepository: Repository<Grado>, */
        @InjectRepository(Asistencia) private readonly asistenciaRepository: Repository<Asistencia>,
        @InjectRepository(Personal) private readonly personalRepository: Repository<Personal>,
    ) { }

    //Carga listado de personal de la base de datos
    public async loadListado(): Promise<Personal[]> {
        try {
            const personal: Personal[] = await this.personalRepository.find(
                {
                    relations: ["grado"],
                    where: { activo: true }
                });
            return personal;
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        }
    }

    //Recibe el numero de consulta, personal y fecha; y selecciona la informacion a devolver 
    public async getInformationQuery(parametros: any): Promise<Asistencia[]> {
        try {
            switch (parametros.nroConsulta) {
                case 1:
                    const listadoConsulta1: Asistencia[] = await this.asistenciaRepository.find(
                        {
                            relations: ["personal", "grado", "motivo"],
                            where: { "personal": parametros.idPers }
                        });
                    return listadoConsulta1; 
                    break;
                case 2:
                    const listadoConsulta2: Asistencia[] = await this.asistenciaRepository.find(
                        {
                            relations: ["grado", "motivo", "personal"],
                            where: { fecha: parametros.fecha }
                        });
                    return listadoConsulta2; 
                    break;
                case 3:
                    const listadoConsulta3: Asistencia[] = await this.asistenciaRepository.find(
                        {
                            relations: ["grado", "motivo", "personal"],
                            where: { fecha: parametros.fecha, "motivo": 3 }
                        });
                    return listadoConsulta3;
                    break;
                case 4:
                    const listadoConsulta4: Asistencia[] = await this.asistenciaRepository.find(
                        {
                            relations: ["grado", "motivo", "personal"],
                            where: { fecha: parametros.fecha, "motivo": 4 }
                        });
                    return listadoConsulta4;
                    break;
                case 5:
                    const listadoConsulta5: Asistencia[] = await this.asistenciaRepository.find(
                        {
                            relations: ["grado", "motivo", "personal"],
                            where: { fecha: parametros.fecha, "motivo": 2 }
                        });
                    return listadoConsulta5;
                    break;
            }
        } catch (error) {
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: "there is an error in the request, " + error,
            }, HttpStatus.NOT_FOUND);
        };
    }
}